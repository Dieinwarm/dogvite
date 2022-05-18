<template>
	<div>
		<div class="diary-content-box">
			<el-card class="box-card">
				<div class="diary-content" v-cloak>
					<div class="diary-text">
						<p>{{ citystr }} <br> {{ weatherstr }}</p>
						<p>{{ content }}</p>
					</div>
				</div>
			</el-card>
		</div>
		<div class="buttons">
			<el-button type="primary" size="default" @click="getDiary" round>再来一份</el-button>
			<el-button type="success" size="default" @click="sendDiaryDialog = true" round>投稿</el-button>
		</div>
        <el-dialog title="投稿 舔狗日记" v-model="sendDiaryDialog" custom-class="send_dialog">
            <p style="color: #808B96;">你可以投稿你当舔狗时记录下的日记。为了防止可能混入令人不适的内容，
                你的投稿会进行<el-link type="primary" href="https://ai.baidu.com/tech/textcensoring" target="_blank">文本内容审核</el-link>，通过方予展示，
                如果被判断内容疑似有 暴恐违禁、政治敏感、恶意推广、低俗辱骂、低质灌水 等倾向，
                则会拒绝这篇日记进入内容库。</p>
            <el-form :model="diaryForm" ref="diaryForms" :rules="rules">
                <el-form-item prop="diary">
                    <el-input type="textarea" :rows="9" placeholder="请输入内容" v-model="diaryForm.diary"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="sendDiaryDialog = false">取消</el-button>
                    <el-button type="primary" @click="sendDiary">确定</el-button>
                </span>
            </template>
        </el-dialog>
	</div>
</template>

<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { diarysGet, addDiary } from '@api/diarysApi'
    import { ElMessage } from 'element-plus';
    import axios from 'axios'
    const citystr = ref("");
    const content = ref("");
    const weatherstr = ref("");
    const sendDiaryDialog = ref(false);
    const diaryForms = ref();
    const diaryForm = reactive({
        diary: ""
    });
    const rules = reactive({
        diary: [
            {required: true, message: "你的日记什么都不写吗？", trigger: 'blur'},
            {min: 15, max: 160, message: '你的日记长度不符合字数限制(15-160字)', trigger: 'blur'}
        ]
    })

    const getweather = () => {
        let date = new Date();
        let year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();
        let city = localStorage.getItem('city') || '';
        let cloud = localStorage.getItem('cloud') || '';
        let cond = localStorage.getItem('cond') || '';
        let dateStart = new Date(localStorage.getItem('date') || new Date());
        let dayDiff = date.getDate() - dateStart.getDate();
        let weatherKeys = [
            'fbb7fed63979495f88fc1ddc7296f497', 
            'f3488e987bce466d8ae6b523becf278f',
            '95cf38cd40b84df9beae340c610e8550', 
            '3cad9669ecba42c39ebfd73cdb566329', 
            '6ec2f3eef9bc448ba8a72e815dd86f12'
        ];
        if (city == '' || dayDiff >= 1) {
            let weather = {};
            for (let i = 0; i < weatherKeys.length; i++) {
                axios.get('https://free-api.heweather.net/s6/weather/now?location=auto_ip&key=' + weatherKeys[i]).then(res => {
                    weather = res.data.HeWeather6[0];
                    city = weather.basic.parent_city || '';
                    cloud = weather.now.fl || '';
                    cond = weather.now.cond_txt || '';
                    localStorage.setItem('city', city);
                    localStorage.setItem('cloud', cloud);
                    localStorage.setItem('cond', cond);
                    localStorage.setItem('date', new Date());
                }).catch(err => {
                    console.log(err);
                })
                if (weather.status == 'ok') {
                    break;
                }
            }
        }
        citystr.value = year + '年' + month + '月' + day + '日 ' + city;
        weatherstr.value =  cond + ' / ' + cloud + '℃';
    }
    const getDiary = () => {
        diarysGet().then(res => {
            content.value = res.content;
        })
    }
    const sendDiary = () => {
        //ElMessage.error('Not finished, coming soon ~');
        diaryForms.value.validate((valid) => {
            if(valid){
                addDiary(diaryForm).then(res => {
                    ElMessage.success('恭喜你提交成功，审核后即可显示');
                    diaryForms.value.resetFields();
                    sendDiaryDialog.value = false;
                });
            }else{
                return false;
            }
        })
    }

    onMounted(() =>{
        getweather();
        getDiary();
    })
</script>