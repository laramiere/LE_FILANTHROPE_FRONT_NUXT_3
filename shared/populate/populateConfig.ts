export const populateHero = {
  hero: {
    populate: {
      picture: {
        populate: {
          file: {
            fields: ['url', 'alternativeText'],
          },
        },
      },
      pictureBackground: {
        populate: {
          file: {
            fields: ['url', 'alternativeText'],
          },
        },
      },
    },
  },
}

export const populateHoraireRestaurant = {
  horaire_restaurant: {
    populate: {
      timetableItem: {
        populate: {
          picture: {
            populate: {
              file: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
        },
      },
    },
  },
}

export const populateCarteRestaurant = {
  carte_du_restaurant: {
    populate: {
      sectionLvl1: {
        populate: {
          sectionLvl2: {
            populate: {
              sectionLvl3: {
                populate: '*',
              },
            },
          },
        },
      },
    },
  },
}

export const populateAvisClients = {
  avis_clients: {
    populate: {
      fields: ['date', 'rate', 'userName', 'content'],
      picture: {
        populate: {
          file: {
            fields: ['url', 'alternativeText'],
          },
        },
      },
    },
  },
}

export const populatePictures = {
  pictures: {
    populate: {
      file: {
        fields: ['url', 'alternativeText'],
      },
    },
  },
}

export const populateMedia = {
  media: {
    fields: [
      'alternativeText',
      'url',
    ],
  },
}

export const populateSeo = {
  seo: {
    populate: '*',
  },
}
interface populateConfigOptions {
  hero?: boolean
  timetable?: boolean
  media?: boolean
}
export function createPopulateConfig(options: populateConfigOptions) {
  const config = {}
  if (options.hero) {
    config.hero = { ...populateHero }
  }
  if (options.timetable) {
    config.horaire_restaurant = populateHoraireRestaurant
  }
  if (options.media) {
    config.media = populateMedia
  }
  return config
}
