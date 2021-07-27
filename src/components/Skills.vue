<template>
  <div class="skill">
      
      <h2 class="skill-title">
          <font-awesome-icon icon="microchip" />
           {{skill.title}}</h2>    
  </div>
</template>

<script>
export default {
    name: 'skill',
    props: {
        skill: Object,
    }      
    }
</script>

<style>
.skill {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 80px;
    margin: 20px;
}
</style>