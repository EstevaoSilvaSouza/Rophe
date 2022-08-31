"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserDomain_1 = require("../Domain/UserDomain");
const Modelo_model_1 = __importDefault(require("./Modelo.model"));
const User_model_1 = __importDefault(require("./User.model"));
class Pos extends sequelize_1.Model {
}
Pos.init({
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    serie: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    versao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    binario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: UserDomain_1.dabatase.connection,
    freezeTableName: true,
});
Pos.belongsTo(Modelo_model_1.default, {
    foreignKey: "id_modelo",
    constraints: true,
});
Pos.belongsTo(User_model_1.default, {
    foreignKey: "id_user",
    constraints: true,
});
User_model_1.default.hasMany(Pos, {
    foreignKey: "id_user",
});
Modelo_model_1.default.hasMany(Pos, {
    foreignKey: "id_modelo",
});
exports.default = Pos;
