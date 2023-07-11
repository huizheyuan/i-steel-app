<template>
  <view class="home-search">
    <mescroll-body
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      :up="upOption"
      @up="upCallback"
    >
      <u-search
        v-model="curWord"
        :showAction="false"
        bgColor="#ffffff"
        borderColor="#c8c7cc"
        :searchIconSize="40"
        searchIconColor="#3c9cff"
        color="#333"
        placeholderColor="#808080"
        margin="30rpx"
        height="64"
        placeholder="请输入搜索关键词"
        @change="inputWord"
      ></u-search>
      <!-- <good-list :list="goods"></good-list> -->
    </mescroll-body>
  </view>
</template>

<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import { apiSearch } from "@/api/mock";

export default {
  mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
  data() {
    return {
      upOption: {
        // auto: false, //是否在初始化后,自动执行上拉回调callback; 默认true
        // page: {
        // 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
        // 	size: 10 // 每页数据的数量
        // }
        noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        empty: {
          tip: "~ 搜索无结果 ~", // 提示
        },
      },
      goods: [], // 数据列表
      curWord: "", //当前搜索关键词
    };
  },
  onLoad(value) {
    console.log(value);
  },
  methods: {
    // 输入监听
    inputWord(e) {
      // this.curWord = e.detail.value // 已使用v-model,无需再次赋值
      // 节流,避免输入过快多次请求
      this.searchTimer && clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.doSearch(this.curWord);
      }, 300);
    },
    // 搜索
    doSearch(word) {
      this.curWord = word;
      this.goods = []; // 先清空列表,显示加载进度
      this.mescroll.resetUpScroll();
    },
    /*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
    upCallback(page) {
      //联网加载数据
      apiSearch(page.num, page.size, this.curWord)
        .then((curPageData) => {
          //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          this.mescroll.endSuccess(curPageData.length);
          //如果是第一页需手动制空列表
          if (page.num == 1) this.goods = [];
          //追加新数据
          this.goods = this.goods.concat(curPageData);
        })
        .catch(() => {
          //联网失败, 结束加载
          this.mescroll.endErr();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-search {
  padding-top: var(--status-bar-height);
  height: 100%;
  background-color: $uni-bg-color;
  display: flex;
  flex-direction: column;
}
</style>
