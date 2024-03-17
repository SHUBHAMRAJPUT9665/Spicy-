import Skeleton from 'react-loading-skeleton';

const Shimmer = () => (
<div className="cursor-pointer mt-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2 px-1">
  <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
    <div className="w-full h-32 sm:h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
    <div className="p-3">
      <div className="w-2/3 sm:w-full h-5 bg-gray-300 mb-3 animate-pulse"></div>
      <div className="w-1/2 sm:w-full h-5 bg-gray-300 mb-3 animate-pulse"></div>
      <div className="w-1/4 sm:w-full h-5 bg-gray-300 mb-3 animate-pulse"></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
          <div className="w-8 h-3 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</div>

);


// resData.data.cards[0].card.card.info.name

export default Shimmer;