import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
    const target = ref(null)
    const isVisible = ref(false)

    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting // toggle based on visibility
        },
        {
            threshold: 0.1,
            ...options,
        }
    )

    onMounted(() => {
        if (target.value) {
            observer.observe(target.value)
        }
    })

    onUnmounted(() => {
        if (target.value) {
            observer.unobserve(target.value)
        }
    })

    return { isVisible, target }
}