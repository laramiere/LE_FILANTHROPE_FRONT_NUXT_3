import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    transitionComplete: true,
  }),
  actions: {
    setTransitionComplete(value: boolean) {
      this.transitionComplete = value
    },
  },
})
