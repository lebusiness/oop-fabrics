import { Topper } from "../../beverageFabricAbstract/interfaces/topper";

export class Cream implements Topper {
  public getCost() {
    return 10;
  }
}

export class Syrup implements Topper {
  public getCost() {
    return 7;
  }
}
