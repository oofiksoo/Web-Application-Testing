import React from "react";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper).toBeVisible;
});

test("renders dashboard component", () => {
  const wrapper = rtl.render(<Dashboard />);

  const element = wrapper.getByText(/hit/i);

  expect(element).toBeInTheDocument();
});

test("renders display component", () => {
  const wrapper = rtl.render(<Display />);

  const element = wrapper.getByText(/Balls/i);

  expect(element).toBeInTheDocument();
});
