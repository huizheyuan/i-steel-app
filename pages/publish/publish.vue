<!-- 发布 -->
<template>
  <view class="publish-wrap">
    <u-form
      :model="formModel"
      :rules="rules"
      :errorType="message"
      labelWidth="auto"
      labelPosition="left"
      labelAlign="left"
      ref="uForm"
      class="form"
    >
      <view class="formItemCard">
        <u-form-item label="标题：" prop="title" borderBottom>
          <u-input
            v-model="formModel.title"
            :border="'none'"
            placeholder="请输入标题"
          />
        </u-form-item>
        <u-form-item label="数量：" prop="num" borderBottom>
          <u-input
            v-model="formModel.num"
            :border="'none'"
            placeholder="请输入数量"
          />
        </u-form-item>
        <u-form-item
          label="分类："
          prop="category"
          borderBottom
          @click="
            showCategory = true;
            hideKeyboard();
          "
        >
          <u-input
            v-model="formModel.category"
            placeholder="请选择分类"
            :border="'none'"
          ></u-input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item
          label="资源状态："
          prop="state"
          borderBottom
          @click="
            showState = true;
            hideKeyboard();
          "
        >
          <u-input
            v-model="formModel.stateEnum"
            placeholder="请选择状态"
            :border="'none'"
          ></u-input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item label="地点：" prop="addr" @click="showMap">
          <u-input
            v-model="formModel.addr"
            placeholder="请选择地点"
            :border="'none'"
          ></u-input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
      </view>
      <view class="formItemCard">
        <u-form-item label="描述：" prop="describe">
          <u-textarea
            v-model="formModel.describe"
            :height="170"
            :maxlength="500"
            :count="true"
            :border="'none'"
            disableDefaultPadding
            placeholder="请输入描述"
          ></u-textarea>
        </u-form-item>
      </view>
      <view class="formItemCard">
        <u-form-item label="图片：" prop="fileListImg" borderBottom>
          <u-upload
            name="Img"
            :fileList="formModel.fileListImg"
            @afterRead="afterRead"
            @delete="deleteFile"
            multiple
            width="140"
            height="140"
            uploadText="请上传图片"
            :maxCount="10"
          ></u-upload>
        </u-form-item>
        <u-form-item label="视频：" prop="video">
          <u-upload
            name="Video"
            accept="video"
            :fileList="formModel.fileListVideo"
            @afterRead="afterRead"
            @delete="deleteFile"
            multiple
            width="140"
            height="140"
            uploadText="请上传视频"
            :maxCount="10"
          ></u-upload>
        </u-form-item>
      </view>
      <u-picker
        :show="showCategory"
        :columns="columnsCategory"
        itemHeight="55"
        keyName="name"
        closeOnClickOverlay
        @cancel="showCategory = false"
        @close="showCategory = false"
        @confirm="
          (e) => {
            formModel.categoryId = e.value[0].id;
            formModel.category = e.value[0].name;
            showCategory = false;
          }
        "
      ></u-picker>
      <u-picker
        :show="showState"
        :columns="columnsState"
        itemHeight="55"
        keyName="name"
        closeOnClickOverlay
        @cancel="showState = false"
        @close="showState = false"
        @confirm="
          (e) => {
            formModel.state = e.value[0].id;
            formModel.stateEnum = e.value[0].name;
            showState = false;
          }
        "
      ></u-picker>
    </u-form>
    <u-button type="primary" text="发布" class="btn" @click="submit"></u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showCategory: false,
      showState: false,
      columnsCategory: [
        [
          { name: "分类一", id: "454444" },
          { name: "分类二", id: "4544344" },
        ],
      ],
      columnsState: [
        [
          { name: "状态一", id: "454444" },
          { name: "状态二", id: "4544344" },
        ],
      ],
      formModel: {
        title: "",
        num: "",
        categoryId: "",
        category: "",
        state: "",
        stateEnum: "",
        addr: "",
        describe: "",
        fileListImg: [],
        fileListVideo: [],
      },
      rules: {
        title: {
          type: "string",
          required: true,
          message: "请输入标题",
          trigger: ["blur", "change"],
        },
        num: {
          type: "string",
          required: true,
          message: "请输入数量",
          trigger: ["blur", "change"],
        },
        categoryId: {
          type: "string",
          required: true,
          message: "请选择分类",
          trigger: ["change"],
        },
        state: {
          type: "string",
          required: true,
          message: "请选择状态",
          trigger: ["change"],
        },
        addr: {
          type: "string",
          required: true,
          message: "请选择地点",
          trigger: ["change"],
        },
        describe: {
          type: "string",
          required: true,
          message: "请输入描述信息",
          trigger: ["change"],
        },
        fileListImg: [
          {
            type: "array",
            validator: (rule, value, callback) => {
              if (
                value.length === 0 &&
                this.formModel.fileListVideo.length === 0
              ) {
                return false;
              } else {
                return true;
              }
            },
            message: "请上传图片",
            trigger: ["change"],
          },
        ],
        fileListVideo: [
          {
            type: "array",
            validator: (rule, value, callback) => {
              if (
                value.length === 0 &&
                this.formModel.fileListImg.length === 0
              ) {
                return false;
              } else {
                return true;
              }
            },
            message: "请上传视频",
            trigger: ["change"],
          },
        ],
      },
    };
  },
  methods: {
    showMap() {
      this.hideKeyboard();
      uni.navigateTo({
        url: "/pages/publish/publishMap",
        animationType: "slide-in-bottom",
        animationDuration: 2000,
      });
    },
    hideKeyboard() {
      uni.hideKeyboard();
    },
    async afterRead(event) {
      console.log(event);
      // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.forEach((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      //   for (let i = 0; i < lists.length; i++) {
      //     const result = await uploadFile(lists[i]);
      //     let item = this[`fileList${event.name}`][fileListLen];
      //     this[`fileList${event.name}`].splice(
      //       fileListLen,
      //       1,
      //       Object.assign(item, {
      //         status: "success",
      //         message: "",
      //         url: result,
      //       })
      //     );
      //     fileListLen++;
      //   }
    },
    deleteFile(event) {
      console.log(event);
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    submit() {
      this.$refs.uForm
        .validate()
        .then((res) => {
          uni.$u.toast("校验通过");
        })
        .catch((errors) => {
          uni.$u.toast("校验失败");
        });
    },
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
};
</script>

<style lang="scss" scoped>
.publish-wrap {
  background-color: $uni-bg-color-form;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20rpx;
  .form {
    flex: 1;
    overflow: scroll;
    .formItemCard {
      background-color: $uni-bg-color;
      border-radius: 20rpx;
      padding: 16rpx 40rpx;
      margin: 20rpx 0;
    }
  }
  .btn {
    margin-bottom: 16rpx;
  }
}
</style>
