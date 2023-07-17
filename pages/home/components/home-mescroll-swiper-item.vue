<template>
  <!-- 
	swiper中的transfrom会使fixed失效,此时用height="100%"固定高度; 
	swiper中无法触发mescroll-mixins.js的onPageScroll和onReachBottom方法,只能用mescroll-uni,不能用mescroll-body
	-->
  <!-- ref动态生成: 字节跳动小程序编辑器不支持一个页面存在相同的ref (如不考虑字节跳动小程序可固定值为 ref="mescrollRef") -->
  <mescroll-uni
    :ref="'mescrollRef' + i"
    @init="mescrollInit"
    height="100%"
    top="0"
    :down="downOption"
    @down="downCallback"
    :up="upOption"
    @up="upCallback"
    @emptyclick="emptyClick"
  >
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
    <home-recommend
      v-if="tabs[index].id === Variety_List.推荐"
      :index="index"
    ></home-recommend>
    <home-focus
      v-else-if="tabs[index].id === Variety_List.关注"
      :list="goods"
      :index="index"
    ></home-focus>
    <home-scrap-steel
      v-else-if="tabs[index].id === Variety_List.废钢"
      :index="index"
    ></home-scrap-steel>
  </mescroll-uni>
</template>

<script>
import { Variety_List } from "@/common/enums.js";
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollMoreItemMixin from "@/components/mescroll-uni/mixins/mescroll-more-item.js";
import ad1 from "@/static/img/temp/ad1.jpg";
import ad2 from "@/static/img/temp/ad2.png";
import HomeRecommend from "./swiper-item/home-recommend";
import HomeFocus from "./swiper-item/home-focus";
import HomeScrapSteel from "./swiper-item/home-scrap-steel";
import { apiSearch } from "@/api/mock";

export default {
  mixins: [MescrollMixin, MescrollMoreItemMixin],
  components: { HomeRecommend, HomeFocus, HomeScrapSteel },
  data() {
    return {
      Variety_List,
      downOption: {
        auto: false, // 不自动加载 (mixin已处理第一个tab触发downCallback)
      },
      upOption: {
        auto: false, // 不自动加载
        // page: {
        // 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
        // 	size: 10 // 每页数据的数量
        // },
        noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty: {
          tip: "暂无数据",
        },
      },
      adList: [
        {
          url: ad1,
          title: "3J58是一种弹性合金，弹性合金是精密合金的一类",
        },
        {
          url: ad2,
          title: "禄浩不锈钢：GH3536高温合金的性能及应用领域",
        },
      ],
      goods: [], //列表数据
    };
  },
  props: {
    i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
    index: {
      // 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
      type: Number,
      default() {
        return 0;
      },
    },
    tabs: {
      // 为了请求数据,演示用,可根据自己的项目判断是否要传
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    loadSwiper() {},
    /*下拉刷新的回调 */
    downCallback() {
      // 这里加载你想下拉刷新的数据, 比如刷新轮播数据
      this.loadSwiper();
      // 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
      this.mescroll.resetUpScroll();
    },
    /*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
    upCallback(page) {
      let keyword = this.tabs[this.i].name;
      apiSearch(page.num, page.size, keyword)
        .then((curPageData) => {
          this.mescroll.endSuccess(curPageData.length);
          if (page.num == 1) this.goods = [];
          this.goods = this.goods.concat(curPageData);
        })
        .catch(() => {
          this.mescroll.endErr();
        });
    },
    emptyClick() {
      //   uni.showToast({
      //     title: "点击了按钮",
      //   });
    },
  },
};
</script>
