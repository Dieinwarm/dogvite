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
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import { wordsList } from '@adminApi/homeApi';
    const tableData = ref();

    const getWords = () =>{
        wordsList({
            type: 1
        }).then(res => {
            tableData.value = res;
        })
    }

    onMounted(() => {
        getWords();
    })
</script>