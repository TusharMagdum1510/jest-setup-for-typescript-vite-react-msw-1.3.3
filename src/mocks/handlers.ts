// import { http, HttpResponse } from "msw";
// import { setupWorker } from "msw/browser";

// import { rest } from "msw";

// export const handlers = [
//   rest.get("https://jsonplaceholder.typicode.com/users", (req:) => {
//     console.log(req);
//     return Response.json([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Doe" },
//     ]);
//   }),
// ];


import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    console.log('Intercepted request:', req.method, req.url.toString());
    return res(ctx.json([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ]));
  }),
];


// const worker = setupWorker(
//   http.get("https://jsonplaceholder.typicode.com/users", ({ request }) => {
//     console.log(request);
//     return HttpResponse.json([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Doe" },
//     ]);
//   })
// );

// await worker.start();
