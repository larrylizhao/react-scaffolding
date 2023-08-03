import React from 'react';
import { useGetPostsListQuery } from '@Api/posts';

const Posts = () => {
  const { data, isLoading } = useGetPostsListQuery();
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data?.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
