<template>
  <div>
    <Hero
        v-if="homeData"
        :title="homeData.hero.title"
        :subtitle="homeData.hero.subtitle"
        :display-logo="homeData.hero.displayLogoPhil"
    />
    <template v-if="homeData?.pageZone">
      <template
        v-for="component in homeData.pageZone"
        :key="component.id"
      >
        <component
          :is="getComponent(component.__component)"
          v-bind="{...component}"
        />
      </template>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ComponentKeys } from '@/shared/interfaces'
import type { ComponentName, HomeInterface } from '@/shared/interfaces'
import type { Ref } from 'vue'

const { find } = useStrapi()

const Timetable = resolveComponent('Timetable')
const Board = resolveComponent('Board')
const Testimonial = resolveComponent('Testimonial')
const Solo = resolveComponent('Solo')

const homeData: Ref<HomeInterface | null> = ref(null)
const errorFetchData = ref(null)

const { data, error } = await useAsyncData('home', async () => {
  const response = await find('home', {
    populate: {
      hero: {
        populate: {
          fields: ['title']
        }
      },
      pageZone: {
        on: {
          [ComponentKeys.Timetable]: {
            populate: {
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
            },
          },
          [ComponentKeys.Board]: {
            populate: {
              carte_du_restaurant: {
                populate: {
                  sectionLvl1: {
                    populate: {
                      sectionLvl2: {
                        populate: {
                          sectionLvl3: {
                            populate: '*'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          [ComponentKeys.Solo]: {
            populate: '*'
          },
          [ComponentKeys.Testimonial]: {
            populate: {
              avis_clients: {
                populate: {
                  fields: ['date', 'rate', 'userName', 'content'],
                  picture: {
                    populate: {
                      file: {
                        fields: ['url', 'alternativeText']
                      }
                    }
                  }
                }
              },
              pictures: {
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
})
const getComponent = (name: ComponentName) => {
  switch (name) {
    case ComponentKeys.Timetable:
      return Timetable;
    case ComponentKeys.Board:
      return Board;
    case ComponentKeys.Testimonial:
      return Testimonial;
    case ComponentKeys.Solo:
      return Solo;
    default:
      throw new Error(`Unsupported component type`);
  }
}
if (error.value) {
  errorFetchData.value = error.value
} else {
  homeData.value = data.value
}
</script>
  