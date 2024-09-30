import React from 'react';

interface PostProps {
    params: {
        id: number
    }
}

const PostPage: React.FC<PostProps> = ({params}) => {
    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    );
};

export default PostPage;