'use client';

import {useState} from 'react';
import {Dialog, DialogPanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Blogs', href: '/blogs'},
    {name: 'Marketplace', href: '#'},
    {name: 'Contact Us', href: '/contact'},
];

export default function GuestHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className={`bg-white guestHeaderBottomShadow sticky top-0 z-50`}>
            <nav
                aria-label='Global'
                className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
            >
                <Link href='/' className='-m-1.5 p-1.5'>
                    <span className='sr-only'>Your Company</span>
                    <Image
                        alt=''
                        src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                        className='h-8 w-auto'
                        width={100}
                        height={100}
                    />
                </Link>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon aria-hidden='true' className='size-6' />
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm/6 font-semibold text-gray-900 ${
                                    isActive
                                        ? 'border-b-2 border-blue-500'
                                        : 'hover:border-b-2 hover:border-gray-300'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <a
                        href='#'
                        className='text-sm/6 font-semibold text-gray-900'
                    >
                        Log in <span aria-hidden='true'>&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className='lg:hidden'
            >
                <div className='fixed inset-0 z-50' />
                <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <Link href='#' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Your Company</span>
                            <Image
                                alt=''
                                src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                                className='h-8 w-auto'
                                width={100}
                                height={100}
                            />
                        </Link>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                        >
                            <span className='sr-only'>Close menu</span>
                            <XMarkIcon aria-hidden='true' className='size-6' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href;

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 ${
                                                isActive
                                                    ? 'border-b-2 border-blue-500'
                                                    : 'hover:border-b-2 hover:border-gray-300'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className='py-6'>
                                <a
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
