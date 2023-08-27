import { pagination } from "./pagination";

describe("pagination", () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("should return the correct subset of images for the first page", () => {
    const currentPage = 1;
    const imagesPerPage = 4;
    const result = pagination(images, currentPage, imagesPerPage);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should return the correct subset of images for a different page", () => {
    const currentPage = 2;
    const imagesPerPage = 4;
    const result = pagination(images, currentPage, imagesPerPage);
    expect(result).toEqual([5, 6, 7, 8]);
  });

  it("should handle the last page correctly", () => {
    const currentPage = 3;
    const imagesPerPage = 4;
    const result = pagination(images, currentPage, imagesPerPage);
    expect(result).toEqual([9, 10]);
  });
});
