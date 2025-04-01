import type { TransitionProps } from 'vue'

export function transitionConfig(state): TransitionProps {
  return {
    name: 'page-transition',
    onBeforeEnter(el) {
      console.log('onBeforeEnter', el)
      state.value = false
      // toggleTransitionningPage(false)
    },
    onBeforeLeave(el) {
      console.log('onBeforeLeave', el)
      state.value = true
      // toggleTransitionningPage(true)
    },
  }
}

// export const transitionConfig: TransitionProps = {
//   name: 'page-transition',
//   onBeforeEnter(el) {
//     console.log('onBeforeEnter', el)
//     toggleTransitionningPage(false)
//   },
//   onBeforeLeave(el) {
//     console.log('onBeforeLeave', el)
//     toggleTransitionningPage(true)
//   },

// }
