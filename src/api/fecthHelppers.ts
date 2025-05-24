export const get = async (url: string, headers = {}) => {
  try {
    const response = await fetch(url, headers);
    if (!response.ok) {
      return {
        isSuccess: false,
      };
    }

    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};
