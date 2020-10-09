<template>
<div>导航栏 <router-link to="/">小黑白</router-link>
    <router-link to="/xxx">猫小珀</router-link>
</div>
<hr />
<router-view />
</template>

<script>
import Heibai from './components/heibai.vue'

export default {
    name: 'App',
    components: {
        Heibai
    }
}
</script>
