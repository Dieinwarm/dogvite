<template>
    <div>
        <div class="header">🐶 舔狗的艺术</div>
        <el-row type="flex" justify="center">
            <el-col :xs="22" :sm="18" :lg="12">
                <el-menu mode="horizontal" class="header-tab" text-color="#2C3E50" active-text-color="#3498DB" router :default-active="$route.path">
                    <el-menu-item  v-for="(item, index) in nav_menu_data" :index = "item.path">
                        {{item.title}}
                    </el-menu-item>
                </el-menu>
                <router-view></router-view>
            </el-col>
        </el-row>
        <coustom-footer></coustom-footer>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import coustomFooter from "./common/Footer";
    components: { coustomFooter }
    const nav_menu_data = reactive(
        [{
            title: '舔狗の语',
            path: '/words'
        }, {
            title: '舔狗日记',
            path: '/diary'
        }]
    );
</script>