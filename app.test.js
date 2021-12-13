import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe('Emoji search master test', () => {
  let headerText, input

  beforeEach(() => {
    render(<App />);
    headerText = screen.getByText(/Emoji Search/i);
    input = screen.getByPlaceholderText(/Emoji Name/i)
  })

  it("renders without crashing test", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  
  test("header render test", () => {
    expect(<Header />);
  });

  test("emoji list test", () => {
    const items = screen.getAllByText(/Click to copy emoji/i);
    expect(items.length).toEqual(20);
  })

  test("filter test", () => {
    const emojiName = "Joy";
    userEvent.type(input, emojiName);
    const items = screen.getAllByText(/Click to copy emoji/i);
    expect(items.length).toEqual(3);
  })
  

});
