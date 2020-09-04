# express-reverse-proxy

The Express reverse proxy I wrote in my YouTube video "[How to Fix The Cors Error with a Reverse Proxy](https://www.youtube.com/watch?v=5jPoTpXpIH4&t=796)"

This is a slightly cleaned up version, so is a little different from the video. As I mentioned, I've refactored the query string code in to its own class and made a couple of other improvements.

## Usage:

Clone the repo, then from the terminal, navigate to the project directory and run:

`node app.js`

You can then access the server on port 3000:

`http://localhost:3000`

You can map the API you're trying to access by setting `API_BASE_URL` to the base URL of the API you want to access in your `.env` file, then making the same call to the proxy server e.g.

Real endpoint: http://a-public-api.com/foo/bar?baz=qux 

`API_BASE_URL = http://a-public-api.com`

You call: http://localhost:3000/foo/bar?baz=qux

---

The API's used in the video are 

- https://date.nager.at/Api
- https://newsapi.org/ 
