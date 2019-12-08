import dev from '../env/dev';

export default class AppConstants {
  public static PORT = "8000";

  public static DB_NAME = process.env.DB_NAME || dev.DB_NAME;

  public static DB_USERNAME = process.env.DB_USERNAME || dev.DB_USERNAME;

  public static DB_PASSWORD = process.env.DB_PASSWORD || dev.DB_PASSWORD;

  public static DB_HOSTNAME = process.env.DB_HOSTNAME || dev.DB_HOSTNAME;

  public static DB_PORT = process.env.DB_PORT || dev.DB_PORT;

  public static SWAGGER_DEFINITION_TITLE = 'REST API for my App';

  public static SWAGGER_DEFINITION_VERSION = '1.0.0';

  public static SWAGGER_DEFINITION_DESCRIPTION = 'This is the REST API for my product';
}