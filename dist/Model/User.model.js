"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Models
const Regiao_model_1 = __importDefault(require("./Regiao.model"));
//Conexão do banco de dados!!
const UserDomain_1 = require("../Domain/UserDomain");
//Melhorar seguir as orientação do
//https://medium.com/@williamphilippe/como-usar-o-sequelize-com-postgresql-em-typescript-6cec17a101f8
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: UserDomain_1.dabatase.connection,
    freezeTableName: true,
});
User.belongsTo(Regiao_model_1.default, {
    constraints: true,
    foreignKey: "id_regiao",
});
Regiao_model_1.default.hasMany(User, {
    foreignKey: "id_regiao",
});
exports.default = User;
