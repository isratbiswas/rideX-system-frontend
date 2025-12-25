// ===== Table Skeleton for Desktop =====
export const TableSkeleton = () => {
  const rows = Array.from({ length: 6 });

  return (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow-sm bg-white space-y-6 max-w-5xl mx-auto mt-6">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left"></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((_, idx) => (
            <tr key={idx} className="border-b">
              {Array.from({ length: 6 }).map((__, colIdx) => (
                <td key={colIdx} className="p-3">
                  <div className="h-4 w-28 bg-gray-200 animate-pulse rounded-md"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
