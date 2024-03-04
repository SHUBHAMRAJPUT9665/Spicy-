import Skeleton from 'react-loading-skeleton';

const Shimmer = () => (
  <div className='hover:cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2'>
    <div className='bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl'>
      <Skeleton height={160} />
      <div className='p-4'>
        <h1 className='text-xl font-semibold mb-2'>
          <Skeleton width={150} />
        </h1>
        <p className='text-gray-700 mb-2'>
          <Skeleton width={80} />
        </p>
        <p className='text-gray-700 mb-2'>
          <Skeleton width={100} />
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <svg className='w-4 h-4 text-yellow-500 mr-1' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M10 1L12.38 6.74H18.28L13.63 10.24L15 16.02L10 12.76L5 16.02L6.38 10.24L1.72 6.74H7.62L10 1Z' />
            </svg>
            <span className='text-gray-600'>
              <Skeleton width={30} />
            </span>
          </div>
          <span className='text-gray-700'>
            <Skeleton width={40} />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Shimmer;