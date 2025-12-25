export const MobileCardSkeleton = () => {
  const rows = Array.from({ length: 4 });

  return (
    <div className="space-y-4 md:hidden p-4">
      {rows.map((_, idx) => (
        <div
          key={idx}
          className="border rounded-xl shadow-sm p-4 bg-white space-y-3 animate-pulse"
        >
          <div className="flex justify-between">
            <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
          </div>

          <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
          <div className="h-4 w-32 bg-gray-200 rounded-md"></div>

          <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-full bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};
