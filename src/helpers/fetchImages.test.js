import { fetchImages } from "./fetchImages";

describe("fetchImages", () => {
  let mockFetch;

  beforeEach(() => {
    mockFetch = jest.spyOn(global, "fetch");
  });

  afterEach(() => {
    mockFetch.mockRestore();
  });

  it("should fetch images successfully", async () => {
    const mockResponse = {
      images: [1, 2, 3],
    };

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await fetchImages();

    expect(result.images).toEqual(mockResponse.images);
    expect(mockFetch).toHaveBeenCalledWith("images");
  });

  it("should handle errors correctly", async () => {
    const mockError = new Error("Fetch error");

    mockFetch.mockRejectedValueOnce(mockError);

    const consoleErrorSpy = jest.spyOn(console, "error");

    const result = await fetchImages();

    expect(result).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error:", mockError);
  });
});
