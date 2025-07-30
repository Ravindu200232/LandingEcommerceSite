"use server";

import { db } from "@/lib/db";

//get all propreties
export const getProperties = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    if (response.status === 200) {
      return await response.json();
    } else {
      console.log("No properties found");
      return undefined;
    }
  } catch (error) {
    console.log("Error fetching properties,", error);
    return undefined;
  }
};

//create property
export const createProperty = async (property) => {
  try {
    const result = await db.collection("property").insertOne(property);

    if (result.acknowledged) {
      console.log(`A Property was inserted with _id: ${result.insertedId}`);

      return {
        success: true,
        message: "Property created successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to create property",
      };
    }
  } catch (e) {
    console.log("Error creating property", e);
    return {
      success: false,
      message: "Error creating property",
    };
  }
};

import { ObjectId } from "mongodb";

export const searchProperty = async (query) => {
    console.log("Searching for property with query:", query);
  try {
    console.log("Searching for property with query:", query);
    // Check if query is a valid ObjectId string
    if (!ObjectId.isValid(query)) {
      return {
        success: false,
        message: "Invalid property ID format.",
        data: [],
      };
    }

    const objectId = new ObjectId(query);

    const property = await db
      .collection("property")
      .find({ _id: objectId })
      .limit(1)
      .toArray();

    if (property && property.length > 0) {
      return {
        success: true,
        message: "Property fetched successfully!",
        data: property,
      };
    } else {
      return {
        success: false,
        message: "No property found!",
        data: [],
      };
    }
  } catch (error) {
    console.error("MongoDB fetch failed!", error);
    return {
      success: false,
      message: "Error fetching property.",
      data: [],
    };
  }
};
