
export const BlogCardSkeleton = () => {
    return (
        <div className="w-full p-4 border rounded-lg shadow-md animate-pulse">

          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
    
 
          <div className="h-6 w-3/4 bg-gray-300 rounded mt-2"></div>
    

          <div className="flex gap-2 mt-2">
            <div className="h-5 w-12 bg-gray-300 rounded"></div>
            <div className="h-5 w-16 bg-gray-300 rounded"></div>
            <div className="h-5 w-14 bg-gray-300 rounded"></div>
          </div>
        </div>
      );
}

  