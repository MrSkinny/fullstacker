### Yet Another Full Stacker

This repo utilizes `create-react-app` and includes a simple Node/Express server in the `server/` directory, supporting ES6 Stage-1.

* `npm install`
* `npm start` - runs server and client

Client runs on default `create-react-app` port (3000). Server runs on `process.env.PORT` or 3001 by default. The `package.json` includes a `proxy` key set to `localhost:3001` which allows dev mode client-side requests to be made without a hostname. You must change the proxy if using non-default ports. 
#### Build and Deploy Instructions
* `npm run build:all` - build client and server into `fsbuild/deploy`

The hands-off build config from `create-react-app` still generates a normal frontend build package into `build`. When running `npm run build:all`, the script copies both the transpiled server files and the frontend package into `fsbuild/deploy`. You can then go into `fsbuild` and create a production-only git repo to connect to Heroku.  **You must ensure the `fsbuild/package.json` has all server-side dependencies in manifest** (the client side is already bundled via `create-react-app`).

