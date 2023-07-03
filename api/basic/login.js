const userApi = {
  Login: "auth/oauth/token",
};
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
const client_secret = 123456;
const client_id = "smart-work-app";
export function login(parameter) {
  return uni.$u.post(
    userApi.Login +
      `?username=${parameter.username}&password=${encodeURIComponent(
        parameter.password
      )}&grant_type=${
        parameter.grant_type
      }&client_id=${client_id}&client_secret=${client_secret}`
  );
}
export function loginByCode(parameter) {
  return uni.$u.post(
    userApi.Login +
      `?phone=${parameter.phone}&code=${parameter.code}&grant_type=${parameter.grant_type}&client_id=${client_id}&client_secret=${client_secret}`
  );
}
export const eliminateCid = () => uni.$u.put(account + "/eliminate-cid");
