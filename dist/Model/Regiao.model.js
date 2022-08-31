"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserDomain_1 = require("../Domain/UserDomain");
class Regiao extends sequelize_1.Model {
}
Regiao.init({
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    uf: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: UserDomain_1.dabatase.connection,
    freezeTableName: true,
});
exports.default = Regiao;
