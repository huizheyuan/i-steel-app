/**
 * API接口配置文件
 */
const prefix = "api";
const baseApiUrl = "http://10.1.1.203/service";
// const baseApiUrl = "https://www.xxxxx.net/service";

module.exports = {
  baseApiUrl,
  auth: `/basic/${prefix}/auths`,
  account: `/basic/${prefix}/account`,
};
