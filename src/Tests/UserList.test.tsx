// src/Tests/UserList.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../Components/UserList";
import { server } from "../mocks/server";
// import { rest, HttpResponse } from "msw";
// import { setupServer } from 'msw/node';

// const server = setupServer(
//   rest.get("https://jsonplaceholder.typicode.com/users", (request ) => {
//     console.log(request);
//     return HttpResponse.json([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Doe" },
//     ]);
//   })
// );

// Enable request interception.
beforeAll(() => server.listen())

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers())

// Don't forget to clean up afterwards.
afterAll(() => server.close())

test("loads and displays users", async () => {
  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  });
});
