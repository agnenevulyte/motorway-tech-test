import React from "react";
import { render } from "@testing-library/react";
import { ImageCard } from "./ImageCard";

describe("ImageCard Component", () => {
  const mockImg = {
    user: {
      profile_image: "user-profile-image",
      username: "testuser",
    },
    description: "Test description",
    url: "image-url",
  };

  it("renders user's name and description", () => {
    const { getByText, getByAltText } = render(<ImageCard img={mockImg} />);
    const userNameElement = getByText("testuser");
    const descriptionElement = getByText("Test description");
    const userIcon = getByAltText("User Icon");

    expect(userNameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
    expect(userIcon).toHaveAttribute("src", "user-profile-image.webp");
  });
});
