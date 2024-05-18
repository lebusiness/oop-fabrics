import { Base } from "../../beverageFabricAbstract/interfaces/base";

export class Water implements Base {
  public getCost() {
    return 1;
  }
}

export class Juice implements Base {
  public getCost() {
    return 4;
  }
}
