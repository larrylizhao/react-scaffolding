import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { server } from '@Utils/tests/server';

// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = '15000';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});
