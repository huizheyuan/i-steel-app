<!-- 发布 -->
<template>
  <view class="publish-wrap">
    <u-form
      labelPosition="left"
      :model="model"
      :rules="rules"
      ref="uForm"
      class="form"
    >
      <u-form-item label="标题" prop="title"> </u-form-item>
      <u-form-item label="描述" prop="desc"> </u-form-item>
      <u-form-item label="数量" prop="num"> </u-form-item>
      <u-form-item label="分类" prop="category"> </u-form-item>
      <u-form-item label="交易地点" prop="addr"> </u-form-item>
      <u-form-item label="关键字" prop="keywords"> </u-form-item>
      <u-form-item label="资源状态" prop="state"> </u-form-item>
      <u-form-item label="图片" prop="img"> </u-form-item>
      <u-form-item label="视频" prop="video"> </u-form-item>
    </u-form>
    <u-button type="primary" text="发布" @click="submit"></u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {
        phone: "",
        pwd: "",
        code: "",
      },
      rules: {
        phone: {
          type: "string",
          required: true,
          message: "请输入手机号",
          trigger: ["blur", "change"],
        },
      },
    };
  },
  methods: {
    submit() {},
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
};
</script>

<style lang="scss" scoped></style>
