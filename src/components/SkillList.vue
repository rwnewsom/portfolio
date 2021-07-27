<template>
<div class="skill-container">
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'html5']"/> HTML </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'css3']"/> CSS </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'vuejs']"/> Vue.js </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'microchip']"/> C# </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'microchip']"/> JavaScript </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'microchip']"/> SQL </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'microchip']"/> Unit Testing (MS Test) </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'github']"/> Github </h2></div>
</div>  
</template>

<script>

export default {
    name: 'skill-list',
    
}
</script>

<style>
.skill-container {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.skill {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 80px;
    margin: 20px;
}

</style>