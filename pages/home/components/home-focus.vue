<template>
  <div>
    {{ record }}
    <u-swiper
      :list="adList"
      keyName="url"
      showTitle
      autoplay
      indicator
      circular
      interval="3000"
      radius="5"
      height="300"
    ></u-swiper>
    <view v-for="item in dataList" :key="item.id" style="height: 200px">
      {{ item.id }}、{{ item.name }}
    </view>
  </div>
</template>

<script>
import { HOME_TOP_LIST } from "@/common/enums";

export default {
  props: {
    record: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      HOME_TOP_LIST,
      adList: [
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
        {
          url: "https://cdn.uviewui.com/uview/resources/video.mp4",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          type: "video",
        },
      ],
      dataList: [],
    };
  },
  onLoad() {},
  mounted() {},
  methods: {
    refresh() {
      console.log("HomeFocus refresh");
      this.dataList = [
        { id: 1, name: "qqq" },
        { id: 2, name: "qqq" },
        { id: 3, name: "qqq" },
        { id: 4, name: "qqq" },
      ];
    },
    load() {
      console.log("HomeFocus load");
      this.dataList.concat([
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
        { id: Math.random(), name: "qqq" },
      ]);
      console.log("HomeFocus load", this.dataList);
    },
  },
};
</script>
