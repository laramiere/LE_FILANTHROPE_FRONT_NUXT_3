export function useGenericAction(): {
  generateRandomNumber: () => number
} {
  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 21) - 10
  }
  return { generateRandomNumber }
}
