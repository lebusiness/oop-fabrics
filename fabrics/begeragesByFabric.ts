import { Beverage } from "../beverageAbstract/Beverage";
import { BeverageComponentsFabric } from "./beverageFabricAbstract/BeverageFabric";

import {
  FruitFreshComponentsFabric,
  NonAlcoholicCocktailComponentsFabric,
  TeaComponentsFabric,
} from "./subfabrics/subfabrics";

abstract class BeverageWithFabric extends Beverage {
  public abstract ingridientFabric: BeverageComponentsFabric;
  constructor(public volume: number) {
    super();
  }

  public getCost(): number {
    const cost =
      this.ingridientFabric.getBasement().getCost() +
      this.ingridientFabric.getMainIngridient().getCost() +
      this.ingridientFabric.getTopper().getCost();

    return Math.floor(cost * this.volume);
  }
}

export class Tea extends BeverageWithFabric {
  public ingridientFabric = new TeaComponentsFabric();

  public getDescription(): string {
    return "Tea";
  }
}

export class NonAlcoholicCocktail extends BeverageWithFabric {
  public ingridientFabric = new NonAlcoholicCocktailComponentsFabric();

  public getDescription(): string {
    return "Non Alcoholic coctail";
  }
}

export class FruitFresh extends BeverageWithFabric {
  public ingridientFabric = new FruitFreshComponentsFabric();

  public getDescription(): string {
    return "Fruit fresh";
  }
}
