import { Model, DataTypes } from "sequelize";

//Models
import Regiao from "./Regiao.model";
import Image from "./Image.model";

//Interfaces
import { IUser } from "../Interfaces/IUserRepository";

//Conexão do banco de dados!!
import { dabatase } from "../Domain/UserDomain";

//Melhorar seguir as orientação do
//https://medium.com/@williamphilippe/como-usar-o-sequelize-com-postgresql-em-typescript-6cec17a101f8
class User extends Model<IUser> {
  declare id: number;
  declare nome: string;
  declare sobrenome: string;
  declare usuario: string;
  declare email: string;
  declare senha: string;
  declare status: boolean;
  declare cargo: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dabatase.connection,
    freezeTableName: true,
  }
);
User.belongsTo(Regiao, {
  constraints: true,
  foreignKey: "id_regiao",
});

Regiao.hasMany(User, {
  foreignKey: "id_regiao",
});

User.belongsTo(Image, {
  constraints: true,
  foreignKey: "id_image",
});

Image.hasOne(User, {
  foreignKey: "id_image",
});

export default User;
