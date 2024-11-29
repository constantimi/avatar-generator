'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();

    const handleExampleRedirect = () => {
        router.push('/api/avatar?name=example&size=150');
    };

    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='150'
                    height='150'
                >
                    <defs>
                        <linearGradient
                            id='gradient'
                            x1='0'
                            y1='0'
                            x2='1'
                            y2='1'
                        >
                            <stop offset='0%' stop-color='#3d5ff5' />
                            <stop offset='100%' stop-color='#f53d5f' />
                        </linearGradient>
                    </defs>
                    <rect
                        width='150'
                        height='150'
                        rx='0'
                        ry='0'
                        fill='url(#gradient)'
                    />
                </svg>
                <Image
                    className='dark:invert'
                    src='/next.svg'
                    alt='Next.js logo'
                    width={180}
                    height={38}
                    priority
                />
                <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
                    <li className='mb-2'>
                        Get started by typing{' '}
                        <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
                            /api/avatar
                        </code>
                        .
                    </li>
                    <li className='mb-2'>
                        Customize the query to your liking.
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <div className='flex gap-4 items-center flex-col sm:flex-row'>
                    <button
                        className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
                        onClick={handleExampleRedirect}
                    >
                        <Image
                            className='dark:invert'
                            src='/vercel.svg'
                            alt='Vercel logomark'
                            width={20}
                            height={20}
                        />
                        View Example Avatar
                    </button>
                    <a
                        className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
                        href='https://github.com/constantimi/avatar-generator'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Read our docs
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Home;
