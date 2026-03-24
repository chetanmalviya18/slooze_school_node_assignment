import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

db.getConnection()
  .then((connection) => {
    console.log("✅ Successfully connected to the MySQL database.");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Error connecting to the database:", err.message);
  });

export default db;
