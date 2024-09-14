(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{319:function(e,t,n){"use strict";n.r(t),t.default="# Web Accessibility\n\n[WAI-ARIA](https://www.w3.org/WAI/intro/aria), the Accessible Rich Internet Applications Suite developed by W3C, defines a way to make Web content and Web applications more accessible to people with disabilities.\n\nECharts 4.0 complied with the specification, supports generating a description based on the chart configuration intelligently to allow people with visual disabilities to understand the content of the chart with the help of reading devices. Apache ECharts 5 supports decal patterns that allow chart data to be distinguished by decal patterns in addition to color providing a better experience to those with color-blindness. \n\nThis accessibility function is turned off by default. It can be turned on by setting the value of [aria.show](${optionPath}aria.show) to `true`.\n\n## Chart Labels\n\nAfter setting [aria.show](${optionPath}aria.show) to `true`, ECharts will automatically generate a description of the chart according to the title, chart, data, etc. Users can also set description manually through the configuration object.\n\nExample configuration object:\n\n```js\noption = {\n  aria: {\n    show: true\n  },\n  title: {\n    text: 'Referrer of a User',\n    x: 'center'\n  },\n  series: [\n    {\n      name: 'Referrer',\n      type: 'pie',\n      data: [\n        { value: 335, name: 'Direct Visit' },\n        { value: 310, name: 'Email Marketing' },\n        { value: 234, name: 'Union Ad' },\n        { value: 135, name: 'Video Ad' },\n        { value: 1548, name: 'Search Engine' }\n      ]\n    }\n  ]\n};\n```\n\n<md-example src=\"doc-example/aria-pie\"></md-example>\n\nEnabling aria with add an `aria-label` attribute on the Chart HTML. Screen readers use this attribute to describe the contect; this chart would have the following description:\n\n```\nThis is a chart about \"Referrer of a User\" with type Pie chart named Referrer. The data is as follows: the data of Direct Visit is 335,the data of Mail Marketing is 310,the data of Union Ad is 234,the data of Video Ad is 135,the data of Search Engine is 1548.\n```\n\nThe configurated language will be used to build the description.\n\n### Customizing Title\n\nThe aria-label begins with the a general description. There are two templates, [aria.general.withTitle](${optionPath}aria.general.withTitle) to be used when [title.text](${optionPath}title.text) exists and [aria.general.withoutTitle](${optionPath}aria.general.withoutTitle) for when `title.text` is not defined.\n\nIn the `withTitle` template, the string `{title}` is replace with [title.text](${optionPath}title.text). The template `This is a chart named {title}` with a title of `Referrer of a User` would yield `This is a chart named Referrer of a User`. \n\n\n### Customizing Description\n\nThe description of the series and data are added after the title. For some charts, the default item description cannot show all the information on the chart. In the following scatter chart the description generated by default includes all the items but it is not accessible due to the quantity of items making the list too long to understand.\n\nUnder this circumstance, the description should be set with the [aria.description](${optionPath}aria.description) property.\n\n### In-Depth Customization\n\nEvery part of the aria-label can include template variables to be replaced by the actual value in the chart. More information on the process of generating a description is available in the API documentation: [aria.label](${optionPath}aria.label).\n\n## Decal Patterns\n\nIn addition, Apache ECharts 5 adds support for decal patterns as a secondary representation of color to further differentiate data. With `aria.enabled` set to `true` and `aria.decal.show` set to `true`, the default decal style will be applied.\n\n<md-example src=\"doc-example/aria-decal-simple\"></md-example>\n\nIf you need to customize the decal pattern, you can use [aria.decal.decals](${optionPath}aria.decal.decals) to configure a flexible decal pattern.\n\nPlease refer to [ARIA option](${optionPath}aria.decal) for more detail.\n"}}]);