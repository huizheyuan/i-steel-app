// 枚举定义

export default {
  theme: {
    dark: "dark",
    light: "light",
  },
  SUPERVISE_STATUS: {
    全部: -1,
    待处理: 1,
    处理中: 2,
    已完成: 3,
    已验收: 4,
    properties: [
      { label: "全部", value: -1 },
      { label: "待处理", value: 1 },
      { label: "处理中", value: 2 },
      { label: "已完成", value: 3 },
      { label: "已验收", value: 4 },
    ],
  },
};
