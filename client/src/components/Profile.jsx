import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Edit2, Loader, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import TenantProfile from "./profile/TenantProfile";
import LandlordProfile from "./profile/LandlordProfile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useGetAllRentedProps from "../hooks/useGetAllRentedProps";
import useGetAllOwnedProps from "../hooks/useGetAllOwnedProps";
import useGetAllReq from "../hooks/useGetAllReq";

const Profile = () => {
  useGetAllOwnedProps();
  useGetAllRentedProps();
  useGetAllReq();

  const { user } = useSelector((store) => store.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    phone: user?.phone || "",
  });

  if (!user) {
    return (
      <div className="flex justify-center gap-4 items-center min-h-screen text-xl">
        <Loader className="animate-spin w-6 h-6 sm:w-10 sm:h-10 text-purple-600" />
        <p className="text-lg md:text-xl text-purple-600">
          Loading profile... Please wait.
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Implement API call to save updated user details
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col gap-10 mt-5 mx-10 sm:mx-20 md:mx-25 lg:mx-50">
          <div className="flex flex-col gap-5 border border-gray-300 rounded-2xl p-5 shadow-2xl">
            <div className="flex justify-between">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
                <img
                  src={
                    user?.photo ||
                    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  }
                  alt={user?.name || "User"}
                  className="m-3 w-25 h-25 sm:w-50 sm:h-50 border rounded-full"
                />
                <div className="flex flex-col gap-2 sm:mt-8 max-w-xl">
                  <h1 className="text-xl sm:text-2xl md:text-3xl">
                    {user?.name || "Unknown"}
                  </h1>
                  <h4 className="text-md sm:text-lg md:text-xl capitalize">
                    {user?.role || "Guest"}
                  </h4>
                  <p className="mt-4 text-sm sm:text-base text-gray-400">
                    {user?.bio || "No bio available"}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-gray-200 border border-gray-300 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
              >
                <Edit2 className="text-black" />
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <Mail className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                <p className="text-sm sm:text-md md:text-lg">
                  {user?.email || "No email available"}
                </p>
              </div>
              {user?.phone && (
                <div className="flex gap-4">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  <p className="text-sm sm:text-md md:text-lg">{user.phone}</p>
                </div>
              )}
            </div>
          </div>
          {user?.role === "tenant" && <TenantProfile />}
          {user?.role === "landlord" && <LandlordProfile />}
        </div>
      </main>
      <Footer className="mt-auto w-full" />

      {/* Edit Profile Modal */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label>Name</Label>
            <Input
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              required
            />
            <Label>Bio</Label>
            <Input
              name="bio"
              value={updatedUser.bio}
              onChange={handleChange}
              required
            />
            {user?.phone && (
              <>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  value={updatedUser.phone}
                  onChange={handleChange}
                  required
                />
              </>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
