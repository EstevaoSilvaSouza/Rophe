"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserDomain_1 = require("../Domain/UserDomain");
class Modelo extends sequelize_1.Model {
}
Modelo.init({
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fabricante: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: UserDomain_1.dabatase.connection,
    freezeTableName: true,
});
exports.default = Modelo;
