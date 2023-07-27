function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const responseData = { message: "API response data" };
      resolve(responseData);
    }, 2000);
  });
}
export default getResponseFromAPI;
