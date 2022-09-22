import { Model, DataTypes } from "sequelize";
import IIMage from "../Interfaces/IIMage.interface";

import { dabatase } from "../Domain/UserDomain";

class Image extends Model<IIMage> {
  declare readonly id: number;
  declare uri: string;
  declare fabricante: string;
}

Image.init(
  {
    uri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dabatase.connection,
    freezeTableName: true,
  }
);

export default Image;
