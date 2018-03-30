<template>
  <div class="hello">
    <div class="a" v-for="i in arr">
      <div>{{i.tit}}</div>
      <div>{{i.con}}</div>
    </div>
  </div>
</template>
import Gin from 'vue-resource'
<script>

  export default {
    created(){
     this.$http.get("http://localhost:8000/").then((e)=>this.arr=e.body)
   },
   data(){
    return {
      arr:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a{
    border:1px solid #ccc;
  }
   .a div{
    font-size: 20px;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
