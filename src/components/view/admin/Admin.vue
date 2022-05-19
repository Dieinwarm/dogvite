<template>
    <div class="common-layout">
        <el-container>
            <el-header height="5rem" style="padding:0px;">
                <div class="admin-header">舔狗的艺术 - 内容管理</div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-active="$route.path" router class="admin-menu" >
                        <el-menu-item index="/admin/words">
                            <el-icon><Lollipop /></el-icon>
                            <span>舔狗の语</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/diary">
                            <el-icon><document /></el-icon>
                            <span>舔狗日记</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { validLogin } from '@adminApi/homeApi';

    const router = useRouter();
    const vLogin = () => {
        validLogin().then(res => {
            if(!res){
                router.push("/login");
            }
        })
    }

    onMounted(() => {
        vLogin();
    })
</script>
