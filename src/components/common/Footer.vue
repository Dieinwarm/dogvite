<template>
    <div>
        <div class="footer">
            <div style="line-height:30px;">
                <el-button type="text" class="footer-link" @click="apiDialog = true">API</el-button>
                <el-popover placement="top-start" title="你懂的，嘿嘿" :width="200" trigger="hover" content="暗示一个 Star" >
                    <template #reference>
                        <el-link type="primary" class="footer-link" :underline="false" href="https://github.com/Dieinwarm/dogvite" target="_blank" >
                            Github&nbsp;<el-icon><star /></el-icon>
                        </el-link>
                    </template>
                </el-popover>
                <el-button type="text" class="footer-link" @click="aboutDialog = true">关于</el-button>
                <el-button type="text" class="footer-link" @click="updateDialog = true">更新日志</el-button>
            </div>
            <div class="footer-text">-</div>
            <div class="footer-text" style="color: transparent;">I feeling like I'm falling.</div>
        </div>
        <el-dialog title="API" v-model="apiDialog" custom-class="tip_dialog">
            <p>公共api正在开发中，完善后更新api列表</p>
            <p>目前采用的网络api，它们分别来自：</p>
            <p>https://heweather.net  提供了 舔狗日记的天气、城市 接口</p>
            <br />
            <p>对以上接口服务表示感谢</p>
        </el-dialog>
        <el-dialog title="关于" v-model="aboutDialog" custom-class="tip_dialog">
            <p>关于舔狗的艺术：做这个网站的初衷，是想 <del> <span style="color:#ABB2B9;">让大家在当舔狗的时候能够有范儿</span> </del> 让大家看看当舔狗的心酸，请大家多多关注舔狗这个群体，多给他们一点关爱</p>
            <p>如何联系你：@dieinwarm</p>
            <p>你是谁：大家好，我是<span class="textBlur" style="margin-right:10px;">傻逼</span>  Nobody cares.</p>
            <hr />
            <h3>Donate:</h3>
            <p>如果你认为这个网站对你有所帮助或者其他什么奇奇怪怪的理由，你可以用你的大手机扫一扫下面的神秘二维码，<del>你的赞赏将会用于服务器的购买和维护</del> 你就可以请我喝一杯咖啡。你可以在赞赏留言中留下姓名或称呼，我将不定期更新 <el-link type="primary">赞赏名单</el-link></p>
            <div style="text-align: center;"><img src="@/assets/img/wechat.jpg" style="width:60%;" /></div>
        </el-dialog>
        <el-dialog title="更新记录" v-model="updateDialog" custom-class="tip_dialog">
            <h3>2022.04.28</h3>
            <p>时隔一年，前端再次重构，采用 element-Plus 2.x 版本，打包工具从 vue-cli 更换为 vite ，优化项目结构，去掉冗余代码</p>
            <p>重新整合 axios 实现请求前后拦截器，有利于后面开发后台管理的验证</p>
            <p>采用 element-Plus 的按需自动加载，不再手动引包</p>
            <p>更换成 ve3 的 &lt;script setup&gt; 语法糖用法，再也不用去写 setup() 函数和 return 一堆属性了</p>
            <h3>2021.04.02</h3>
            <p>重复点赞的限制</p>
            <p>投稿增加 AI 内容审核</p>
            <p>代码优化及一些忘了细节的更新</p>
            <h3>2021.01.02</h3>
            <p>前端用 Vue3 重构，采用新的组合api</p>
            <p>组件采用基于 Vue3 的 Element-plus</p>
            <p>学会一些新的技巧并改善了代码</p>
            <h3>2020.11.01</h3>
            <p>数据本地化，后端采用Thinkphp6</p>
            <p>后端仍在完善，完善后开源</p>
            <h3>2020.6.11</h3>
            <p>舔狗的艺术 上线，数据全部来自网络api</p>
            <p>前端开源到Github</p>
        </el-dialog>
    </div>
</template>

<script>
	import { ref } from 'vue';
	export default{
        name: "coustomFooter",
		setup(){
			const apiDialog = ref(false);
			const aboutDialog = ref(false);
			const updateDialog = ref(false);
			return {
				apiDialog,
				aboutDialog,
				updateDialog
			}
		}
	}
</script>