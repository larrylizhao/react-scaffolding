import React, { type ReactElement } from 'react';
import {
  useGetPostsListQuery,
  useGetPostsByIdQuery,
  useCreatePostsMutation,
  useDeletePostByIdMutation,
  useModifyPostByIdMutation
} from '@Api/posts';

const Posts = (): ReactElement => {
  const { data, error, isLoading } = useGetPostsListQuery();
  console.log(data);
  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
