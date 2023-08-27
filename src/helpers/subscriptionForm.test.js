import { validateForm } from "./subsciptionForm";

describe("validateForm", () => {
  it("returns true for valid form data", () => {
    const formData = {
      name: "John",
      email: "john@example.com",
      dob: "2000-01-01",
      favoriteColor: "Blue",
    };

    const setErrors = jest.fn();

    const result = validateForm(formData, setErrors);

    expect(result).toBe(true);
    expect(setErrors).toHaveBeenCalledWith({});
  });

  it("populates errors for invalid form data", () => {
    const formData = {
      name: "",
      email: "john@",
      dob: "",
      favoriteColor: "",
    };

    const setErrors = jest.fn();

    const result = validateForm(formData, setErrors);

    expect(result).toBe(false);
    expect(setErrors).toHaveBeenCalledWith({
      name: "Name is required",
      email: "Invalid email format",
      dob: "Date of Birth is required",
      favoriteColor: "Favorite color is required",
    });
  });
});
