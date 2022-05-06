<template>

</template>
<script setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { validLogin } from '@adminApi/homeApi';

    const router = useRouter();
    const vLogin = () => {
        validLogin().then(res => {
            if(res){
                router.push("/admin/list");
            }else{
                router.push("/login");
            }
        })
    }

    onMounted(() => {
        vLogin();
    })
</script>