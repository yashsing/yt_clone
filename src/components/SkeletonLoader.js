const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      <div className="h-40 bg-gray-300 rounded-lg animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;
