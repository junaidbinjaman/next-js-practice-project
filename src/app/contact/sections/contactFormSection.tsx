import Image from 'next/image';

export default function ContactFormSection() {
    return (
        <div className='relative bg-white'>
            <div className='lg:absolute lg:inset-0 lg:left-1/2'>
                <Image
                    fill
                    alt=''
                    src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80'
                    className='h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full'
                />
            </div>
            <div className='pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32'>
                <div className='px-6 lg:px-8'>
                    <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
                        <h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
                            Let us work together
                        </h2>
                        <p className='mt-2 text-lg/8 text-gray-600'>
                            Proin volutpat consequat porttitor cras nullam
                            gravida at orci molestie a eu arcu sed ut tincidunt
                            magna.
                        </p>
                        <form action='#' method='POST' className='mt-16'>
                            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                                <div>
                                    <label
                                        htmlFor='first-name'
                                        className='block text-sm/6 font-semibold text-gray-900'
                                    >
                                        First name
                                    </label>
                                    <div className='mt-2.5'>
                                        <input
                                            id='first-name'
                                            name='first-name'
                                            type='text'
                                            autoComplete='given-name'
                                            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor='last-name'
                                        className='block text-sm/6 font-semibold text-gray-900'
                                    >
                                        Last name
                                    </label>
                                    <div className='mt-2.5'>
                                        <input
                                            id='last-name'
                                            name='last-name'
                                            type='text'
                                            autoComplete='family-name'
                                            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm/6 font-semibold text-gray-900'
                                    >
                                        Email
                                    </label>
                                    <div className='mt-2.5'>
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            autoComplete='email'
                                            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <label
                                        htmlFor='company'
                                        className='block text-sm/6 font-semibold text-gray-900'
                                    >
                                        Company
                                    </label>
                                    <div className='mt-2.5'>
                                        <input
                                            id='company'
                                            name='company'
                                            type='text'
                                            autoComplete='organization'
                                            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <div className='flex justify-between text-sm/6'>
                                        <label
                                            htmlFor='phone'
                                            className='block font-semibold text-gray-900'
                                        >
                                            Phone
                                        </label>
                                        <p
                                            id='phone-description'
                                            className='text-gray-400'
                                        >
                                            Optional
                                        </p>
                                    </div>
                                    <div className='mt-2.5'>
                                        <input
                                            id='phone'
                                            name='phone'
                                            type='tel'
                                            autoComplete='tel'
                                            aria-describedby='phone-description'
                                            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <div className='flex justify-between text-sm/6'>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm/6 font-semibold text-gray-900'
                                        >
                                            How can we help you?
                                        </label>
                                        <p
                                            id='message-description'
                                            className='text-gray-400'
                                        >
                                            Max 500 characters
                                        </p>
                                    </div>
                                    <div className='mt-2.5'>
                                        <textarea
                                            id='message'
                                            name='message'
                                            rows={4}
                                            aria-describedby='message-description'
                                            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10 flex justify-end border-t border-gray-900/10 pt-8'>
                                <button
                                    type='submit'
                                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
