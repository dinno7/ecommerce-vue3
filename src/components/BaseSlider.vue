<template>
  <div class="container">
    <div class="slideshow">
      <div ref="slideshowImg">
        <a
          v-for="(slide, index) in slides"
          :key="slide.id"
          :href="slide.link"
          class="slideshow__slide"
          :style="shownSlide === index ? 'display:block' : 'display:none'"
          ><img
            :src="slide.img"
            class="slideshow__img"
            style="max-height: 300px"
          />
          <!-- <h1 class="slider__text">فروشگاه من</h1> -->
        </a>
      </div>
      <a @click="move(-1)" class="slideshow__prev">&#10095;</a>
      <a @click="move(1)" class="slideshow__next">&#10094;</a>

      <div class="slideshow__items">
        <div
          class="slideshow__item"
          v-for="item in slides.length"
          :key="item"
          @click="shownSlide = item - 1"
        >
          <div
            class="slideshow__item-inner"
            :style="shownSlide === item - 1 ? `width:${progressWidth}%` : ''"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSlider",
  data: () => ({
    shownSlide: 0,
    slides: [
      { id: 1, img: require("../assets/img/slideshow/1.png"), link: "" },
      { id: 2, img: require("../assets/img/slideshow/2.png"), link: "" },
      { id: 3, img: require("../assets/img/slideshow/3.png"), link: "" },
      { id: 4, img: require("../assets/img/slideshow/4.png"), link: "" },
    ],
    slideShowInterval: null,
    progressWidth: 0,
  }),

  methods: {
    move(n) {
      this.shownSlide += n;
      if (this.shownSlide < 0) this.shownSlide = this.slides.length - 1;
      else if (this.shownSlide > this.slides.length - 1) this.shownSlide = 0;
    },
  },

  mounted() {
    this.slideShowInterval = setInterval(() => {
      if (!this.$refs.slideshowImg.matches(":hover")) {
        this.progressWidth++;
        if (this.progressWidth === 100) {
          this.progressWidth = 0;
          this.move(1);
        }
      }
    }, 30);
  },
  unmounted() {
    clearInterval(this.slideShowInterval);
  },
};
</script>
