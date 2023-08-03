import { baseApi } from './base';
import { POSTS } from '@Api/constants';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getPostsList: builder.query<IPost[], void>({
      query: () => POSTS
    }),
    getPostsById: builder.query<IPost, number>({
      query: (id: number) => `/posts/${id}`
    }),
    createPosts: builder.mutation({
      query: (data) => ({
        url: POSTS,
        method: 'post',
        body: data
      })
    }),
    deletePostById: builder.mutation({
      query: (id: number) => ({
        url: `/posts/${id}`,
        method: 'delete'
      })
    }),
    modifyPostById: builder.mutation({
      query: ({ id, data }: { id: number; data: any }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: data
      })
    })
  }),
  overrideExisting: false
});

export const {
  useGetPostsListQuery,
  useGetPostsByIdQuery,
  useCreatePostsMutation,
  useDeletePostByIdMutation,
  useModifyPostByIdMutation
} = postApi;

export default postApi;
