import { currentUser } from "@clerk/nextjs";
import Account from "@/components/form/Account";
import { getUser } from "@/lib/actions/user";

const ProfilePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <div>Loading...</div>;
  }
  const userId = user.id;
  const existingUser = await getUser(userId);
  let userData;
  if (!existingUser) {
    userData = {
      id: user.id,
      username: user.username || "",
      name: user.firstName || "",
      bio: "", // Add the appropriate bio data if available
      email: user.emailAddresses?.[0]?.emailAddress || "",
      phoneNumber: "", // Add the appropriate phoneNumbers data if available
    };
  } else {
    const dbuser = existingUser;
    userData = {
      id: dbuser.clerk_id,
      username: dbuser.username || "",
      name: dbuser.name || "",
      bio: dbuser.bio || "", // Add the appropriate bio data if available
      email: dbuser.email || "",
      phoneNumber: dbuser.phoneNumber || "", // Add the appropriate phoneNumbers data if available
    };
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <Account user={userData} />
    </div>
  );
};

export default ProfilePage;

// import { useState, useEffect } from "react";
// import { currentUser } from "@clerk/nextjs";
// import Account from "@/components/form/Account";

// const ProfilePage = () => {
//   const [userData, setUserData] = useState<{
//     _id: string;
//     username: string;
//     name: string;

//     bio: string;
//     email: string;
//     phoneNumbers: number;
//   } | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const user = await currentUser();
//         console.log("User data:", user); // Add this line to log user data
//         if (user) {
//           setUserData({
//             _id: user.id,
//             username: user.username || "",
//             name: user.firstName || "",
//             bio: "",
//             email: user.emailAddresses?.[0]?.emailAddress || "",
//             phoneNumbers: 0,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   // if (!userData) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       {/* <Account user={userData} /> */}
//       <div>
//         {user._id}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
