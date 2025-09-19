import Newsletter from '@/components/newsletter';
import PostCard from '@/components/postCard';
import { type Post, postsAPI } from '@/lib/fetchAPI/post';
import Image from 'next/image';

export default async function Blogs() {
    const posts = await postsAPI.getAll('2', '10');

    return (
        <div>
            <div className='relative isolate overflow-hidden bg-white py-24 sm:py-32'>
                <Image
                    fill
                    alt=''
                    src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=screen'
                    className='absolute inset-0 -z-10 size-full object-cover opacity-10'
                />
                <div
                    aria-hidden='true'
                    className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15'
                    />
                </div>
                <div
                    aria-hidden='true'
                    className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0'
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15'
                    />
                </div>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl lg:mx-0'>
                        <h2 className='text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
                            Latest Blogs
                        </h2>
                        <p className='mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8'>
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl lg:max-w-4xl'></div>
                    <h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
                        From the blog
                    </h2>
                    <p className='mt-2 text-lg/8 text-gray-600'>
                        Learn how to grow your business with our expert advice.
                    </p>
                    <div className='mt-16 space-y-20 lg:mt-20'>
                        {posts?.map((post: Post) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                thumbnail={post.thumbnail}
                                date='10-20-01 10:32 AM'
                                category={post.category}
                                slug={post.slug}
                                title={post.title}
                                description={post.description}
                                authorName={post.authorName}
                                authorTitle={post.title}
                                avatar={post.avatar}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Newsletter />
        </div>
    );
}
