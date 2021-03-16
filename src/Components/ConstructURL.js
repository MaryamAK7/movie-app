const baseURL = "https://api.themoviedb.org/3";

export const ConstructURL = (path, query) => {
  return `
 ${baseURL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}
 `;
};
