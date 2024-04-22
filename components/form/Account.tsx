"use client";

import React, { useState } from "react";
// Lucide-react's Pencil icon import
import { Pencil } from "lucide-react";
import { updateUser } from "@/lib/actions/user";

// Define the interface for the User object
interface User {
  id: string;
  username: string;
  name: string;
  bio: string;
  email: string;
  phoneNumber: string; // Corrected property type to string
}

// Define the props interface
interface Props {
  user: User;
}

const Account = ({ user }: Props) => {
  // State variables for editing, user data, and saving status
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({ ...user });
  const [saving, setSaving] = useState(false);

  // Function to handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Update user data state
    setUserData({ ...userData, [name]: value });
  };

  // Function to save user data
  const saveUserData = async () => {
    try {
      setSaving(true);
      // Destructure required properties from userData
      const { id, username, name, bio, email, phoneNumber } = userData;
      // Call the updateUser function with the required parameters
      await updateUser({
        userId: id,
        username,
        name,
        bio,
        email,
        phoneNumber, // No need for conversion as phoneNumber is now string
        path: "/profile/edit", // Provide the path parameter
      });
      alert("User data saved successfully!");
      setEditing(false);
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Failed to save user data!");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        
        {/* Editable username field */}
        <div className="mb-4 flex">
          <label className="block text-gray-700 font-bold mb-2">
            Username:
          </label>
          {/* Render input field if editing, otherwise render username */}
          {editing ? (
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-md  ml-1 w-full h-6 py-1"
            />
          ) : (
            <p className="text-gray-900">{userData.username}</p>
          )}
          {/* Edit button */}
          <button
            className="p-1 m-1 hover:bg-slate-100 rounded-lg"
            onClick={() => setEditing(!editing)} // Toggle editing mode
          >
            <Pencil className="w-3 h-3 mb-2" />
          </button>
        </div>
        {/* Repeat the above pattern for other fields */}
        {/* Name field */}
        <div className="mb-4 flex">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-md  ml-1 w-full h-6 py-1"
            />
          ) : (
            <p className="text-gray-900">{userData.name}</p>
          )}
          <button
            className="p-1 m-1 hover:bg-slate-100 rounded-lg"
            onClick={() => setEditing(!editing)}
          >
            <Pencil className="w-3 h-3 mb-2" />
          </button>
        </div>
        {/* Email field */}
        <div className="mb-4 flex">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          {editing ? (
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-md  ml-1 w-full h-6 py-1"
            />
          ) : (
            <p className="text-gray-900">{userData.email}</p>
          )}
          <button
            className="p-1 m-1 hover:bg-slate-100 rounded-lg"
            onClick={() => setEditing(!editing)}
          >
            <Pencil className="w-3 h-3 mb-2" />
          </button>
        </div>
        {/* Phone field */}
        <div className="mb-4 flex">
          <label className="block text-gray-700 font-bold mb-2">Phone:</label>
          {editing ? (
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-md  ml-1 w-full h-6 py-1"
            />
          ) : (
            <p className="text-gray-900">{userData.phoneNumber}</p>
          )}
          <button
            className="p-1 m-1 hover:bg-slate-100 rounded-lg"
            onClick={() => setEditing(!editing)}
          >
            <Pencil className="w-3 h-3 mb-2" />
          </button>
        </div>
        {/* Bio field */}
        <div className="mb-4 flex">
          <label className="block text-gray-700 font-bold mb-2">Bio:</label>
          {editing ? (
            <input
              type="text"
              name="bio"
              value={userData.bio}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-md  ml-1 w-full h-6 py-1"
            />
          ) : (
            <p className="text-gray-900">{userData.bio}</p>
          )}
          <button
            className="p-1 m-1 hover:bg-slate-100 rounded-lg"
            onClick={() => setEditing(!editing)}
          >
            <Pencil className="w-3 h-3 mb-2" />
          </button>
        </div>

        {/* Save button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={saveUserData}
          disabled={saving || !editing} // Disable when saving or not in editing mode
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Account;
