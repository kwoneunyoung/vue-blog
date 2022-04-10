<template>
  <div>
    <div v-for="(item, index) in blog" :key="index">
        <h5>{{ item.title }}</h5>
        <p>{{ item.date }}</p>
    </div>
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