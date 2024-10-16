import React from 'react';

interface NavItemsProps {
    label: string;
}

function NavItem({label}: NavItemsProps) {
    return (
        <div className='relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out'>
            <span>{label}</span>
        </div>
    );
}

export default NavItem;
