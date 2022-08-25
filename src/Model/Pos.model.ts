import { Model, DataTypes } from "sequelize";
import IPos from "../Interfaces/IPos.repository";
import { dabatase } from "../Domain/UserDomain";
import Modelo from "./Modelo.model";
import User from "./User.model";

class Pos extends Model<IPos> {
  declare nome: string;
  declare seria: string;
  declare versao: string;
  declare binario: string;
}

Pos.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    versao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    binario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dabatase.connection,
    freezeTableName: true,
  }
);

Pos.belongsTo(Modelo, {
  foreignKey: "id_modelo",
  constraints: true,
});

Pos.belongsTo(User, {
  foreignKey: "id_user",
  constraints: true,
});

User.hasMany(Pos, {
  foreignKey: "id_user",
});

Modelo.hasMany(Pos, {
  foreignKey: "id_modelo",
});

export default Pos;
