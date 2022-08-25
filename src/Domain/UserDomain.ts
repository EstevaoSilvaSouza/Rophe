import Sequelize from "sequelize";

class Database {
  public connection!: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize.Sequelize("dbUser", "root", "Tilindo@14", {
      host: "localhost",
      dialect: "mysql",
      logging: false,
    });
  }
}

export const dabatase = new Database();
