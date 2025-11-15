import { useState, useEffect } from "react";
import { useRequestForApproveMutation } from "@/components/redux/features/driver/driver.api";
import toast from "react-hot-toast";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ApproveRequest = () => {
  const [approveRequest, { isLoading, isError, error, isSuccess, data }] =
    useRequestForApproveMutation();
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (isSuccess && data?.message) {
      setStatusMessage(data.message);
    }
    if (isError && (error as any)?.data?.message) {
      setStatusMessage((error as any).data.message);
    }
  }, [isSuccess, isError, data, error]);

  const handleApproveRequest = async () => {
    try {
      const result = await approveRequest({}).unwrap();
      toast.success(result.message || "Request sent successfully");
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send approval request");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-3xl shadow-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Driver Approval Request
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Click below to send a request to the admin for approval.
      </p>

      <button
        onClick={handleApproveRequest}
        disabled={isLoading}
        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300"
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {isLoading ? "Sending..." : "Request Approval"}
      </button>

      {statusMessage && (
        <div
          className={`mt-6 flex items-center justify-center gap-2 text-center font-medium ${
            isSuccess ? "text-green-500" : "text-red-500"
          }`}
        >
          {isSuccess ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-red-500" />
          )}
          <span>{statusMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ApproveRequest;
