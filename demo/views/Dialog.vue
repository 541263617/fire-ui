<template>
    <div>
        <f-button type="primary" @click="showDefaultDialog">打开dialog</f-button>
        <f-button type="primary" @click="showLargeDialog">large dialog</f-button>
        <f-dialog
                :visible.sync="defaultDialog"
                title="标题"
                @confirm="handleConfirm"
        >
            <p class="text">用简练的语言表达想法，多用标点符号。</p>
        </f-dialog>
        <f-dialog
                :visible.sync="largeDialog"
                title="标题"
                size="large"
                @confirm="handleConfirm"
        >
            <p class="text">用简练的语言表达想法，多用标点符号。</p>
        </f-dialog>
    </div>
</template>

<script>
    import FDialog from "../../packages/Dialog/src/Dialog";
    import FButton from "../../packages/Button/src/Button";

    export default {
        components: {
            FButton,
            FDialog
        },
        name: 'DialogDemo',
        data() {
            return {
                defaultDialog: false,
                largeDialog: false
            }
        },
        methods: {
            showDefaultDialog() {
                this.defaultDialog = true
            },
            showLargeDialog() {
                this.largeDialog = true
            },
            handleConfirm() {
                console.log('ok')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .text {
        font-size: 26px;
        color: #666;
        margin-bottom: 48px;
    }
</style>