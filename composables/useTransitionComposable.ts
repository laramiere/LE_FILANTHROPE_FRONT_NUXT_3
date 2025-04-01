export function useTransitionComposable() {
  const transitionState = useState('needTransitionPage')
  const toggleTransitionningPage = (value: boolean) => {
    transitionState.value = value
  }

  return {
    toggleTransitionningPage,
  }
}
