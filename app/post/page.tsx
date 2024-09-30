import getAllPost from '@/lib/getAllPosts';
import React from 'react';
import Link from 'next/link';

const Post = async () => {
    const posts = await getAllPost();

    return (
        <div className='mt-6'>
            <h2>All Posts</h2>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <Link href={`post/${post.id}`}> {post.title} </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Post;