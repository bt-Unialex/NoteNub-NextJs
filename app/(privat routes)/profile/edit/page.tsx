"use client";

import AvatarPicker from "@/components/AvatarPicker/AvatarPicker";
import { getMe, updateMe } from "@/lib/api/clientApi";
import { Metadata } from "next";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit your user details and settings",
};

const EditProfile = () => {
  const [userName, setUserName] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    getMe().then((user) => {
      setUserName(user.userName ?? "");
      setPhotoUrl(user.photoUrl ?? "");
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateMe({ userName, photoUrl });
  };

  return (
    <div>
      <h1>Edit profile</h1>
      <br />
      <AvatarPicker profilePhotoUrl={photoUrl} onChangePhoto={setImageFile} />
      <br />
      <form onSubmit={handleSaveUser}>
        <input type="text" value={userName} onChange={handleChange} />
        <br />
        <button type="submit">Save user</button>
      </form>
    </div>
  );
};

export default EditProfile;
