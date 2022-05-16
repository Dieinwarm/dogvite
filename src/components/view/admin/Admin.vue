<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="admin-header">舔狗的艺术 - 内容管理</div>
            </el-header>
            <el-main>
                <el-table :data="tableData" border stripe :table-layout="tableLayout">
                    <el-table-column prop="createdate" label="日期" width="180"></el-table-column>
                    <el-table-column prop="content" label="内容"></el-table-column>
                    <el-table-column prop="ipaddress" label="IP地址" width="140"></el-table-column>
                    <el-table-column label="审核" fixed="right" width="150">
                        <template #default="scope">
                            <el-button @click="passVerification(scope.row.id, 'yes')" type="success" size="small">通过</el-button>
                            <el-button @click="passVerification(scope.row.id, 'no')" type="danger" size="small">拒绝</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { wordsList, changeState } from '@adminApi/homeApi';
    import { ElMessage, ElSelect } from 'element-plus';
    const tableData = ref();
    const tableLayout = ref('fixed');

    const getWords = () => {
        wordsList({
            type: 1
        }).then(res => {
            tableData.value = res;
        })
    }

    const passVerification = (id, type) => {
        changeState({
            id: id,
            type: type
        }).then(res => {
            if(res == "success"){
                ElMessage.success('操作成功');
                getWords();
            }else{
                ElMessage.error("操作失败");
            }
        })
    }

    onMounted(() => {
        getWords();
    })
</script>