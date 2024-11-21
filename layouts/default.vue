<template>
    <div class="wrapper">
        <VHeader />
        <slot />
        <VFooter />
    </div>
</template>
<script lang="ts" setup>
const global = useState('global')
const { find } = useStrapi()

await callOnce(async () => {
    if (!global.value) {
        global.value = await find('global', {
            populate: {
                Navigation: {
                    populate: {
                        fields: ['link', 'name', 'id'],
                        picture: {
                            fields: ['alternativeText', 'url', 'name', 'provider']
                        }
                    }
                },

                Social: {
                    populate: '*'
                },

                Gift: {
                    populate: '*'
                },

                Info: {
                    populate: '*'
                }
            }
        })
    }
})
</script>
