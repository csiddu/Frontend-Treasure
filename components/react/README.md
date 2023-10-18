
# Important!------------------------------------------------------

## To create a new component follow these steps:
- Go to package.JSON file and replace the _**homepage url**_ `https://csiddu.github.io/Frontend-Treasure/components/react/build/` with `http://127.0.0.1:5500/components/react/build/` i.e your live server url followed by  `components/react/build/`. This is necessary as Production Url has to be replaced with Live Server's IP.
- Make an entry in **App.js > path** object eg: `<component-name>: <Component/>`
- Make an entry for url in components.JSON. eg: `react/build/?<component-name>`
- Make an entry for url in Layout.jsx. For local development use: `/components/react/build/?<component-name>` and before committing make it to `/Frontend-Treasure/components/react/build/?<component-name>`. This is because repo name should be included for github pages deployment.
- Finally add your component card in components.html.
- #### Note: During development, if your code doesn't work, make sure to build react app. If still any issue persists, read the steps again.
- ### Before committing:

1. Always explicitly, **build the react project, every-time before committing** `npm run build`. Only then your changes will be reflected in static build.
2. Make sure the Urls in package.json and Layout.jsx are production friendly, as mentioned earlier. (Refer code for more understanding).

------------------------------------------------------------------
