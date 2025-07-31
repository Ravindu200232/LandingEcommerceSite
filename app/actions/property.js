"use server";

import { db } from "@/lib/db";

//get all
export const getProperties = async () => {
  try {
    const properties = await db.collection("property").find({}).toArray();
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
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

export const searchMypro = async (id) => {
  try {
    const property = await db
      .collection("property")
      .find({ user_id: id })
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



//delete movie action
export const deleteProperty = async (id) => {
  try {

    console.log("property id :" ,id)
    const result = await db.collection("property").deleteOne(
      {
        _id: ObjectId.createFromHexString(id),
      },
    );

    if (result.acknowledged) {
    //   console.log(`A movie was inserted with _id: ${result.insertedId}`);

      return {
        success: true,
        message: "property deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete property",
      };
    }
  } catch (e) {
    console.log("Error delete property", e);
    return {
      success: false,
      message: "Error delete property",
    };
  }
};




export const updateProperty = async (id,Doc) => {
  try {

    console.log("property id :" ,Doc)
    const result = await db.collection("property").updateOne(
      {
        _id: ObjectId.createFromHexString(id),
      },
      { $set: Doc },
      { upsert: true }
    );

    if (result.acknowledged) {
    //   console.log(`A movie was inserted with _id: ${result.insertedId}`);

      return {
        success: true,
        message: "property update successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to update property",
      };
    }
  } catch (e) {
    console.log("Error updating property", e);
    return {
      success: false,
      message: "Error updating property",
    };
  }
};

