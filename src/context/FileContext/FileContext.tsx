import { createContext } from "react";

export type ProfilePictureType = {
    profilePicture: File | null;
    setProfilePicture: (file: File | null) => void;
}

const ProfilePictureContext = createContext<ProfilePictureType | null>(null)

export default ProfilePictureContext;