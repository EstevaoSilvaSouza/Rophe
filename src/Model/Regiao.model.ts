import { Model, DataTypes } from "sequelize";
import { IRegiao } from "../Interfaces/IRegiao.repository";
import { dabatase } from "../Domain/UserDomain";

class Regiao extends Model<IRegiao> {
  declare nome: string;
  declare uf: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Regiao.init(
  {
    nome: {
      type: DataTypes.STRING,
    },
    uf: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: dabatase.connection,
    freezeTableName: true,
  }
);

export default Regiao;
