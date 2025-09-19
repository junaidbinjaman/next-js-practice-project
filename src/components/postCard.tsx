import React from 'react';
import Image from 'next/image';

export type PropsType = {
    id: string;
    thumbnail: string;
    date: string;
    category: string;
    slug: string;
    title: string;
    description: string;
    authorName: string;
    authorTitle: string;
    avatar: string;
};

export default function PostCard({
    id,
    thumbnail,
    date,
    category,
    slug,
    title,
    description,
    authorName,
    authorTitle,
    avatar,
}: PropsType) {
    const safeImage =
        thumbnail && thumbnail.trim() !== '' ? thumbnail : '/app-screenshot.png';
    return (
        <article
            key={id}
            className='relative isolate flex flex-col gap-8 lg:flex-row'
        >
            <div className='relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0'>
                <Image
                    fill
                    alt=''
                    src={safeImage}
                    className='absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover'
                />
                <div className='absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10' />
            </div>
            <div>
                <div className='flex items-center gap-x-4 text-xs'>
                    <time dateTime={date} className='text-gray-500'>
                        {date}
                    </time>
                    <a
                        href={category}
                        className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                    >
                        {category}
                    </a>
                </div>
                <div className='group relative max-w-xl'>
                    <h3 className='mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600'>
                        <a href={slug}>
                            <span className='absolute inset-0' />
                            {title}
                        </a>
                    </h3>
                    <p className='mt-5 text-sm/6 text-gray-600'>
                        {description}
                    </p>
                </div>
                <div className='mt-6 flex border-t border-gray-900/5 pt-6'>
                    <div className='relative flex items-center gap-x-4'>
                        <Image
                            width={20}
                            height={20}
                            alt=''
                            src={avatar}
                            className='size-10 rounded-full bg-gray-50'
                        />
                        <div className='text-sm/6'>
                            <p className='font-semibold text-gray-900'>
                                <a href={authorTitle}>
                                    <span className='absolute inset-0' />
                                    {authorName}
                                </a>
                            </p>
                            <p className='text-gray-600'>{authorTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
