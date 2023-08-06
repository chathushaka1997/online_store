import { render, screen } from "@testing-library/react"
import Dasboard from "../Dasboard"


test("test dashbaord",()=>{
    render(<Dasboard/>)
    const linkElement = screen.getByText(/Dasboard/i);
    expect(linkElement).toBeInTheDocument();

})