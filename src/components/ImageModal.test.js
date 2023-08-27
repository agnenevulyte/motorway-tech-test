import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ImageModal } from "./ImageModal";

describe("ImageModal component", () => {
  let closeModal;

  beforeEach(() => {
    closeModal = jest.fn();
  });

  it("should render modal with selected image", () => {
    const selectedImage = { url: "image-url" };

    render(
      <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
    );

    const closeButton = screen.getByText("×");
    const modalImage = screen.getByAltText("Displayed Item");

    expect(closeButton).toBeVisible();
    expect(modalImage).toBeVisible();

    fireEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it("should not render modal without selected image", () => {
    render(<ImageModal selectedImage={null} closeModal={closeModal} />);

    const closeButton = screen.queryByText("×");
    const modalImage = screen.queryByAltText("modal image");

    expect(closeButton).toBeNull();
    expect(modalImage).toBeNull();
    expect(closeModal).not.toHaveBeenCalled();
  });
});
