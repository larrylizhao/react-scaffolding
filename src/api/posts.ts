import { baseApi } from './base';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostsList: builder.query<IPost[], void>({
      query: () => '/posts'
    }),
    getPostsById: builder.query<IPost, number>({
      query: (id: number) => `/posts/${id}`
    }),
    createPosts: builder.mutation({
      query: (data) => ({
        url: '/posts',
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
  useModifyPostByIdMutation,
  useLazyGetPostsListQuery,
  useLazyGetPostsByIdQuery
} = postApi;

export default postApi;
