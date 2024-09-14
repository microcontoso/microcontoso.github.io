(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{313:function(e,n,t){"use strict";t.r(n),n.default="# What's New in Apache ECharts 5.2.0\n\n## Universal Transition\n\nNatural and smooth transition animations have been an important feature in Apache ECharts. By avoiding abrupt changes from data update, it not only improves the visual effect, but also provides the possibility to express the association and evolution of data. Therefore, in 5.2.0, we have further enhanced this animation capability. Next, we will see how this **Universal Transition** adds expressiveness and narrative power to the chart.\n\nIn previous versions, transition animations had certain limitations: they could only be used for the position, size of the same shape, and they could only work on the same type of series. For example, the following example reflects the change in data percent through the change in sector shape in a pie chart.\n\n```js live {layout: 'lr'}\nfunction makeRandomData() {\n  return [\n    {\n      value: Math.random(),\n      name: 'A'\n    },\n    {\n      value: Math.random(),\n      name: 'B'\n    },\n    {\n      value: Math.random(),\n      name: 'C'\n    }\n  ];\n}\noption = {\n  series: [\n    {\n      type: 'pie',\n      radius: [0, '50%'],\n      data: makeRandomData()\n    }\n  ]\n};\n\nsetInterval(() => {\n  myChart.setOption({\n    series: {\n      data: makeRandomData()\n    }\n  });\n}, 2000);\n```\n\nAnd starting with 5.2.0, we introduced universal transition, a more powerful animation feature. With that, transitions are no longer limited to between series of the same type. Now, we can use this cross-series morphing to animate between any type of series and any type of shapes.\n\nHow cool would this be? Let's have a look!\n\n### Morphing transition across series\n\nWith `universalTransition: true` set to enable universion transition feature, switching from pie charts to bar charts, or from bar charts to scatter charts, or even between more complex charts like Sunburst and Treemap, can be morphed naturally.\n\nAs follows, switching between a pie chart and a bar chart.\n\n```js live {layout: 'bt'}\nconst dataset = {\n  dimensions: ['name', 'score'],\n  source: [\n    ['Hannah Krause', 314],\n    ['Zhao Qian', 351],\n    ['Jasmin Krause ', 287],\n    ['Li Lei', 219],\n    ['Karle Neumann', 253],\n    ['Mia Neumann', 165],\n    ['Böhm Fuchs', 318],\n    ['Han Meimei', 366]\n  ]\n};\nconst pieOption = {\n  dataset: [dataset],\n  series: [\n    {\n      type: 'pie',\n      // associate the series to be animated by id\n      id: 'Score',\n      radius: [0, '50%'],\n      universalTransition: true,\n      animationDurationUpdate: 1000\n    }\n  ]\n};\nconst barOption = {\n  dataset: [dataset],\n  xAxis: {\n    type: 'category'\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      // associate the series to be animated by id\n      id: 'Score',\n      // Each data will have a different color\n      colorBy: 'data',\n      encode: { x: 'name', y: 'score' },\n      universalTransition: true,\n      animationDurationUpdate: 1000\n    }\n  ]\n};\n\noption = barOption;\n\nsetInterval(() => {\n  option = option === pieOption ? barOption : pieOption;\n  // Use the notMerge form to remove the axes\n  myChart.setOption(option, true);\n}, 2000);\n```\n\nMore transitions between common charts.\n\n![](images/5-2-0/universal-transition.gif)\n\nSuch transitions are no longer limited to just the basic line, bar, and pie charts, but also between bars and maps:\n\n![](images/5-2-0/universal-transition-2.gif)\n\nor between Sunburst and Treemap, or even between very flexible custom series can be transitions.\n\n![](images/5-2-0/universal-transition-3.gif)\n\n> Note that you need to configure the series ids to ensure that there is a one-to-one correspondence between the series that need to be animated for the transition.\n\n> Minimal bundle needs to import this feature manually.\n>\n> ```ts\n> import { UniversalTransition } from 'echarts/features';\n> echarts.use([UniversalTransition]);\n> ```\n\n### Data split and merge animations\n\nIn addition to the common update of data values, sometimes we also encounter data aggregation, drill-down and other updates after interactions, when we can not directly apply one-to-one transitions, but need to use more animation effects like splitting and merging to express the transformation of data.\n\nIn order to be able to express the possible many-to-many connections between data, in 5.2.0 we introduced a new concept `groupId`. We can set the group to the whole series via [series.dataGroupId](${optionPath}series-bar.dataGroupId), or more fine-grained by [series.data.groupId](${optionPath}series-bar.dataGroupId) to set the group to which each data belongs. It's even easier if you use a `dataset` to manage the data, you can use `encode.itemGroupId` to specify a dimension encoded as `groupId`.\n\nFor example, if we want to implement a drill-down animation for a bar chart, we can set the entire series of data after the drill-down to the same `groupId`, which then corresponds to the data before the drill-down\n\n```js live {layout: 'lr'}\noption = {\n  xAxis: {\n    data: ['Animals', 'Fruits', 'Cars']\n  },\n  yAxis: {},\n  dataGroupId: '',\n  animationDurationUpdate: 500,\n  series: {\n    type: 'bar',\n    id: 'sales',\n    data: [\n      {\n        value: 5,\n        groupId: 'animals'\n      },\n      {\n        value: 2,\n        groupId: 'fruits'\n      },\n      {\n        value: 4,\n        groupId: 'cars'\n      }\n    ],\n    universalTransition: {\n      enabled: true,\n      divideShape: 'clone'\n    }\n  }\n};\n\nconst drilldownData = [\n  {\n    dataGroupId: 'animals',\n    data: [\n      ['Cats', 4],\n      ['Dogs', 2],\n      ['Cows', 1],\n      ['Sheep', 2],\n      ['Pigs', 1],\n      ['Cows', 1],\n      ['Sheep', 2],\n      ['Pigs', 1]\n    ]\n  },\n  {\n    dataGroupId: 'fruits',\n    data: [\n      ['Apples', 4],\n      ['Oranges', 2],\n      ['Oranges', 2]\n    ]\n  },\n  {\n    dataGroupId: 'cars',\n    data: [\n      ['Toyota', 4],\n      ['Opel', 2],\n      ['Volkswagen', 2],\n      ['Volkswagen', 2]\n    ]\n  }\n];\n\nmyChart.on('click', event => {\n  if (event.data) {\n    const subData = drilldownData.find(data => {\n      return data.dataGroupId === event.data.groupId;\n    });\n    if (!subData) {\n      return;\n    }\n    myChart.setOption({\n      xAxis: {\n        data: subData.data.map(item => {\n          return item[0];\n        })\n      },\n      series: {\n        type: 'bar',\n        id: 'sales',\n        dataGroupId: subData.dataGroupId,\n        data: subData.data.map(item => {\n          return item[1];\n        }),\n        universalTransition: {\n          enabled: true,\n          divideShape: 'clone'\n        }\n      },\n      graphic: [\n        {\n          type: 'text',\n          left: 50,\n          top: 20,\n          style: {\n            text: 'Back',\n            fontSize: 18\n          },\n          onclick: function() {\n            myChart.setOption(option, true);\n          }\n        }\n      ]\n    });\n  }\n});\n```\n\nWith `groupId`, we can also implement richer aggregation and drill-down animations.\n\nAggregation of data.\n\n![](images/5-2-0/group-transition.gif)\n\nDrilling down of a single series into two series:\n\n![](images/5-2-0/group-transition-2.gif)\n\nUniversal transition take the ability to express the relationships and evolution of data to a new level, giving wings to your visualization creation inspiration.\n\nAt this point, we know you're already eager to try it out. But don't worry, there are even more new features in 5.2.0 that are worth checking out.\n\n## Color palette picking strategy\n\nIn the above universal transition example, you may have noticed that we use a `colorBy` configuration that was not available in the previous version. This configuration is also a new feature we added in this version to configure different granularity of color palette color picking for the series. This configuration currently supports two strategies.\n\n- `'series'` assigns the colors in the palette by series, so that all data in the same series are in the same color.\n- `'data'` assigns colors in the palette according to data items, with each data item using a different color.\n\nPreviously, we fixed this strategy for each type of series, for example, the bar chart was fixed with `'series'` and the pie chart was fixed with `'data'`.\n\nAnd now with this new feature, we can assign a different color to each data item in the bar chart.\n\n```js live {layout: 'lr'}\noption = {\n  xAxis: {\n    type: 'category',\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {\n    type: 'value'\n  },\n  series: [\n    {\n      data: [120, 200, 150, 80, 70, 110, 130],\n      type: 'bar',\n      colorBy: 'data'\n    }\n  ]\n};\n```\n\nOr use one color uniformly in the pie chart.\n\n```js live {layout: 'lr'}\noption = {\n  series: {\n    type: 'pie',\n    colorBy: 'series',\n    radius: [0, '50%'],\n    itemStyle: {\n      borderColor: '#fff',\n      borderWidth: 1\n    },\n    data: [\n      {\n        value: 335,\n        name: 'Direct Visit'\n      },\n      {\n        value: 234,\n        name: 'Union Ad'\n      },\n      {\n        value: 1548,\n        name: 'Search Engine'\n      }\n    ]\n  }\n};\n```\n\nThis configuration allows us to avoid the trouble of finding palette colors and setting them one by one, and may provide convenience in specific scenarios. We will further enhance this configuration later to provide more strategies.\n\n## Labels for polar bar charts\n\nIn this version we have implemented labels for bar charts on polar coordinates and support rich label positioning configurations. The following is a progress chart with labels displayed at the start points.\n\n```js live {layout: 'lr'}\noption = {\n  angleAxis: {\n    show: false,\n    max: 10\n  },\n  radiusAxis: {\n    show: false,\n    type: 'category',\n    data: ['AAA', 'BBB', 'CCC', 'DDD']\n  },\n  polar: {},\n  series: [\n    {\n      type: 'bar',\n      data: [3, 4, 5, 6],\n      colorBy: 'data',\n      roundCap: true,\n      label: {\n        show: true,\n        // Try changing it to 'insideStart'\n        position: 'start',\n        formatter: '{b}'\n      },\n      coordinateSystem: 'polar'\n    }\n  ]\n};\n```\n\nMore configurations for label positions.\n\n![](images/5-2-0/polar-bar-label.jpg)\n\nThis flexible label position configuration item greatly enriches the expressiveness of the polar bar chart, allowing the text to clearly match the corresponding data.\n\n## Pie chart style for empty data\n\nIn the previous version, if there was no data in the pie chart, the screen might be completely blank. Because there was no visual element, users may wonder if there was a bug.\n\nTo solve this problem, in this version we will default to display a gray placeholder circle when there is no data to prevent the screen from being completely blank. We can configure the style of this placeholder circle with `emptyCircleStyle`.\n\n```js live {layout: 'lr'}\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [],\n      // showEmptyCircle: false,\n      emptyCircleStyle: {\n        // change the style to empty circle\n        color: 'transparent',\n        borderColor: '#ddd',\n        borderWidth: 1\n      }\n    }\n  ]\n};\n```\n\nIf you don't want to show this gray circle, you can also set `showEmptyCircle: false` to turn it off.\n\n## Performance enhancements for high-dimensional data\n\nWe have introduced [dataset](${optionPath}dataset) since 4.0 to manage chart data. However, in some extreme scenarios with particularly high-dimensional (>100) data, we may encounter some dramatic performance degradation, such as the following scenario of visualizing a thousand-dimensional data through a thousand series ([#11907](https://github.com/apache/echarts/issues/11907)), which may even may lead to getting stuck.\n\n```js\nconst indices = Array.from(Array(1000), (_, i) => {\n  return `index${i}`;\n});\nconst option = {\n  xAxis: { type: 'category' },\n  yAxis: {},\n  dataset: {\n    // dimension: ['date', . . indices],\n    source: Array.from(Array(10), (_, i) => {\n      return {\n        date: i,\n        ... .indices.reduce((item, next) => {\n          item[next] = Math.random() * 100;\n          return item;\n        }, {})\n      };\n    })\n  },\n  series: indices.map(index => {\n    return { type: 'line', name: index };\n  })\n};\n```\n\nThe reason for this performance problem is that we process the high-dimensional dataset at the bottom of each series as needed and save a copy of the processed data and the meta information about the dimensions of the data. This meant that the `1000 x 1000` dimensions had to be processed and saved in the example, which put a huge pressure on memory and garbage collection, resulting in a dramatic performance drop for high dimensions.\n\nIn the new version we have optimized this problem so that all series share the dataset storage as much as possible (whether or not they do depends on how the series uses the data).\nThis optimization ensure that memory does not explode as the dataset dimensions and series grow, significantly improving initialization performance in this extreme scenario. The rendering time for the example just described has also been reduced to an acceptable 300 ms or less.\n\nIt is not just this high-dimensional scenario that benefits from this optimization. When using a dataset with large amount of data, multiple series only process the data once because of data sharing, so it can also bring significant performance gains.\n\n## Type optimization for custom series\n\nCustom series provide a very flexible way to create series graphs. Compared to other series, the learning curve for custom series can be a bit steep. Therefore, in this release, we have further optimized the type of the core method `renderItem` in the custom series by making more precise inferences about the types of the parameters and return values of `renderItem`, so that it is possible to infer which properties of the elements can be set based on the type returned:\n\n```ts\nseries = {\n  type: 'custom',\n  renderItem(params) {\n    return {\n      type: 'group',\n      // The group type uses children to store children of other types\n      children: [\n        {\n          type: 'circle',\n          // circle has the following configurable shape attributes\n          shape: { r: 10, cx: 0, cy: 0 },\n          // Configurable styles\n          style: { fill: 'red' }\n        },\n        {\n          type: 'rect',\n          // rect has the following configurable shape properties\n          shape: { x: 0, y: 0, width: 100, height: 100 }\n        },\n        {\n          type: 'path',\n          // Custom path shapes\n          shape: { d: '...' }\n        }\n      ]\n    };\n  }\n};\n```\n\n## Summary\n\nIf you're interested in some of the features and optimizations in 5.2.0, you may want to update to the latest version of Apache ECharts and try it out for yourself.\n\nIf you're interested in what's next for Apache ECharts, you can also follow our development plans at [GitHub Milestone](https://github.com/apache/echarts/milestones). Feel free to join us as a contributor (learn more at [Wiki](https://github.com/apache/echarts/wiki)).\n\n## Full Changelog\n\nView the [Changelog](${mainSitePath}/changelog.html#v5-2-0)\n"}}]);