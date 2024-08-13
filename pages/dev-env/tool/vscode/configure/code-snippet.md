### 生成代码片段
可使用 [https://snippet-generator.app/](https://snippet-generator.app/) 网站快速生成
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408131039666.png)
### 配置用户代码片段
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408131039667.png)
> window 快捷键  Ctrl + shift + p
> mac 快捷键 command + shift + p

![image.png](https://cdn.dml.us.kg/docs/2024/png/202408131039668.png)
### 修改 vue.json文件
在搜索框中 输入 vue.json ,  把下面模版代码 添加到这个文件即可。
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408131039669.png)
> 以修改vue为例，此处给出一个示例文件

```json
{
	"Vue2+js": {
		"prefix": "vue2js",
		"body": [
			"<template>",
			"  <div></div>",
			"</template>",
			"",
			"<script>",
			"export default {",
			"  name: '',",
			"  components: {},",
			"  props: {},",
			"  provide: function(){",
			"    return {};",
			"  },",
			"  data(){",
			"    return {};",
			"  },",
			"  computed: {},",
			"  watch: {},",
			"  created(){},",
			"  mounted() {},",
			"  methods: {},",
			"}",
			"</script>",
			"",
			"<style lang='less' scoped>",
			"</style>"
		],
		"description": "vue2+js"
	},
	"Vue2+ts": {
		"prefix": "vue2ts",
		"body": [
			"<template>",
			"  <div></div>",
			"</template>",
			"",
			"<script lang=\"ts\">",
			"  import { Component, Vue, Prop, Watch, Inject } from 'vue-property-decorator';",
			"  import { State, namespace, Action } from 'vuex-class';",
			"  import {} from 'lodash';",
			"  @Component({",
			"    name: 'Demo',",
			"    components: {",
			"    }",
			"  })",
			"  export default class Demo extends Vue {",
			"    /*** vuex ***/",
			"    /*** Prop ***/",
			"    /*** data ***/",
			"    /*** computed ***/",
			"    /*** watch ***/",
			"    /*** life cycle ***/",
			"    created() { }",
			"    mounted() { }",
			"    /*** methods ***/",
			"    /**",
			"     * @desc 初始化数据",
			"     * @author ",
			"     * @param {Object} data 参数",
			"     * @returns   {null}    [没有返回]",
			"     */",
			"    initData() {}",
			"  }",
			"",
			"</script>",
			"",
			"<style scoped lang=\"less\"></style>"
		],
		"description": "Vue2+ts"
	},
	"vue-template": {
	"prefix": "vue",
	"body": [
		"<script lang=\"ts\" setup>",
		"",
		"</script>",
		"",
		"<template>",
		"",
		"</template>",
		"",
		"<style scoped>",
		"",
		"</style>",
		""
	],
	"description": "vue-template"
	}
}

```
### 使用
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408131039670.png)


