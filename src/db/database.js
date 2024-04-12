const Database = require("better-sqlite3");

const path = require("path");

const dbPath = path.join(__dirname, "db.db");

const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

export const database = db;

const tables = ["customers"];

const getCreateTableQuery = (tableName) => {
  switch (tableName) {
    case "customers":
      return `
      CREATE TABLE IF NOT EXISTS customers (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          address_street TEXT NOT NULL,
          address_number INTEGER NOT NULL,
          address_district TEXT NOT NULL,
          address_detail TEXT,
          address_city TEXT NOT NULL,
          phone_primary TEXT NOT NULL,
          phone_secondary TEXT,
          notes TEXT,
          equipments JSON
      )
  `;
    default:
      return "";
  }
};

tables.forEach((tableName) => {
  const tableExistsQuery = `
        SELECT name 
        FROM sqlite_master 
        WHERE type='table' AND name='${tableName}'
    `;

  const tableInfo = database.prepare(tableExistsQuery).get();

  if (!tableInfo) {
    const createTableQuery = getCreateTableQuery(tableName);
    database.exec(createTableQuery);
    console.log(`Tabela '${tableName}' criada com sucesso!`);
  } else {
    console.log(`A tabela '${tableName}' já existe.`);
  }
});
