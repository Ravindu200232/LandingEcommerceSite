import { db } from "@/lib/db";
import { ObjectId } from "mongodb";

export const authUser = async (user) => {
  const id = JSON.parse(user);
  console.log(id);

  try {
    if (!ObjectId.isValid(id)) {
      return {
        success: false,
        message: "Invalid user ID format.",
        data: [],
      };
    }

    const objectId = new ObjectId(id);

    const user = await db.collection("user").findOne({ _id: objectId });

    if (user) {
      return {
        success: true,
        message: "User fetched successfully!",
        data: user,
      };
    } else {
      return {
        success: false,
        message: "No user found!",
        data: [],
      };
    }
  } catch (error) {
    console.error("MongoDB fetch failed!", error);
    return {
      success: false,
      message: "Error fetching user.",
      data: [],
    };
  }
};
