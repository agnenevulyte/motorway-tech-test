export const validateForm = (formData, setErrors) => {
    const newErrors = {};
  
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name cannot contain numbers";
    }
  
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
  
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }
  
    if (!formData.favoriteColor) {
      newErrors.favoriteColor = "Favorite color is required";
    }
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  