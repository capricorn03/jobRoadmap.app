import React from "react";
import { currentUser } from "@clerk/nextjs";
import { getUser, createUser } from "@/lib/actions/user";

const Page: React.FC = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not found");
    }

    const userId = user.id;
    const existingUser = await getUser(userId);
    if (!existingUser) {
      const email =
        user.emailAddresses && user.emailAddresses.length > 0
          ? user.emailAddresses[0].emailAddress
          : "";
      const newUser = {
        userId: user.id,
        username: user.username ?? "",
        name: user.firstName ?? "",
        email: email,
      };
      await createUser(newUser);
    }

    return (
      <React.Fragment>
        <div>Trending jobs

          <div>
            hi

            
          </div>
        </div>
      </React.Fragment>
    );
  } catch (error) {
    console.error("Error fetching or creating user:", error);
    return <div>An error occurred while processing your request.</div>;
  }
};

export default Page;
