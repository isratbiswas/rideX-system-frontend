import { useState, useEffect } from "react";
import {
  useUserInfoQuery,
  useUserUpdateInfoMutation,
} from "@/components/redux/features/auth/auth.api";
import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import Loader from "@/components/layout/Loader";

const ProfileUpdate = () => {
  const { data: userInfo, isLoading } = useUserInfoQuery(undefined);
  const [updateInfo, { isLoading: isUpdating }] = useUserUpdateInfoMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (userInfo?.data) {
      setFormData({
        name: userInfo.data.name,
        email: userInfo.data.email,
        phone: userInfo.data.phone,
      });
    }
  }, [userInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      await updateInfo(formData).unwrap();
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update profile.");
    }
    // Here you can call your update API
    console.log("Saved Data:", formData);
    setIsEditing(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <div className="flex flex-col items-center">
          <div className="bg-[#DE802B]-100 text-[#DE802B] rounded-full p-4 text-6xl mb-4">
            <FaRegUserCircle />
          </div>

          {/* Form Inputs */}
          <div className="w-full mt-4 space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none  text-gray-700 ${
                  isEditing
                    ? "border-green-500 bg-white"
                    : "border-gray-300 bg-gray-100"
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Role
              </label>
              <input
                type="text"
                value={userInfo?.data.role}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none text-gray-700"
              />
            </div>

            {/* <div>
              <label className="block text-gray-600 font-medium mb-1">
                Phone
              </label>
              <input
                type="number"
                value={userInfo?.data.phone}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  isEditing
                    ? "border-green-500 bg-white"
                    : "border-gray-300 bg-gray-100"
                }`}
              />
            </div> */}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {!isEditing ? (
              <Button
                onClick={handleEditToggle}
                className="bg-[#DE802B] hover:bg-[#CC561E] text-white px-6 py-2 rounded-lg"
              >
                Edit Profile
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
                >
                  {isUpdating ? "Saving..." : "Save"}
                </Button>
                <Button
                  onClick={handleEditToggle}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg"
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
