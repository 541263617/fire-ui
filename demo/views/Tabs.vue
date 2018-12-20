<template>
    <f-tabs v-model="activeTab">
        <f-tab-pane label="按天审核" name="day"></f-tab-pane>
        <f-tab-pane label="按店审核" name="shop"></f-tab-pane>
        <f-tab-pane label="按店审核" name="aaaa"></f-tab-pane>
    </f-tabs>
</template>

<script>
    export default {
        name: 'Tabs',
        data() {
            return {
                activeTab: 'shop'
            }
        }
    }
</script>
