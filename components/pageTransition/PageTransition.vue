<script setup lang="ts">
import gsap from 'gsap'
import { nextTick, ref, watch } from 'vue'

const transitionPage = useState('needTransitionPage')
// const activeTransition = computed(() => props.activeTransition)
const isTransitioning = ref(false)
// Observer la transition et animer les divs
watch(transitionPage, (value) => {
  console.log('activeTransition change', value)
})
watch(isTransitioning, async (complete) => {
  if (!complete) {
    isTransitioning.value = true // Activer l'animation au début
    await nextTick() // Attendre que le DOM se mette à jour

    gsap.set('.transition-div', { y: '100%' }) // Positionner en bas
    gsap.to('.transition-div-1', { y: '0%', duration: 0.6, ease: 'power2.out' })
    gsap.to('.transition-div-2', { y: '0%', duration: 0.6, ease: 'power2.out', delay: 0.1 }) // Décalage
  }
  else {
    // Quand la nouvelle page est prête, faire disparaître vers le haut
    gsap.to('.transition-div-1', { y: '-100%', duration: 0.6, ease: 'power2.in' })
    gsap.to('.transition-div-2', { y: '-100%', duration: 0.6, ease: 'power2.in', delay: 0.1, onComplete: () => {
      isTransitioning.value = false // Désactiver après animation
    } })
  }
})
</script>

<template>
  <div>
    <div v-if="isTransitioning" class="transition-div transition-div-1" />
    <div v-if="isTransitioning" class="transition-div transition-div-2" />
  </div>
</template>

<style lang="scss" scoped>
.transition-div {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  transform: translateY(100%);
}

.transition-div-1 {
  background-color: var(--color-primary); /* Rose */
}

.transition-div-2 {
  background-color: var(--color-secondary); /* Bleu */
}
</style>
