import { divide } from "../src/divide";

test("divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws an error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
});
