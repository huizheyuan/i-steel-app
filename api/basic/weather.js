export const getWeather = (code) =>
  uni.$u.http.get(
    `https://restapi.amap.com/v3/weather/weatherInfo?city=${code}&key=8b9cd09966a72395ab2fe1ed52e960de`
  );
