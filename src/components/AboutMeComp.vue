<template>
  <div class="aboutme">
      

      <div class="hobbies">
          <h1>Some of My Hobbies</h1>
    
      <h2><font-awesome-icon icon="running" /> I enjoy running in the <a href="https://www.armytenmiler.com/" target="_blank" rel="noopener">Army Ten-miler.</a></h2>
    

    <h2> I try to read when time is available. Here are a few books from my library: </h2>
    <my-books />

      </div>

  </div>
</template>

<script>

import MyBooks from '../components/MyBooks.vue'
export default {
    name: 'AboutMeComp',

    components: {MyBooks},

}
</script>

<style>

.aboutme {
    color: whitesmoke;
}

.aboutme ul li{
    padding: 10px 0px;
    list-style: none;
}

a {
  font-weight: bold;
  color: #8B9D83;
 }

</style>