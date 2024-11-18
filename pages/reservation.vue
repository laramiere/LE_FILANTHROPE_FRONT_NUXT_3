<template>
    <div>
        <Hero
            v-if="data && data.hero"
            :title="data.hero.title"
            :subtitle="data.hero.subtitle"
            :picture="data.hero.picture"
            small
        />
        <Container>
            <Wysiwyg :content="data.content"/>
        </Container>
        <Duo>
            <iframe src='https://bookings.zenchef.com/results?rid=354078&fullscreen=1' frameborder='0' scrolling='yes'></iframe>
            <template
                v-if="data && data.horaire_restaurant"
                #side
            >
                <Timetable
                    :horaire_restaurant="data.horaire_restaurant"
                    :__component="ComponentKeys.Timetable"
                    :id="data.horaire_restaurant?.id || 0"
                    small-display
                />
            </template>
        </Duo>
    </div>
</template>
<script lang="ts" setup>
import { ComponentKeys } from '@/shared/interfaces'

const { find } = useStrapi()
const { data } = await useAsyncData('reservation', async () => {
    try {
        const response = await find('reservation', {
            populate: {
                hero: {
                    populate: {
                        picture: {
                            populate: {
                                file: {
                                fields: ['url', 'alternativeText']
                                }
                            }
                        }
                    }
                },
                horaire_restaurant: {
                    populate: {
                        timetableItem: {
                            populate: {
                                picture: {
                                    populate: {
                                        file: {
                                            fields: ['url', 'alternativeText']
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        return response.data
    } catch (error) {
        console.log('error', error)
    }
})
console.log('data', data)
</script>
<style lang="scss" scoped>
.duo {
    &__main {
        iframe {
            width: 100%;
            height: 75rem;
        }
    }
}
</style>