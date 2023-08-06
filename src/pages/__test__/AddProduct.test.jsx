import { act, fireEvent, render, screen } from "@testing-library/react";
import AddProduct from "../AddProduct";



test("test add product", () => {
    render(<AddProduct/>);
    const label = screen.getByText(/Email address/i);
    expect(label).toBeInTheDocument();
  });

  test("test email Input", () => {
    render(<AddProduct/>);
    const input = screen.getByPlaceholderText(/enter email/i);
    fireEvent.change(input, { target: { value: "sample@mail.com" } })
    expect(input.value).toBe("sample@mail.com");
  });

  test("test empty email Input", () => {
    render(<AddProduct/>);
    const input = screen.getByPlaceholderText(/enter email/i);
    fireEvent.change(input, { target: { value: "sample@mail.com" } })
    const buttonElement = screen.getByRole("button", { name: /Submit/i});
    fireEvent.click(buttonElement)
    const label = screen.getByText(/ok/i);
    expect(label).toBeInTheDocument();
  });

  test("test empty email Input", () => {
    render(<AddProduct/>);
    const input = screen.getByPlaceholderText(/enter email/i);

    fireEvent.change(input, { target: { value: "ab" } })
    const buttonElement = screen.getByRole("button", { name: /Submit/i});
    act(() => {
        fireEvent.click(buttonElement);
      });
      const label = screen.getByText(/Emailrequired/i);
    expect(label).toBeInTheDocument();
  });

  test("test empty email input", () => {
    render(<AddProduct />);
    const input = screen.getByPlaceholderText(/enter email/i);
    fireEvent.change(input, { target: { value: "ab" } });
    const buttonElement = screen.getByRole("button", { name: /Submit/i });
  
    act(() => {
      fireEvent.click(buttonElement);
    });
  
    const label = screen.getByText((content, element) => {
      const hasText = (text) => element.textContent.includes(text);
      return hasText("Emailrequired");
    });
  
    expect(label).toBeInTheDocument();
  });
