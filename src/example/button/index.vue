<template>
  <div>
    <div class="demo">
        <cat-button class="demo1">按钮</cat-button>
        <cat-button class="demo1" type='primary'>按钮</cat-button>
        <cat-button class="demo1" type='success'>按钮</cat-button>
        <cat-button class="demo1" type='info'>按钮</cat-button>
        <cat-button type='warning'>按钮</cat-button>
        <cat-button type='error'>按钮</cat-button>
    </div>
    <div>
        <cat-button class="demo1" type='primary' size="mini" row>确认</cat-button>
        <cat-button class="demo1" type='success' size="small" row>成功</cat-button>
        <cat-button class="demo1" type='info' row>查看</cat-button>
        <cat-button class="demo1" type='warning' size="large" row>卸载</cat-button>
        <cat-button class="demo1" type='error' size="big" row>删除</cat-button>
    </div>
    <div class="demo">
        <cat-button class="demo1" disabled>按钮</cat-button>
        <cat-button class="demo1" type='primary' disabled>按钮</cat-button>
        <cat-button class="demo1" type='success' disabled>按钮</cat-button>
        <cat-button class="demo1" type='info' disabled>按钮</cat-button>
        <cat-button class="demo1" type='warning' disabled>按钮</cat-button>
        <cat-button class="demo1" type='error' disabled>按钮</cat-button>
    </div>
    <!-- <div class="demo">
        <cat-button class="demo1" plain>按钮</cat-button>
        <cat-button class="demo1" type='primary' plain>按钮</cat-button>
        <cat-button class="demo1" type='success' plain>按钮</cat-button>
        <cat-button class="demo1" type='info' plain>按钮</cat-button>
        <cat-button class="demo1" type='warning' plain>按钮</cat-button>
        <cat-button class="demo1" type='error' plain>按钮</cat-button>
    </div>
    <div class="demo">
        <cat-button class="demo1" round>按钮</cat-button>
        <cat-button class="demo1" type='primary' round>按钮</cat-button>
        <cat-button class="demo1" type='success' round>按钮</cat-button>
        <cat-button class="demo1" type='info' round>按钮</cat-button>
        <cat-button class="demo1" type='warning' round>按钮</cat-button>
        <cat-button class="demo1" type='error' round>按钮</cat-button>
    </div>
    <div class="demo">
        <cat-button class="demo1" disabled>按钮</cat-button>
        <cat-button class="demo1" type='primary' disabled>按钮</cat-button>
        <cat-button class="demo1" type='success' disabled>按钮</cat-button>
        <cat-button class="demo1" type='info' disabled>按钮</cat-button>
        <cat-button class="demo1" type='warning' disabled>按钮</cat-button>
        <cat-button class="demo1" type='error' disabled>按钮</cat-button>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.demo {
  margin: 10px 10px;
}

.demo1 {
  margin: 10px 0;
}
</style>