import React, { useState } from "react";
import "./SubscriptionForm.css";
import { InputComponent } from "./InputField";
import { validateForm } from "../helpers/subsciptionForm";

const colorOptions = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
  "Brown",
];

export const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    favoriteColor: "",
    salary: 50000,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(formData, setErrors)) {
      console.log("Subscribed:", formData);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Subscription Form</h2>
        <form onSubmit={handleSubmit}>
          <InputComponent
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            error={errors.name}
          />
          <InputComponent
            id="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            error={errors.email}
          />
          <InputComponent
            id="date"
            label="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            type="date"
            error={errors.dob}
          />
          <div>
            <label htmlFor="colour">Favorite Colour:</label>
            <select
              id="colour"
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleInputChange}
              className="form-select"
              required
            >
              <option value="">Select a color</option>
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
            {errors.favoriteColor && (
              <span className="error">{errors.favoriteColor}</span>
            )}
            <br />
          </div>
          <div>
            <label htmlFor="salary">Salary:</label>
            <input
              type="range"
              id="salary"
              name="salary"
              min="0"
              max="250000"
              step="1000"
              value={formData.salary}
              onChange={handleInputChange}
            />
            <p>£{formData.salary}</p>
            <br />
          </div>
          <div className="submit-button-wrapper">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};
