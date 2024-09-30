import React from 'react';
import Link from 'next/link';

function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <nav>
                <ul className='flex gap-6'>
                    <li>
                        <Link href='/'>Mission</Link>
                    </li>
                    <li>
                        <Link href='/about'>Vision</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
}

export default AboutLayout;
