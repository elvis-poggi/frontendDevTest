## Frontend test project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
  src/
    components/
      MainArticle/
      SideArticle/
    images/
  build/
  api/
```

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

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

This command will:
- Create a Docker container following the specs inside the dockerfile
- Copy all the contents of the build folder inside the docker image
- Copy all the php files inside the docker image /var/www/html

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## `npm run build && npm run deploy` to see the app running