import { Model, DataTypes } from "sequelize";
import IModelo from "../Interfaces/IModelo.repository";
import { dabatase } from "../Domain/UserDomain";

class Modelo extends Model<IModelo> {
  declare nome: string;
  declare fabricante: string;
}

Modelo.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fabricante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dabatase.connection,
    freezeTableName: true,
  }
);

export default Modelo;
