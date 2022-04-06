<template>
  <div>
    <div v-for="(item, index) in blog" :key="index">
        <h5>{{ item.title }}</h5>
        <p>{{ item.date }}</p>
    </div>
    <!-- <div>
        <h5>블로그 글 제목</h5>
        <p>블로그 글 날짜</p>
    </div>
    <div>
        <h5>블로그 글 제목</h5>
        <p>블로그 글 날짜</p>
    </div> -->
  </div>
  
</template>

<script>
export default {
    name : 'List',
    props : {
        blog : Array
    }

}
</script>

<style>

</style>