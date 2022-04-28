<template>
    <div>
        <div class="admin-container">
            <!-- 头部 -->
            <div class="admin-header">舔狗的艺术 - 内容管理</div>
            <!-- 主体 -->
            <div class="admin-table">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="createdate" label="日期" width="180"></el-table-column>
                    <el-table-column prop="content" label="内容" width="1300"></el-table-column>
                    <el-table-column prop="ipaddress" label="IP地址" width="140"></el-table-column>
                    <el-table-column label="审核">
                        <template #default="scope">
                            <el-button @click="handleClick(scope.row)" type="success" size="small">通过</el-button>
                            <el-button type="danger" size="small">拒绝</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 底部 -->
            <div>
                
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref, getCurrentInstance} from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup(){
        const ctx = getCurrentInstance()?.appContext.config.globalProperties;
        const axios = ctx.$axios;
        const router = useRouter();
        const tableData = ref();

        const getWords = () =>{
            axios.post("/admin/getWords",{
                type: 1
            }).then(res => {
                if(res.data.code == -1){
                    router.push("/login");
                }else{
                    tableData.value = res.data;
                }
            }).catch(err => {
                console.log(err);
            })
        }

        onMounted(() => {
            getWords();
        })

        return {
            tableData
        }
    }
}
</script>