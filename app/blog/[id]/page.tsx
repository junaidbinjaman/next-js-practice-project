import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import thumb from '@/public/IMG_0008.jpg';

interface BlogPageProps {
    params: {
        id: string
    }
}

const BlogPage: React.FC<BlogPageProps> = ({params}) => {

    if (params.id === '3') {
        notFound();
    }
    
    return (
        <div>
           <h1>Hello {params.id}</h1>
           <div className='w-[400px]'>
            <Image width={400} src={thumb} alt='Thumb image' placeholder='blur' />
           </div>
        </div>
    );
};

export default BlogPage;