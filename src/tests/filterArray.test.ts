import { describe, expect, it } from "vitest";
import { filterArray } from "@/utils/filterArray";

const result = [
  {
    id: "4",
    title: "Hawaiian Pizza",
    price: "11.00",
    description: "A delicious combination of ham, pineapple, and pineapple.",
    quantity: 5,
  },
];

const pizzas = [
  {
    id: "1",
    title: "Pina Colada Pizza",
    price: "10.00",
    description: "A delicious combination of pineapple, coconut, and coconut milk.",
    quantity: 1,
  },
  {
    id: "5",
    title: "Meat Lovers Pizza",
    price: "13.00",
    description: "A delicious combination of pepperoni, sausage, and bacon.",
    quantity: 3,
  },
  ...result,
];

describe('filterArray', () => {
  it('should return a filtered array', () => {
    expect(filterArray(pizzas, 'title', 'hawaiian')).toEqual(result);
  });

  it("should return a empty array when key doesn't exist", () => {
    expect(filterArray(pizzas, 'name', 'Hawaiian')).toEqual([])
  });
});