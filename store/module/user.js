import Base64 from "@/common/base64.js";
import cache from "@/common/cache.js";
import { baseApiUrl } from "@/api/url.js";
import { login, loginByCode, eliminateCid } from "@/api/basic/login.js";

export default {
  state: {
    info: {},
    showUpdatePwd: false,
    employeeInfo: {},
  },
  mutations: {
    SET_INFO: (state, info) => {
      state.info = info;
    },
    SET_EMPLOYEEINFO: (state, employeeInfo) => {
      state.employeeInfo = employeeInfo;
    },
    SET_PWD: (state, showUpdatePwd) => {
      state.showUpdatePwd = showUpdatePwd;
    },
  },
  actions: {
    SetUser({ commit, state }, user) {
      commit("SET_INFO", user);
    },
    SetEmployee({ commit, state }, user) {
      commit("SET_INFO", user);
    },
    Login({ commit, state }, userInfo) {
      return new Promise((resolve, reject) => {
        const grant_type = userInfo.grant_type === "password";
        const method = grant_type ? login : loginByCode;
        const pwdFlag = grant_type && userInfo.password === "Jd!564@bca";
        const reg =
          grant_type &&
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~.!@#$%\*-\+=:,\\?\[\]\{}]).{8,20}$/.test(
            userInfo.password
          );
        method(userInfo)
          .then((response) => {
            if (!response.success) return;
            commit("SET_PWD", pwdFlag || reg);
            const user = JSON.parse(
              Base64.decode(response.data.token.split(".")[1])
            );
            const refreshToken = response.data.refreshToken;
            const token = response.data.token;
            cache.put("accessToken", token);
            cache.put("refreshToken", refreshToken);
            const userInfo = {
              // Id
              id: user.id,
              // 名称
              name: user.name ? user.name : user.user_name,
              // 属性
              attribute:
                user.attribute === undefined || user.attribute === null
                  ? false
                  : JSON.parse(user.attribute),
              // 账号
              account: user.user_name,
              // 权限
              authorities: user.authorities,
              // 机构Id
              orgId: user.orgId,
              // 部门Id
              deptId: user.deptId,
              // 岗位
              postId: user.postId,
              // 岗位类型
              postType: user.postType,
            };
            cache.put("user", userInfo);
            cache.put("orgInfo", {
              id: userInfo.orgId,
              name: "",
            });
            commit("SET_INFO", userInfo);
            // 缓存用户信息
            // getEmployee(state.info.id).then((res) => {
            //   let userData = {
            //     ...res.data,
            //   };
            //   if (isEmpty(userData.image)) {
            //     userData.image = userData.gender
            //       ? "../../static/images/mine/avatarFemale.png"
            //       : "../../static/images/mine/avatarMale.png";
            //   } else {
            //     userData.image = baseApiUrl + "/file" + userData.image;
            //   }
            //   commit("SET_EMPLOYEEINFO", userData);
            //   cache.put("employeeInfo", userData);
            // });
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        // eliminateCid()
        //   .then((response) => {
        //     resolve();
        //   })
        //   .catch((error) => {
        //     reject();
        //   })
        //   .finally(() => {
        //     let saveFileList = JSON.parse(cache.get("saveFileList")) || [];
        //     let userList = cache.get("userList") || {};
        //     cache.remove("tenant");
        //     cache.remove("accessToken");
        //     cache.remove("refreshToken");
        //     cache.remove("user");
        //     cache.remove("orgInfo");
        //     cache.remove("employeeInfo");
        //     // cache.clear()
        //     cache.put("saveFileList", JSON.stringify(saveFileList));
        //     cache.put("userList", userList);
        //     cache.put("maintenanceQueryParams", {});
        //     cache.put("taskGroupParams", {});
        //     cache.put("pathMaintenanceTask", "");
        //     cache.put("pathTaskList", "");
        //     commit("SET_INFO", {});
        //     commit("SET_ORG", {});
        //     commit("SET_EMPLOYEEINFO", {});
        //     commit("SET_ROLE_DATA", []);
        //     commit("SET_CURRENT_ORG", {});
        //     commit("SET_ORG_TREE", []);
        //   });
      });
    },
  },
};
