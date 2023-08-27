export const fetchImages = async () => {
    try {
      const response = await fetch("images");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };