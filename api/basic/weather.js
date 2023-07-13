export const getGeocode = (location) =>
  uni.$u.http.get(
    `https://restapi.amap.com/v3/geocode/regeo?output=json&location=${location}&key=8b9cd09966a72395ab2fe1ed52e960de&radius=1000&extensions=all`
  );

export const getWeather = (code) =>
  uni.$u.http.get(
    `https://restapi.amap.com/v3/weather/weatherInfo?city=${code}&key=8b9cd09966a72395ab2fe1ed52e960de`
  );
