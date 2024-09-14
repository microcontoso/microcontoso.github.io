(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{311:function(n,e,t){"use strict";t.r(e),e.default="# Using ECharts as an NPM Package\n\nThere are two approaches to using ECharts as a package. The simplest approach is to make all functionality immediately available by importing from `echarts`. However, it is encouraged to substantially decrease bundle size by only importing as necessary such as `echarts/core` and `echarts/charts`.\n\n## Install ECharts via NPM\n\nYou can install ECharts via npm using the following command\n\n```shell\nnpm install echarts\n```\n\n## Import All ECharts Functionality\n\nTo include all of ECharts, we simply need to import `echarts`.\n\n```js\nimport * as echarts from 'echarts';\n\n// Create the echarts instance\nvar myChart = echarts.init(document.getElementById('main'));\n\n// Draw the chart\nmyChart.setOption({\n  title: {\n    text: 'ECharts Getting Started Example'\n  },\n  tooltip: {},\n  xAxis: {\n    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']\n  },\n  yAxis: {},\n  series: [\n    {\n      name: 'sales',\n      type: 'bar',\n      data: [5, 20, 36, 10, 10, 20]\n    }\n  ]\n});\n```\n\n## Shrinking Bundle Size\n\nThe above code will import all the charts and components in ECharts, but if you don't want to bring in all the components, you can use the tree-shakeable interface provided by ECharts to bundle the required components and get a minimal bundle.\n\n```js\n// Import the echarts core module, which provides the necessary interfaces for using echarts.\nimport * as echarts from 'echarts/core';\n\n// Import bar charts, all suffixed with Chart\nimport { BarChart } from 'echarts/charts';\n\n// Import the title, tooltip, rectangular coordinate system, dataset and transform components\nimport {\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent\n} from 'echarts/components';\n\n// Features like Universal Transition and Label Layout\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\n\n// Import the Canvas renderer\n// Note that including the CanvasRenderer or SVGRenderer is a required step\nimport { CanvasRenderer } from 'echarts/renderers';\n\n// Register the required components\necharts.use([\n  BarChart,\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent,\n  LabelLayout,\n  UniversalTransition,\n  CanvasRenderer\n]);\n\n// The chart is initialized and configured in the same manner as before\nvar myChart = echarts.init(document.getElementById('main'));\nmyChart.setOption({\n  // ...\n});\n```\n\n> Note that in order to keep the size of the package to a minimum, ECharts does not provide any renderer in the tree-shakeable interface, so you need to choose to import `CanvasRenderer` or `SVGRenderer` as the renderer. The advantage of this is that if you only need to use the SVG rendering mode, the bundle will not include the `CanvasRenderer` module, which is not needed.\n\nThe \"Full Code\" tab on our sample editor page provides a very convenient way to generate a tree-shakable code. It will generate tree-shakable code based on the current option dynamically to use it directly in your project.\n\n## Creating an Option Type in TypeScript\n\nFor developers who are using TypeScript to develop ECharts, type interface is provided to create a minimal `EChartsOption` type. This type will be stricter than the default one provided because it will know exactly what components are being used. This can help you check for missing components or charts more effectively.\n\n```ts\nimport * as echarts from 'echarts/core';\nimport {\n  BarChart,\n  LineChart,\n} from 'echarts/charts';\nimport {\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  // Dataset\n  DatasetComponent,\n  // Built-in transform (filter, sort)\n  TransformComponent\n} from 'echarts/components';\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\nimport { CanvasRenderer } from 'echarts/renderers';\nimport type {\n  // The series option types are defined with the SeriesOption suffix\n  BarSeriesOption, \n  LineSeriesOption,\n} from 'echarts/charts';\nimport type {\n  // The component option types are defined with the ComponentOption suffix\n  TitleComponentOption, \n  TooltipComponentOption,\n  GridComponentOption,\n  DatasetComponentOption\n} from 'echarts/components';\nimport type { \n  ComposeOption, \n} from 'echarts/core';\n\n// Create an Option type with only the required components and charts via ComposeOption\ntype ECOption = ComposeOption<\n  | BarSeriesOption\n  | LineSeriesOption\n  | TitleComponentOption\n  | TooltipComponentOption\n  | GridComponentOption\n  | DatasetComponentOption\n>;\n\n// Register the required components\necharts.use([\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent,\n  BarChart,\n  LineChart,\n  LabelLayout,\n  UniversalTransition,\n  CanvasRenderer\n]);\n\nconst option: ECOption = {\n  // ...\n};\n```\n"}}]);