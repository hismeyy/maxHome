<script setup>
import { onMounted, onUnmounted } from 'vue';
import Home from './Home.vue';
import Introduce from './Introduce.vue';
import Serve from './Serve.vue';
import Case from './Case.vue';
import Evaluate from './Evaluate.vue';
import Connect from './Connect.vue';

let currentSection = 0;
let sections = [];
let totalSections = 0;

function nextSection() {
  if (currentSection < totalSections - 1) {
    currentSection++;
    updateSection();
  }
}

function previousSection() {
  if (currentSection > 0) {
    currentSection--;
    updateSection();
  }
}

function updateSection() {
  sections.forEach((section) => {
    section.style.transform = `translateY(-${currentSection * 100}vh)`;
  });
}

function onWheel(event) {
  if (event.deltaY > 0) {
    nextSection();
  } else {
    previousSection();
  }
}

onMounted(() => {
  sections = document.querySelectorAll('.section');
  totalSections = sections.length;
  window.addEventListener('wheel', onWheel);
});

onUnmounted(() => {
  window.removeEventListener('wheel', onWheel);
});
</script>

<template>
  <div class="section" id="section1"><Home/></div>
  <div class="section" id="section2"><Introduce/></div>
  <div class="section" id="section3"><Serve/></div>
  <div class="section" id="section4"><Case/></div>
  <div class="section" id="section5"><Evaluate/></div>
  <div class="section" id="section6"><Connect/></div>
</template>

<style scoped>
.section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  transition: transform 1.5s ease;
  font-size: 2em;

}

#section1 {
  background-color: #E0E8D8;
}

#section2 {
  background-color: #F5F2D0;
}

#section3 {
  background-color: #B0BCC0;
}

#section4 {
  background-color: #F2B6A0;
}

#section5 {
  background-color: #D8CDE5;
}

#section6 {
  background-color: #C1D9F2;
}

</style>
