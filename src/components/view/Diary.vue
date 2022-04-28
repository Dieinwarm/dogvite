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
			<el-button type="success" size="default" @click="addDiary" round>投稿</el-button>
		</div>
	</div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { diarysGet } from '@api/diarysApi'
    import axios from 'axios'
    const citystr = ref("");
    const content = ref("");
    const weatherstr = ref("");

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
    const addDiary = () => {

    }

    onMounted(() =>{
        getweather();
        getDiary();
    })
</script>