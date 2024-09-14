(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{426:function(n,e,o){"use strict";o.r(e),e.default="# 南丁格尔图（玫瑰图）\n\n南丁格尔图又称玫瑰图，通常用弧度相同但半径不同的扇形表示各个类目。\n\nECharts 可以通过将饼图的 [`series.roseType`](${optionPath}series-pie.roseType) 值设为 `'area'` 实现南丁格尔图，其他配置项和饼图是相同的。\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 100,\n          name: 'A'\n        },\n        {\n          value: 200,\n          name: 'B'\n        },\n        {\n          value: 300,\n          name: 'C'\n        },\n        {\n          value: 400,\n          name: 'D'\n        },\n        {\n          value: 500,\n          name: 'E'\n        }\n      ],\n      roseType: 'area'\n    }\n  ]\n};\n```\n"}}]);