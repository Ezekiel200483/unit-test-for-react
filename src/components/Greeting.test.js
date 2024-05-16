import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders a greeting message", () => {
    // Arrange
    const { getByText } = render(<Greeting />);
    // Act
    const greetingElement = getByText("Hello, World!");
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    //Arrange
    render(<Greeting />);
    //Act
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);
    //Act
    
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test('does not render "good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);
    //Act
    
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });
});
