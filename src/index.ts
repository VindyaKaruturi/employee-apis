import App from "./app";
import AppConstants from './config/AppConstants';

/**
 * Starting the application on port configured
 */
App.express.listen(AppConstants.PORT, async () => {
  try {
    import("./routes/router").then(i => i.default.createRoutes(App.router));
    console.log(`App listening on port ${AppConstants.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
module.exports = App;
