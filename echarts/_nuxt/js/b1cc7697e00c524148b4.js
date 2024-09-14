(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{355:function(e,t,n){"use strict";n.r(t),t.default="# Area Chart\n\nThe area chart fills the space between the line and axis with the background color, to express the data by the size of the area. Compared with the normal line chart, the area chart has more intuitive visual effects. It is especially suitable for the scenario with a few series.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 23, 19],\n      type: 'line',\n      areaStyle: {}\n    },\n    {\n      data: [25, 14, 23, 35, 10],\n      type: 'line',\n      areaStyle: {\n        color: '#ff0',\n        opacity: 0.5\n      }\n    }\n  ]\n};\n```\n\nIf you want to change the area style of the line chart, try to use [`areaStyle`](${optionPath}series-line.areaStyle). Set `'areaStyle'` to `{}` to use the default type: use the color of series to fill the area in translucent. If you want to change the style, try to override the configuration items in `'areaStyle'`. For example, the color of the second series was changed to yellow with 50% opacity.\n"}}]);