var mpaasScanModule = uni.requireNativePlugin("Mpaas-Scan-Module");

export const scanCode = (callback) => {
  if (mpaasScanModule) {
    mpaasScanModule.mpaasScan(
      {
        // 扫码 UI 风格，参数可为 qr、bar，默认为 qr
        type: "qr",
        // 扫码识别类型，参数可多选，qrCode、barCode，不设置，默认识别所有
        scanType: ["qrCode", "barCode"],
        // 是否隐藏相册，默认false不隐藏
        hideAlbum: true,
      },
      (res) => {
        // 返回值中，resp_code 表示返回结果值，10：用户取消，11：其他错误，1000：成功
        // 返回值中，resp_message 表示返回结果信息
        // 返回值中，resp_result 表示扫码结果，只有成功才会有返回
        if (res.resp_code == 1000) {
          callback({
            result: res.resp_result,
          });
        } else if (res.resp_code == 11) {
          //   uni.$u.toast("识别失败！");
        } else {
          console.log("用户取消");
        }
      }
    );
  } else {
    uni.scanCode({
      onlyFromCamera: true,
      scanType: ["qrCode"],
      success: function (res) {
        callback(res);
      },
    });
  }
};
