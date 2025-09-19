import Image from 'next/image';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/react/24/outline';
import {CheckIcon} from '@heroicons/react/20/solid';
import CallToAction from '@/components/callToAction';

// import data
import {faqs} from '@/lib/data/faq';
import {tiers} from '@/lib/data/tiers';
import {features} from '@/lib/data/features';
import VerticalPostCard from '@/components/verticalPostCard';
import {type Post, postsAPI} from '@/lib/fetchAPI/post';

function classNames(...classes: (string | undefined | boolean | null)[]) {
    return classes.filter(Boolean).join(' ');
}

export default async function Home() {
    const posts: Post[] = await postsAPI.getAll('1', '3');

    return (
        <div className='bg-white'>
            <div className='relative isolate overflow-hidden pt-14 pb-16 sm:pb-20'>
                <Image
                    width={100}
                    height={100}
                    alt=''
                    src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay'
                    className='absolute inset-0 -z-10 size-full object-cover opacity-10'
                />
                <div
                    aria-hidden='true'
                    className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75'
                    />
                </div>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                            <div className='relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                                Announcing our next round of funding.{' '}
                                <a
                                    href='#'
                                    className='font-semibold text-indigo-600'
                                >
                                    <span
                                        aria-hidden='true'
                                        className='absolute inset-0'
                                    />
                                    Read more{' '}
                                    <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
                                Data to enrich your online business
                            </h1>
                            <p className='mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8'>
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat.
                            </p>
                            <div className='mt-10 flex items-center justify-center gap-x-6'>
                                <a
                                    href='#'
                                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                >
                                    Get started
                                </a>
                                <a
                                    href='#'
                                    className='text-sm/6 font-semibold text-gray-900'
                                >
                                    Learn more <span aria-hidden='true'>→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Logo cloud */}
                    <div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
                        <Image
                            alt='Transistor'
                            src='/brangLogos/bmw-logo-svgrepo-com.svg'
                            width={158}
                            height={48}
                            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                        />
                        <Image
                            alt='Reform'
                            src='/brangLogos/forbes-logo-svgrepo-com.svg'
                            width={158}
                            height={48}
                            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                        />
                        <Image
                            alt='Tuple'
                            src='/brangLogos/google-icon-logo-svgrepo-com.svg'
                            width={158}
                            height={48}
                            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                        />
                        <Image
                            alt='SavvyCal'
                            src='/brangLogos/mcdonald-s-15-logo-svgrepo-com.svg'
                            width={158}
                            height={48}
                            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
                        />
                        <Image
                            alt='Statamic'
                            src='/brangLogos/redbull-logo-svgrepo-com.svg'
                            width={158}
                            height={48}
                            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
                        />
                    </div>
                </div>
                <div
                    aria-hidden='true'
                    className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75'
                    />
                </div>
            </div>

            {/* Feature section */}
            <div className='mt-32 sm:mt-56'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl sm:text-center'>
                        <h2 className='text-base/7 font-semibold text-indigo-600'>
                            Everything you need
                        </h2>
                        <p className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance'>
                            No server? No problem.
                        </p>
                        <p className='mt-6 text-lg/8 text-gray-600'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Maiores impedit perferendis suscipit eaque,
                            iste dolor cupiditate blanditiis.
                        </p>
                    </div>
                </div>
                <div className='relative overflow-hidden pt-16'>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        <Image
                            alt='App screenshot'
                            src='/app-screenshot.png'
                            width={2432}
                            height={1442}
                            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                        />
                        <div aria-hidden='true' className='relative'>
                            <div className='absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]' />
                        </div>
                    </div>
                </div>
                <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
                    <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                        {features.map((feature) => (
                            <div key={feature.name} className='relative pl-9'>
                                <dt className='inline font-semibold text-gray-900'>
                                    <feature.icon
                                        aria-hidden='true'
                                        className='absolute top-1 left-1 size-5 text-indigo-600'
                                    />
                                    {feature.name}
                                </dt>{' '}
                                <dd className='inline'>
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Testimonial section */}
            <div className='relative z-10 mt-32 mb-20 sm:mt-56 sm:mb-24 xl:mb-0'>
                <div
                    aria-hidden='true'
                    className='absolute inset-0 overflow-hidden'
                >
                    <div className='absolute top-[calc(50%-36rem)] left-[calc(50%-19rem)] transform-gpu blur-3xl'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='aspect-1097/1023 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-25'
                        />
                    </div>
                </div>
                <div className='bg-gray-900 pb-20 sm:pb-24 xl:pb-0'>
                    <div className='mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch'>
                        <div className='-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none'>
                            <div className='relative aspect-2/1 h-full after:absolute after:inset-0 after:rounded-2xl after:inset-ring after:inset-ring-white/15 md:-mx-8 xl:mx-0 xl:aspect-auto'>
                                <Image
                                    width={100}
                                    height={100}
                                    alt=''
                                    src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
                                    className='absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl'
                                />
                            </div>
                        </div>
                        <div className='w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24'>
                            <figure className='relative isolate pt-6 sm:pt-12'>
                                <svg
                                    fill='none'
                                    viewBox='0 0 162 128'
                                    aria-hidden='true'
                                    className='absolute top-0 left-0 -z-10 h-32 stroke-white/20'
                                >
                                    <path
                                        d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z'
                                        id='b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                                    />
                                    <use
                                        x={86}
                                        href='#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                                    />
                                </svg>
                                <blockquote className='text-xl/8 font-semibold text-white sm:text-2xl/9'>
                                    <p>
                                        Gravida quam mi erat tortor neque
                                        molestie. Auctor aliquet at porttitor a
                                        enim nunc suscipit tincidunt nunc. Et
                                        non lorem tortor posuere. Nunc eu
                                        scelerisque interdum eget tellus non
                                        nibh scelerisque bibendum.
                                    </p>
                                </blockquote>
                                <figcaption className='mt-8 text-base'>
                                    <div className='font-semibold text-white'>
                                        Judith Black
                                    </div>
                                    <div className='mt-1 text-gray-400'>
                                        CEO of Tuple
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing section */}
            <div className='relative isolate mt-32 px-6 sm:mt-56 lg:px-8'>
                <div
                    aria-hidden='true'
                    className='absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl'
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
                    />
                </div>
                <div className='mx-auto max-w-4xl text-center'>
                    <h2 className='text-base/7 font-semibold text-indigo-600'>
                        Pricing
                    </h2>
                    <p className='mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl'>
                        Choose the right plan for you
                    </p>
                </div>
                <p className='mx-auto mt-6 max-w-2xl text-center text-lg/8 text-pretty text-gray-600'>
                    Choose an affordable plan that’s packed with the best
                    features for engaging your audience, creating customer
                    loyalty, and driving sales.
                </p>
                <div className='mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2'>
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'relative bg-gray-900 shadow-2xl'
                                    : 'bg-white/60 sm:mx-8 lg:mx-0',
                                tier.featured
                                    ? ''
                                    : tierIdx === 0
                                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'text-indigo-400'
                                        : 'text-indigo-600',
                                    'text-base/7 font-semibold'
                                )}
                            >
                                {tier.name}
                            </h3>
                            <p className='mt-4 flex items-baseline gap-x-2'>
                                <span
                                    className={classNames(
                                        tier.featured
                                            ? 'text-white'
                                            : 'text-gray-900',
                                        'text-5xl font-semibold tracking-tight'
                                    )}
                                >
                                    {tier.priceMonthly}
                                </span>
                                <span
                                    className={classNames(
                                        tier.featured
                                            ? 'text-gray-400'
                                            : 'text-gray-500',
                                        'text-base'
                                    )}
                                >
                                    /month
                                </span>
                            </p>
                            <p
                                className={classNames(
                                    tier.featured
                                        ? 'text-gray-300'
                                        : 'text-gray-600',
                                    'mt-6 text-base/7'
                                )}
                            >
                                {tier.description}
                            </p>
                            <ul
                                role='list'
                                className={classNames(
                                    tier.featured
                                        ? 'text-gray-300'
                                        : 'text-gray-600',
                                    'mt-8 space-y-3 text-sm/6 sm:mt-10'
                                )}
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className='flex gap-x-3'>
                                        <CheckIcon
                                            aria-hidden='true'
                                            className={classNames(
                                                tier.featured
                                                    ? 'text-indigo-400'
                                                    : 'text-indigo-600',
                                                'h-6 w-5 flex-none'
                                            )}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                        : 'text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300 focus-visible:outline-indigo-600',
                                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                                )}
                            >
                                Get started today
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog section */}
            <section className='py-24 '>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <h2 className='font-manrope text-4xl font-bold text-gray-900 text-center mb-16'>
                        Our latest blog
                    </h2>
                    <div className='flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8'>
                        {posts?.map((post) => (
                            <VerticalPostCard
                                key={post.id}
                                id={post.id}
                                thumbnail={post.thumbnail}
                                date='12-22-2025 10:03PM'
                                avatar={post.avatar}
                                title={post.title}
                                slug={post.slug}
                                author={post.authorName}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ section */}
            <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 mb-15'>
                <div className='mx-auto max-w-4xl'>
                    <h2 className='text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                        Frequently asked questions
                    </h2>
                    <dl className='mt-16 divide-y divide-gray-900/10'>
                        {faqs.map((faq) => (
                            <Disclosure
                                key={faq.question}
                                as='div'
                                className='py-6 first:pt-0 last:pb-0'
                            >
                                <dt>
                                    <DisclosureButton className='group flex w-full items-start justify-between text-left text-gray-900'>
                                        <span className='text-base/7 font-semibold'>
                                            {faq.question}
                                        </span>
                                        <span className='ml-6 flex h-7 items-center'>
                                            <PlusSmallIcon
                                                aria-hidden='true'
                                                className='size-6 group-data-open:hidden'
                                            />
                                            <MinusSmallIcon
                                                aria-hidden='true'
                                                className='size-6 group-not-data-open:hidden'
                                            />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as='dd' className='mt-2 pr-12'>
                                    <p className='text-base/7 text-gray-600'>
                                        {faq.answer}
                                    </p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Call to action */}
            <CallToAction />
        </div>
    );
}
