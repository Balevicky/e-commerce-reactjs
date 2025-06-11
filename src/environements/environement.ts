export const apiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000/";
  } else {
    return "https://api.jstore.fr/";
  }
};
// console.log(apiUrl);

export const webApiUrl = apiUrl();
