<!-- 热点视频 -->
<template>
  <view class="video-hot-wrap pageBox">
    <custom-navbar :title="pageTitle || '热点视频'">
      <view slot="right" @click="add">
        <u-icon name="plus" size="36" color="#ffffff"></u-icon>
      </view>
    </custom-navbar>
    <swiper-search
      :list="searchList"
      :iconSize="40"
      iconColor="#3c9cff"
      @click="goSearch"
    ></swiper-search>
    <view class="searchTag">
      <text
        v-for="(item, index) in searchTagList"
        :key="index"
        class="searchTagItem"
      >
        {{ item }}
      </text>
    </view>
    <mescroll-body
      ref="mescrollRef"
      @init="mescrollInit"
      :down="downOption"
      @down="downCallback"
      @up="upCallback"
    >
      <video-list :dataList="dataList"></video-list>
    </mescroll-body>
  </view>
</template>

<script>
import SwiperSearch from "@/components/swiper-search";
import CustomNavbar from "@/components/custom-navbar";
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import VideoList from "./components/video-list";
import { apiNewList } from "@/api/mock";

export default {
  mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
  components: { SwiperSearch, CustomNavbar, VideoList },
  data() {
    return {
      pageTitle: null,
      searchList: [
        { id: "1", title: "视频1" },
        { id: "2", title: "视频2" },
      ],
      searchTagList: ["#废钢", "#废铁"],
      downOption: {
        auto: false, //是否在初始化后,自动执行downCallback; 默认true
      },
      dataList: [],
    };
  },
  onLoad(data) {
    this.pageTitle = data.title;
  },
  methods: {
    add() {
      uni.$u.route({ url: "/pages/video/video-add" });
    },
    goSearch(current) {
      uni.$u.route({
        url: "/pages/home/home-search",
        params: this.searchList[current],
      });
    },
    /*下拉刷新的回调 */
    downCallback() {
      //联网加载数据
      apiNewList()
        .then((data) => {
          //联网成功的回调,隐藏下拉刷新的状态
          this.mescroll.endSuccess();
          //设置列表数据
          this.dataList.unshift(data[0]);
        })
        .catch(() => {
          //联网失败的回调,隐藏下拉刷新的状态
          this.mescroll.endErr();
        });
    },
    /*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
    upCallback(page) {
      //联网加载数据
      apiNewList(page.num, page.size)
        .then((curPageData) => {
          //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;

          //方法一(推荐): 后台接口有返回列表的总页数 totalPage
          //this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

          //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
          //this.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

          //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
          //this.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

          //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据.
          this.mescroll.endSuccess(curPageData.length);

          //设置列表数据
          this.dataList = this.dataList.concat(curPageData);
        })
        .catch(() => {
          this.mescroll.endErr();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.video-hot-wrap {
  background-color: $uni-bg-color;
  .searchTag {
    margin: 0px 24rpx;
    padding: 0px 12rpx 52rpx;
    overflow: scroll hidden;
    text-wrap: nowrap;
    font-size: $uni-font-size-base;
    color: $uni-text-color-placeholder;
    .searchTagItem {
      margin: 0 10rpx;
    }
  }
}
</style>
