/* eslint-disable @typescript-eslint/promise-function-async */
import { rest } from 'msw';
import { BASE_API, POSTS } from '@Api/constants';

const handlers = [
  rest.get(`${BASE_API}${POSTS}`, (req, res, ctx) => {
    const mockApiResponse = [
      {
        userId: 1,
        id: 1,
        title: 'test title',
        body: 'test body'
      }
    ];
    return res(ctx.json(mockApiResponse));
  })
];

export { handlers };
