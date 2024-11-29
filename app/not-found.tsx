const NotFound = () => (
    <div className='flex flex-col items-center justify-center h-screen text-center bg-white dark:bg-black'>
        <div className='flex flex-row gap-2'>
            <h1 className='text-2xl font-medium leading-[49px]'>404</h1>
            <div className='border-r-2 border-black dark:border-white' />
            <div className='inline-block'>
                <h2 className='text-lg font-normal leading-[49px] m-0'>
                    This page could not be found.
                </h2>
            </div>
        </div>
    </div>
);

export default NotFound;
