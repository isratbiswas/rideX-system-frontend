import {
  useBlockUserMutation,
  useGetAllUsersQuery,
  useUnBlockUserMutation,
} from "@/components/redux/features/admin/admin.api";
import type { IUser } from "@/types";
import { useState } from "react";
import toast from "react-hot-toast";

const UsersPage = () => {
  const [role, setRole] = useState("RIDER");
  const { data: users, isLoading, refetch } = useGetAllUsersQuery({ role });
  const [blockUser] = useBlockUserMutation();
  const [unBlockUser] = useUnBlockUserMutation();

  if (isLoading) return <div className="p-4">Loading...</div>;
  // Handler to toggle block/unblock
  const handleToggleBlock = async (user: IUser) => {
    try {
      if (user.isActive === "ACTIVE" || user.isActive === "UNBLOCKED") {
        // BLOCK
        await blockUser(user._id).unwrap();
      } else {
        // UNBLOCK
        await unBlockUser(user._id).unwrap();
      }
      toast.success(`${user.name} is now ${user.isActive}`); // use updated value
      refetch();
    } catch (error) {
      toast.error("Action failed. Try again.");
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users by Role</h2>

      {/* Role Dropdown */}
      <select
        className="border p-2 rounded mb-4"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="RIDER">Rider</option>
        <option value="DRIVER">Driver</option>
      </select>

      {/* Users List */}
      <ul className="w-full">
        {users?.map((user: IUser) => (
          <li
            key={user._id}
            className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* User Info */}
            <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-2/3 mb-3 md:mb-0">
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              <p className="text-gray-600 mt-1">{user.email}</p>
            </div>

            {/* Action Button */}
            <div className="flex gap-2 w-full md:w-auto">
              {role === "RIDER" && (
                <button
                  className={`flex-1 md:flex-none px-4 py-2 rounded-md font-medium text-white transition-colors duration-200 ${
                    user.isActive === "ACTIVE" || user.isActive === "UNBLOCKED"
                      ? "bg-red-500 hover:bg-red-600" // active → show BLOCK button
                      : "bg-green-500 hover:bg-green-600" // blocked → show UNBLOCK button
                  }`}
                  onClick={() => handleToggleBlock(user)}
                >
                  {user.isActive === "ACTIVE" || user.isActive === "UNBLOCKED"
                    ? "Block"
                    : "Unblock"}
                </button>
              )}

              {role === "DRIVER" && (
                <button
                  className="flex-1 md:flex-none px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                  onClick={() =>
                    console.log("Driver requested status for", user._id)
                  }
                >
                  {user.availabilityStatus ?? "No Status"}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
