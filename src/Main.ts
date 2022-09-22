import App from "./App/App";
import User from "./Model/User.model";
import Regiao from "./Model/Regiao.model";
import Modelo from "./Model/Modelo.model";
import Pos from "./Model/Pos.model";
import Image from "./Model/Image.model";
import { dabatase } from "./Domain/UserDomain";
new App().App.listen("3331", async () => {
  //User.sync({ alter: true });
  //Regiao.sync({ force: true });
  //Image.sync({ alter: true });
  console.log(`Servidor online`);
});
