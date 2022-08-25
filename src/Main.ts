import App from "./App/App";
import User from "./Model/User.model";
import Regiao from "./Model/Regiao.model";
import { dabatase } from "./Domain/UserDomain";
new App().App.listen("3331", async () => {
  //User.sync({ force: true });
  //Regiao.sync({ force: true });
  //dabatase.connection.sync({ alter: true });
  console.log(`Servidor online`);
});
