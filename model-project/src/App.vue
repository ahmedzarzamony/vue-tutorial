<template>
  <div>
    <h1>{{title}}</h1>
    <br>
    <input type="text" ref="name">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title: 'My first Vue app'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color:#f00
}
</style>
