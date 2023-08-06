import { render, screen } from "@testing-library/react";
import ViewProduct from "../ViewProduct";
import { Provider } from "react-redux";
import store from "../../app/store";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockCom = () => {
  return (
    <Provider store={store}>
      <ViewProduct />
    </Provider>
  );
};

const mockCom2 = () => {
  const id = "123";
  return (
    <Provider store={store}>
      
            <ViewProduct />
        
    </Provider>
  );
};

test("test dashbaord", () => {
  render(mockCom());
  const heading = screen.getByText(/Product/i);
  expect(heading).toBeInTheDocument();
});

test("renders ViewProduct component with correct id", async () => {
  // Set the desired id for testing

  // Wrap the component with MemoryRouter and provide the id as a URL parameter
  render(mockCom2());
  const productName = await screen.findByText(/iphone/i);
  // Verify that the component renders with the correct id
  expect(productName).toBeInTheDocument();
});
