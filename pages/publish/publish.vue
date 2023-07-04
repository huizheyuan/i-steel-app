<!-- 发布 -->
<template>
  <view class="publish-wrap">
    <u-form
      :model="formModel"
      :rules="rules"
      labelWidth="160"
      labelPosition="left"
      labelAlign="right"
      ref="uForm"
      class="form"
    >
      <u-form-item label="标题：" prop="title" borderBottom required>
        <u-input
          v-model="formModel.title"
          :border="'none'"
          placeholder="请输入标题"
        />
      </u-form-item>
      <u-form-item label="描述：" prop="describe" borderBottom>
        <u-textarea
          v-model="formModel.describe"
          :border="'none'"
          placeholder="请输入描述"
        ></u-textarea>
      </u-form-item>
      <u-form-item label="数量：" prop="num" borderBottom required>
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
        required
        @click="showCategory = true"
      >
        <u-input
          v-model="formModel.category"
          placeholder="请选择分类"
          :border="'none'"
        ></u-input>
        <u-icon slot="right" name="arrow-right"></u-icon>
      </u-form-item>
      <u-form-item label="地点：" prop="addr" borderBottom required>
        <u-icon slot="right" name="arrow-right"></u-icon>
      </u-form-item>
      <u-form-item
        label="资源状态："
        prop="state"
        borderBottom
        required
        @click="showState = true"
      >
        <u-input
          v-model="formModel.stateEnum"
          placeholder="请选择状态"
          :border="'none'"
        ></u-input>
        <u-icon slot="right" name="arrow-right"></u-icon>
      </u-form-item>
      <u-form-item label="图片：" prop="fileListImg" borderBottom required>
        <u-upload
          name="Img"
          :fileList="formModel.fileListImg"
          @afterRead="afterRead"
          @delete="deleteFile"
          multiple
          :maxCount="10"
        ></u-upload>
      </u-form-item>
      <u-form-item label="视频：" prop="video" borderBottom>
        <u-upload
          name="Video"
          accept="video"
          :fileList="formModel.fileListVideo"
          @afterRead="afterRead"
          @delete="deleteFile"
          multiple
          :maxCount="10"
        ></u-upload>
      </u-form-item>
      <u-picker
        :show="showCategory"
        :columns="columnsCategory"
        itemHeight="55"
        keyName="name"
        closeOnClickOverlay
        @cancel="showCategory = false"
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
        describe: "",
        num: "",
        categoryId: "",
        category: "",
        addr: "",
        state: "",
        stateEnum: "",
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
      },
    };
  },
  methods: {
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
    submit() {},
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
};
</script>

<style lang="scss" scoped>
.publish-wrap {
  height: 100%;
  background-color: $uni-bg-color;
  margin: 0 16rpx;
  padding: 0 20rpx;
  display: flex;
  flex-direction: column;
  .form {
    flex: 1;
    overflow: scroll;
  }
  .btn {
    margin-bottom: 16rpx;
  }
}
</style>
