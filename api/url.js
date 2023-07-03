/**
 * API接口配置文件
 */
const prefix = "api";
// const baseApiUrl = 'http://10.1.1.8/service';
// const baseApiUrl = "http://10.1.1.203/service";
const baseApiUrl = "http://192.168.1.118:10000";
// const baseApiUrl = "https://www.shxjd.net/service";

module.exports = {
  baseApiUrl,
  auth: `/basic/${prefix}/auths`,
  account: `/basic/${prefix}/account`,
};
