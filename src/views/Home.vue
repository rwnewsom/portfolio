<template>
  <div class="about">
    <h1>Welcome to my portfolio.</h1>
    <h2>I developed this web page in order to learn more about Vue.js and Font Awesome. However, I'm always interested in learning new concepts and applying new technologies.</h2>

    <div class="worklinks">
       <h3>Relevant Links</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/rwnewsom/" target="_blank" rel="noopener">My LinkedIn Profile</a></li>
      <li><a href="https://github.com/rwnewsom" target="_blank" rel="noopener">My Repos</a></li>      
    </ul>
    
      </div>

    <h2> Current Technical Skills: </h2>
    <skill-list />
    
  </div>
</template>

<script>
import SkillList from '../components/SkillList.vue';

export default {
  components: { SkillList },
}

</script>

<style>

.about {
  background-color: #3A4E48;
  color: whitesmoke;
}

.worklinks ul li{
    padding: 10px 0px;
    list-style: none;
}

</style>
