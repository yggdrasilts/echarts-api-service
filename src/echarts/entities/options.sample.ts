import { EChartOption } from 'echarts';

/**
 * Constant to be use as SWAGGER input body sample.
 */
export const API_ECHART_OPTIONS_SAMPLE: EChartOption = {
  title: {
    text: 'Sample',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Email Marketing', 'Affiliate Advertising', 'Video advertising', 'Direct interview', 'Search engine'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Email Marketing',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Affiliate Advertising',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video advertising',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct interview',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search engine',
      type: 'line',
      stack: 'Total',
      label: {
        normal: {
          show: true,
          position: 'top',
        },
      },
      areaStyle: {},
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};
