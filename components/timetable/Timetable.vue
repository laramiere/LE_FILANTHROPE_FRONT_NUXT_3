<template>
<section class="wrapper timetable">
    <div class="timetable__main">
        <h2
            v-if="props.title"
            class="fs-3"
        >
            {{ props.title }}
        </h2>
        <p v-if="props.subtitle">
            {{ props.subtitle }}
        </p>
        <ul
            v-if="props.horaire_restaurant && props.horaire_restaurant.timetableItem.length"
            class="timetable__list"
        >
            <li
                class="timetable__item"
                :class="{ 'timetable__item--actif': key === goodIndex }"
                v-for="(item, key) in props.horaire_restaurant.timetableItem"
                :key="`${item.id}`"
            >
                <h3 class="fs-2">{{ item.title }}</h3>
                <span>
                    {{ item.timeSlot1 }}
                </span>
                <span v-if="item.timeSlot2">
                    {{ item.timeSlot2 }}
                </span>
            </li>
        </ul>
    </div>
    <div class="timetable__side">
        <img
            class="timetable__media"
            :src="activeItem?.picture ? `http://localhost:1337${activeItem.picture.file.url}` : '/pictures/picture_8.jpg'"
            :alt=" activeItem?.picture ? activeItem.picture.file.alternativeText : 'Manger'"
            loading="lazy"
        >
    </div>
</section>
</template>

<script lang="ts" setup>
import type { TimetableComponent, TimetableItem } from '@/shared/interfaces'
type KeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6
const props = defineProps<TimetableComponent>()
const dayIndex: KeyType = new Date().getDay() as KeyType
const mapperDay: { [key in KeyType]: number } = {
    0: 6,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5
}
const goodIndex = mapperDay[dayIndex]
const tiemTableItem : TimetableItem | undefined = props.horaire_restaurant?.timetableItem[goodIndex]
const activeItem : null | TimetableItem = tiemTableItem ?? null
console.log('activeItem : ', activeItem)
</script>
<style lang="scss" scoped>
.timetable {
    $c: &;
    background-color: $orange;
    border-radius: 3rem;
    padding: 5rem;
    display: grid;
    grid-template-columns: 60% 40%;
    margin-bottom: 11rem;

    &__main {
        > h2 {
            line-height: 1;
            margin: 0;
            margin-bottom: 5rem;
        }

        p {
            margin-bottom: 5rem;
        }
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    &__item {
        &#{$c}__item--actif {
            color: $white;
        }

        &:not(:last-child) {
            margin-bottom: 5rem;
        }
        h3 {
            line-height: 1;
            margin-bottom: 1.7rem;
            font-weight: 700;
        }
        span {
            display: block;
            text-transform: uppercase;
            line-height: 1;
        }
    }

    &__side {
        margin-bottom: -10rem;
        img {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: $global-radius;
            overflow: hidden;
        }
    }
}
</style>