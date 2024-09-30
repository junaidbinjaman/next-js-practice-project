import React from 'react';
import Link from 'next/link';

const blogs: {id: number, title: string, description: string}[] = [
    {
        id: 1,
        title: 'The blog title goes here',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti, eveniet eius distinctio dolor molestias?',
    },
    {
        id: 2,
        title: 'The blog title goes here',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti, eveniet eius distinctio dolor molestias?',
    },
    {
        id: 3,
        title: 'The blog title goes here',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti, eveniet eius distinctio dolor molestias?',
    },
];

function Blog() {
    return (
        <div>
            <h1>All Blogs.</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
