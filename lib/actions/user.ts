"use server";
import User from "../modals/User"; // Corrected import path
import connectToDB from "../mongoose";

import { revalidatePath } from "next/cache";

interface Params {
  userId: string;
  bio: string;
  name: string;
  email: string;
  username: string;
  phoneNumber: string;
  path: string;
}

export async function updateUser({
  userId,
  bio,
  name,
  path,
  email, // Corrected variable name
  username,
  phoneNumber,
}: Params): Promise<void> {
  try {
    await connectToDB();

    await User.findOneAndUpdate(
      { clerk_id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        email, // Corrected variable name
        phoneNumber,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path); // Corrected function name
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

interface Props {
  userId: string;
  name: string;
  email: string;
  username: string;
}

export const createUser = async ({ userId, name, email, username }: Props) => {
  try {
    await connectToDB();
    const data = {
      clerk_id: userId,
      username: username.toLowerCase(),
      name: name,
      email: email,
    };
    const saveUser = await new User(data).save();
    console.log("saveUser", saveUser);
  } catch (error:any) {
    console.error("Error creating user:", error);
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const getUser = async (userId: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ clerk_id: userId });
    return user || null;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

// export const createUser = async (formData: FormData) => {
//   try {
//     await connectToDB();
//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//     };
//     const saveUser = await new User(data).save();
//     console.log("saveUser", saveUser);
//   } catch (error) {}
// };
