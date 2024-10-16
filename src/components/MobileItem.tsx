'use client';
import {useEffect} from 'react';

function MobileItem() {

    useEffect(() => {
        const mobileMenuIcon = document.getElementById('mobile-menu-button');

        function handleClick() {
            console.log('Clicked!!!')
            if (mobileMenuIcon?.classList.contains('open')) {
                mobileMenuIcon.classList.remove('open');
            } else {
                mobileMenuIcon?.classList.add('open');
            }
        }

        mobileMenuIcon?.addEventListener('click', handleClick);

        return () => {
            mobileMenuIcon?.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <div className='block md:hidden ml-auto pr-4 my-auto cursor-auto'>
            <div id='mobile-menu-button' className='group'>
                <div className='top-0 bg-zinc-200 rounded-full w-8 h-1 group-open:rotate-45 transition-all duration-100 ease-in-out transform group-open:top-2 relative'></div>
                <div className='opacity-100 group-open:opacity-0 bg-zinc-200 rounded-full w-8 h-1 mt-1 transition-all duration-100 ease-in-out transform'></div>
                <div className='top-0 bg-zinc-200 rounded-full w-8 h-1 mt-1 group-open:-rotate-45 transition-all duration-100 ease-in-out transform group-open:-top-2 relative'></div>
            </div>
        </div>
    );
}

export default MobileItem;
