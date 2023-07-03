
//预览图片
export const previewImage = (imgs) => {
	uni.previewImage({
		urls: imgs,
		longPressActions: {
			itemList: ['保存图片'],
			success: function(data) {
				//云函数下载已上传至云开发的文件至临时文件
				uni.downloadFile({
					url: imgs[0],
					success: (res) => {
						if (res.statusCode === 200) {
							//保存图片到系统相册
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function() {
									uni.showToast({
										title: "保存成功",
										icon: "none"
									});
									return
								},
								fail: function() {
									uni.showToast({
										title: "保存失败，请稍后重试",
										icon: "none"
									});
									return
								}
							});
						}
					}
				})
			},
			fail: function(err) {
				console.log(err.errMsg);
			}
		}
	});
}