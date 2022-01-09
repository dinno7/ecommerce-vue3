<template>
  <main class="main container">
    <div class="header__top">
      <div class="header__top-content">
        <h1 class="header__top-h1">قالب فروشگاهی</h1>
        <p class="header__top-p">توسعه داده شده بافریمورک ویو جی اس</p>
      </div>
      <form class="header__form">
        <div class="header__search">
          <input
            type="text"
            class="header__serach-input"
            placeholder="جستجو کنید..."
          />
          <button
            class="header__search-btn btn btn--brand btn--boxshadow"
          ></button>
        </div>
      </form>
    </div>
    <BaseSlider />

    <SliderSwiper class="container">
      <template v-slot:title> موبایل </template>
      <router-link
        :to="{ name: 'Products', params: { id: item } }"
        class="swiper-slide"
        v-for="item in 6"
        :key="item"
      >
        <div class="slider__box">
          <div class="slider__image">
            <img
              :src="require(`@/assets/img/slider/${item}.jpg`)"
              alt=""
              class="slider__img"
            />
          </div>
          <div class="slider__title2">گوشی موبایل سامسونگ مدل نوت 20</div>
          <div class="slider__price">
            <span class="slider__compare-price"
              >{{ makeMoneyIR(12400000) }} تومان</span
            >
            <span class="slider__total-price">
              {{ makeMoneyIR(12400000) }} تومان
            </span>
          </div>
          <span class="slider__discount">%6</span>
        </div>
      </router-link>
    </SliderSwiper>

    <AdPlacement />

    <SliderSwiper class="container">
      <template v-slot:title> لپ تاپ </template>
      <router-link
        :to="{ name: 'Products', params: { id: item } }"
        class="swiper-slide"
        v-for="item in 5"
        :key="item"
      >
        <div class="slider__box">
          <div class="slider__image">
            <img
              :src="require(`@/assets/img/slider/${item}.jpg`)"
              alt=""
              class="slider__img"
            />
          </div>
          <div class="slider__title2">گوشی موبایل سامسونگ مدل نوت 20</div>
          <div class="slider__price">
            <span class="slider__compare-price"
              >{{ makeMoneyIR(12400000) }} تومان</span
            >
            <span class="slider__total-price"
              >{{ makeMoneyIR(12400000) }} تومان</span
            >
          </div>
          <span class="slider__discount">%6</span>
        </div>
      </router-link>
    </SliderSwiper>
  </main>
</template>

<script>
// @ is an alias to /src
import BaseSlider from "@/components/BaseSlider.vue";
import SliderSwiper from "@/components/SliderSwiper.vue";
import AdPlacement from "@/components/AdPlacement.vue";
import makeMoneyIR from "@/components/MakeMoneyIr.js";
export default {
  name: "Home",
  data: () => ({}),
  components: { BaseSlider, SliderSwiper, AdPlacement },
  methods: {
    makeMoneyIR,
  },
};
</script>
