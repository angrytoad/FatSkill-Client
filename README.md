# FatSkill-Client
Client Repository for Fatskill

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified. <br>

### Serving on production

To correctly server the application on production, an express server has been included to allow
for server side rendering. After bundling with `npm run build` you should run 
`node ./scripts/_prod/server.prod.js` from the root directory. If you need automatic restarts
and stuff like that then you can `npm install forever -g` and then do `forever start scripts/_prod/server.prod.js`. 
 