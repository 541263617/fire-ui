<template>
    <div>
        <f-button type="primary">主要按钮</f-button>
        <f-button type="danger">危险按钮</f-button>
        <f-button type="danger" disabled>禁用按钮</f-button>
        <f-button type="primary" hollow>主要按钮</f-button>
        <f-button type="danger" hollow>危险按钮</f-button>
        <f-button type="danger" hollow disabled>禁用按钮</f-button>
        <f-button type="primary" size="short">短按钮</f-button>
        <f-button type="primary" size="short" hollow>主要按钮</f-button>
        <div>
            <f-button type="primary" text>文字按钮</f-button>
            <f-button type="danger" text>文字按钮</f-button>
            <f-button type="primary" text disabled>禁用按钮</f-button>
        </div>
        <div>
            <f-button type="danger" icon="add">添加分类</f-button>
            <f-button type="danger" icon="ok">全选</f-button>
            <f-button type="danger" icon="circle">全不选</f-button>
            <f-button type="danger" icon="batch">批量</f-button>
            <f-button type="danger" icon="sort">排序</f-button>
        </div>
    </div>
</template>

<script>
    import FButton from "../../packages/Button/src/Button";

    export default {
        components: {FButton},
        name: 'FButtonDemo',
        data() {
            return {}
        }
    }
</script>
