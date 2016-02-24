# express-mock-api

Example demonstrating the use of [express][express-url] to quickly create a mock API.

This technique serves as a valuable means to populate views with test data even if a live API for said data is not readily available. The resulting `endpoints.js` and mock JSON data files can be used as a reference when coordinating contract specification with the developers of the production API.

This is a simplified, code-over-configuration approach comparable to using [api-mock][api-mock-url] with [APIBlueprint][api-blueprint-url], but which allows you to use your own development server and does not require you to learn a complicated API descriptor syntax.

This technique can be combined with [express-http-proxy][express-http-proxy-url] to conditionally proxy API calls to a remote service for live testing instead of local mocking.

### Run the example

```text
npm install  
npm start [port = 8080]
```

Use [curl][curl-url], [Postman][postman-url] or a similar tool to make a request that has a response mapped in `mock-api/endpoints.js`.

[express-url]: https://github.com/expressjs/express
[api-mock-url]: https://github.com/localmed/api-mock
[api-blueprint-url]: https://apiblueprint.org/
[express-http-proxy-url]: https://github.com/villadora/express-http-proxy
[curl-url]: https://github.com/tldr-pages/tldr/blob/master/pages/common/curl.md
[postman-url]: http://www.getpostman.com

