import dotenv from 'dotenv';
dotenv.config();
export const apiKey = process.env.API_KEY;
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;

export const apicache_min = process.env.APICACHE_MIN;

// DB Configuration
if (process.env.NODE_ENV === "PRODUCTION") {
    
    var host = process.env.PROD_MYSQL_HOST;
    var user = process.env.PROD_MYSQL_USER;
    var password = process.env.PROD_MYSQL_PASSWORD;
    var db = process.env.PROD_MYSQL_DB;
    var dialect = process.env.PROD_MYSQL_DIALECT;
    var pool = {
                    max: parseInt(process.env.PROD_MYSQL_POOL_MAX),
                    min: parseInt(process.env.PROD_MYSQL_POOL_MIN),
                    acquire: parseInt(process.env.PROD_MYSQL_POOL_ACQUIRE),
                    idle: parseInt(process.env.PROD_MYSQL_POOL_IDLE)
                };

} else {
    
    var host = process.env.DEV_MYSQL_HOST;
    var user = process.env.DEV_MYSQL_USER;
    var password = process.env.DEV_MYSQL_PASSWORD;
    var db = process.env.DEV_MYSQL_DB;
    var dialect = process.env.DEV_MYSQL_DIALECT;
    var pool = {
                    max: parseInt(process.env.DEV_MYSQL_POOL_MAX),
                    min: parseInt(process.env.DEV_MYSQL_POOL_MIN),
                    acquire: parseInt(process.env.DEV_MYSQL_POOL_ACQUIRE),
                    idle: parseInt(process.env.DEV_MYSQL_POOL_IDLE)
                };

}

export const mysql_host = host;
export const mysql_user = user;
export const mysql_password = password;
export const mysql_db = db;
export const mysql_dialect = dialect;
export const mysql_pool = pool;

export const mailer_host = process.env.EMAIL_HOST;
export const mailer_port = process.env.EMAIL_PORT;
export const mailer_secure = process.env.EMAIL_SECURE;
export const mailer_username = process.env.EMAIL_USERNAME;
export const mailer_password = process.env.EMAIL_PASSWORD;