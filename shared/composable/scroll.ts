import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

interface ScrollStatus {
    currentScrollPosition: number;
    prevScrollPosition: number;
    isUserScrollDown: boolean;
}
interface UseScrollReturn {
    scrollStatus: Ref<ScrollStatus>
}
export function useScroll (): UseScrollReturn {

    const scrollStatus = ref<ScrollStatus>({
        currentScrollPosition: 0,
        prevScrollPosition: 0,
        isUserScrollDown: false
    })

    let timeoutId: number | null = null
    const delay = 50

    function updateScroll () {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
        }
        timeoutId = window.setTimeout(() => {
            scrollStatus.value.currentScrollPosition = window.scrollY
            scrollStatus.value.isUserScrollDown = scrollStatus.value.currentScrollPosition > scrollStatus.value.prevScrollPosition
            scrollStatus.value.prevScrollPosition = scrollStatus.value.currentScrollPosition
            timeoutId = null
        }, delay)
    }
    onMounted(() => {
        window.addEventListener('scroll', updateScroll)
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', updateScroll)
    })
    return { scrollStatus }
}
