import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { SubscriptionForm } from "./SubscriptionForm";

describe("SubscriptionForm", () => {
  let getNameInput;
  let getEmailInput;
  let getDobInput;
  let getFavoriteColorSelect;
  let getSalaryRange;
  let getSubscribeButton;

  beforeEach(() => {
    render(<SubscriptionForm />);
    getNameInput = screen.getByLabelText("Name:");
    getEmailInput = screen.getByLabelText("Email:");
    getDobInput = screen.getByLabelText("Date of Birth:");
    getFavoriteColorSelect = screen.getByLabelText("Favorite Colour:");
    getSalaryRange = screen.getByLabelText("Salary:");
    getSubscribeButton = screen.getByText("Subscribe");
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the form with initial state", () => {
    // Assert that form inputs are present
    expect(getNameInput).toBeVisible();
    expect(getEmailInput).toBeVisible();
    expect(getDobInput).toBeVisible();
    expect(getFavoriteColorSelect).toBeVisible();
    expect(getSalaryRange).toBeVisible();
    expect(getSubscribeButton).toBeVisible();

    // Assert that initial values are correct
    expect(getNameInput).toHaveValue("");
    expect(getEmailInput).toHaveValue("");
    expect(getDobInput).toHaveValue("");
    expect(getFavoriteColorSelect).toHaveValue("");
    expect(getSalaryRange).toHaveValue("50000");
  });

  it("updates state on input change", () => {
    fireEvent.change(getNameInput, { target: { value: "John" } });
    expect(getNameInput).toHaveValue("John");
  });

  it("submits form when data is valid", () => {
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.change(getNameInput, { target: { value: "John" } });
    fireEvent.change(getEmailInput, {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getDobInput, {
      target: { value: "2000-01-01" },
    });
    fireEvent.change(getFavoriteColorSelect, {
      target: { value: "Blue" },
    });
    fireEvent.change(getSalaryRange, {
      target: { value: 100000 },
    });
    fireEvent.click(getSubscribeButton);

    expect(consoleSpy).toHaveBeenCalledWith("Subscribed:", {
      name: "John",
      email: "john@example.com",
      dob: "2000-01-01",
      favoriteColor: "Blue",
      salary: "100000",
    });
  });
});
