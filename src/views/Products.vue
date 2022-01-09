<template>
  <div>
    <div id="modal__gallery" class="modal" v-show="isShowModal">
      <div class="modal-overlly" @click="closeModal"></div>
      <div class="modal__content">
        <span class="modal__close" @click="closeModal">&times;</span>
        <a @click.prevent="modalMove(1)" class="modal__prev">&#10094;</a>
        <a @click.prevent="modalMove(-1)" class="modal__next">&#10095;</a>
        <div class="modal__body">
          <img :src="modalImage" class="show__gallery" />
        </div>
      </div>
    </div>
    <main class="main">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb__item breadcrumb__item--hide">
            <router-link :to="{ name: 'Home' }" class="breadcrumb__link"
              ><span class="breadcrumb__span">صفحه اصلی</span></router-link
            >
          </li>
          <li class="breadcrumb__item">
            <router-link :to="{ name: 'Category' }" class="breadcrumb__link"
              ><span class="breadcrumb__span"
                >دسته بندی محصولات</span
              ></router-link
            >
          </li>
          <li class="breadcrumb__item">
            <a href="" class="breadcrumb__link"
              ><span class="breadcrumb__span"
                >محصول شماره {{ $route.params.id }}</span
              ></a
            >
          </li>
        </ul>
        <div class="product">
          <div class="product__header">
            <div class="product__expiration" ref="product__expiration">
              <div dir="rtl" class="count-down__timer" id="count-dowm__timer">
                {{ diff }}
              </div>
            </div>
            <div class="product__row">
              <div class="prodcut__gallery">
                <div class="gallery">
                  <span class="gallery__count">
                    <span class="gallery__number1">{{
                      gallerySlides.length
                    }}</span>
                    <span class="gallery__number2">{{ slideIndex + 1 }}</span>
                  </span>
                  <div class="gallery__slides">
                    <div
                      class="gallery__slide"
                      v-for="(item, index) in gallerySlides"
                      :key="index"
                    >
                      <img
                        class="gallery__img"
                        :src="item.img"
                        alt="product image"
                        v-show="slideIndex === index"
                        @click="showModal(item.img)"
                      />
                    </div>
                  </div>
                  <a @click.prevent="move(-1)" class="gallery__prev"
                    >&#10094;</a
                  >
                  <a @click.prevent="move(1)" class="gallery__next">&#10095;</a>
                  <div class="gallery__content" style="margin-top: -100px">
                    <div class="gallery__items">
                      <div
                        class="gallery__item"
                        :class="{
                          'gallery__item--is-acitve': slideIndex === index,
                        }"
                        v-for="(item, index) in gallerySlides"
                        :key="index"
                      >
                        <img
                          :src="item.img"
                          @click="currentSlide(index)"
                          class="gallery__item-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__left">
                <div class="product__category">دسته وب</div>
                <div class="product__info">
                  <h1 class="product__title">محصول {{ product?.name }}</h1>

                  <div class="rating">
                    <div class="rating__star">
                      <span
                        class="rating__rate"
                        v-for="item in rates"
                        :key="item.title"
                        :data-title="item.title"
                        @click="rateWidth = item.width"
                        @mouseover="showRate = false"
                        @mouseleave="showRate = true"
                      ></span>
                    </div>
                    <div
                      class="rating__fstar"
                      :style="showRate ? `width:${rateWidth}%` : ''"
                    >
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                    </div>
                  </div>
                  <div class="rating-star" dir="ltr">
                    {{ rateWidth / 10 }} / 10
                    <span class="rating__num" style="margin-left: 5px"
                      >({{ rateWidth }}%)</span
                    >
                  </div>
                </div>
                <div class="controls">
                  <!-- <div class="controls__group" v-for="item in 3" :key="item">
                    <Multiselect
                      style="text-align: right"
                      v-model="colorSelectValue"
                      :options="colorOptions"
                      :searchable="false"
                      :close-on-select="false"
                      :show-labels="true"
                      :hide-selected="true"
                      select-label="کلیک کنید تا انتخاب شود"
                      selected-label="انتخاب شده"
                      deselect-label="کلیک کنید تا از حالت انتخاب در بیاید"
                      placeholder="انتخاب رنگ"
                    ></Multiselect>
                  </div> -->
                  <div class="controls__group">
                    <input
                      type="number"
                      class="controls__input"
                      min="1"
                      max="1000"
                      placeholder="تعداد"
                      v-model="productCount"
                    />
                  </div>
                </div>
                <div class="product__price">
                  <h5 class="product__campare-price">
                    {{ makeMoneyIR(12400000) }} تومان
                  </h5>
                  <h5 class="product__total-price">
                    {{ makeMoneyIR(product?.price) }} تومان
                  </h5>
                  <div class="product__discount">
                    <span class="product__dicount-value">6%</span>
                    <span class="product__dicount-label">تخفیف</span>
                  </div>
                </div>
                <div class="alert alert--warning d--none">
                  این محصول موجود نمی باشد
                </div>
                <div class="product__buttons">
                  <button
                    class="btn btn--brand btn--boxshadow btn--add-basket"
                    @click="pleaseAddProductToCart"
                  >
                    افزدون به سبد خرید
                  </button>
                  <button class="btn btn-transparent btn--fav">
                    افردون به علاقه مندی ها
                  </button>
                  <a href="" class="btn btn-transparent btn--compare">مقایسه</a>
                </div>
              </div>
            </div>
          </div>
          <div class="product__desc">
            <p class="product__desc-content">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>

        <SliderSwiper :isLoop="true">
          <template v-slot:title> دیگر محصولات </template>
          <router-link
            @click="reloadPage"
            :to="{ name: 'Products', params: { id: p.id } }"
            class="swiper-slide"
            v-for="p in allProducts"
            :key="p.id"
          >
            <div class="slider__box">
              <div class="slider__image">
                <img
                  :src="require(`@/assets/img/slider/${p.id}.jpg`)"
                  alt=""
                  class="slider__img"
                />
              </div>
              <div class="slider__title2">{{ p.name }}</div>
              <div class="slider__price">
                <span class="slider__compare-price"
                  >{{ makeMoneyIR(12400000) }} تومان</span
                >
                <span class="slider__total-price"
                  >{{ makeMoneyIR(p.price) }} تومان</span
                >
              </div>
              <span class="slider__discount">%6</span>
            </div>
          </router-link>
        </SliderSwiper>

        <div class="product-details">
          <div class="tab">
            <div class="tab__items">
              <span
                class="tab__item tab__item--compare"
                :class="{ 'tab__item--is-active': activeTab === 'compare' }"
                @click="activeTab = 'compare'"
                >نقد و برسی</span
              >
              <span
                class="tab__item tab__item--featrues"
                :class="{ 'tab__item--is-active': activeTab === 'featrues' }"
                @click="activeTab = 'featrues'"
                >ویژیگی ها</span
              >
              <span
                class="tab__item tab__item--comments"
                :class="{ 'tab__item--is-active': activeTab === 'comments' }"
                @click="activeTab = 'comments'"
                >نظرات</span
              >
            </div>
            <div class="tab__sections">
              <CompareTab
                v-show="activeTab === 'compare'"
                class="tab__section tab__section--compare"
              />
              <CommentsTab
                class="tab__section tab__section--comments"
                v-show="activeTab === 'comments'"
              />
              <FeaturesTab
                class="tab__section tab__section--featrues"
                v-show="activeTab === 'featrues'"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import moment from "moment";
import SliderSwiper from "@/components/SliderSwiper.vue";
import CompareTab from "@/components/Tabs/CompareTab.vue";
import CommentsTab from "@/components/Tabs/CommentsTab.vue";
import FeaturesTab from "@/components/Tabs/FeaturesTab.vue";
import "@/assets/css/modal.css";
import { mapActions, mapGetters } from "vuex";
import makeMoneyIR from "@/components/MakeMoneyIr.js";

export default {
  name: "Product",

  components: {
    SliderSwiper,
    CompareTab,
    CommentsTab,
    FeaturesTab,
  },
  data: () => ({
    dateCountDown: moment("2025-12-29 00:00:00"),
    diff: null,
    timerIntervall: null,
    gallerySlides: [
      { img: require("@/assets/img/slider/1.jpg") },
      { img: require("@/assets/img/slider/2.jpg") },
      { img: require("@/assets/img/slider/3.jpg") },
      { img: require("@/assets/img/slider/4.jpg") },
      { img: require("@/assets/img/slider/5.jpg") },
      { img: require("@/assets/img/slider/6.jpg") },
    ],
    slideIndex: 0,
    isShowModal: false,
    modalImage: null,
    rates: [
      { width: 100, title: "عالی" },
      { width: 80, title: "خوب" },
      { width: 60, title: "معمولی" },
      { width: 40, title: "ضعیف" },
      { width: 20, title: "بد" },
    ],
    rateWidth: 0,
    showRate: false,
    colorSelectValue: "",
    colorOptions: ["آبی", "مشکی", "سفید", "قرمز"],

    activeTab: "compare",

    product: null,

    productCount: 1,
  }),

  methods: {
    makeMoneyIR,

    move(n) {
      this.slideIndex += n;
      if (this.slideIndex < 0) this.slideIndex = this.gallerySlides.length - 1;
      else if (this.slideIndex > this.gallerySlides.length - 1)
        this.slideIndex = 0;
    },
    currentSlide(index) {
      this.slideIndex = index;
    },
    showModal(img) {
      this.isShowModal = true;
      this.modalImage = img;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isShowModal = false;
      document.body.style.overflow = "unset";
    },
    modalMove(n) {
      this.move(n);
      this.showModal(this.gallerySlides[this.slideIndex].img);
    },
    reloadPage() {
      setTimeout(() => {
        this.$router.go(0);
      }, 0.1);
    },
    ...mapActions("cart", ["addToCart"]),

    pleaseAddProductToCart() {
      this.addToCart({ ...this.product, count: this.productCount });
      this.productCount = 1;
    },
  },
  computed: mapGetters("products", ["allProducts", "getProductByID"]),
  created() {
    this.timerIntervall = setInterval(() => {
      let diffTime = this.dateCountDown.diff(moment());
      let durationTime = moment.duration(diffTime);
      let times = {
        days: Math.floor(durationTime.asDays()),
        hours: durationTime.hours(),
        minutes: durationTime.minutes(),
        seconds: durationTime.seconds(),
      };
      for (let item in times) {
        if (times[item] <= 0) times[item] = 0;
      }
      if (
        times.days <= 0 &&
        times.hours <= 0 &&
        times.minutes <= 0 &&
        times.seconds <= 0
      ) {
        let productExpiration = this.$refs.product__expiration;
        productExpiration.parentElement.removeChild(productExpiration);
        clearInterval(this.timerIntervall);
      }

      this.diff = `${times.days} روز ${times.hours} ساعت ${times.minutes} دقیقه ${times.seconds} ثانیه`;
    }, 1000);
    this.product = this.getProductByID(this.$route.params.id);
    if (!this.product) {
      this.$store.dispatch("products/getProducts").then(() => {
        this.product = this.getProductByID(this.$route.params.id);
      });
    }
    document.querySelector("#shop").classList.add("router-link-exact-active");
  },

  mounted() {
    document.documentElement.scrollTo({ top: 0 });
  },
  unmounted() {
    clearInterval(this.timerIntervall);
    document
      .querySelector("#shop")
      .classList.remove("router-link-exact-active");
  },
};
</script>

<style scoped>
.product__expiration::before {
  content: "\e095";
  color: rgb(235, 232, 232);
  font-size: 20px;
  background: rgb(43, 101, 226);
  padding: 15px;
  opacity: 0.8;
  animation: pulse 0.5s alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
    background: rgb(245, 60, 60);
    transform: scale(1.05);
  }
}
.modal__prev,
.modal__next {
  position: absolute;
  color: #8f8f8f;
  top: 40%;
  font-size: 40px;
  transform: translateY(40%);
  cursor: pointer;
  transition: color 0.5s;
}
.modal__prev:hover,
.modal__next:hover {
  color: #000 !important;
}
.modal__prev {
  right: 15px;
}
.modal__next {
  left: 15px;
}
.add-to-buy {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}
.add-to-buy > button {
  font-family: inherit;
  font-weight: bolder;
  font-size: 18px;
  padding: 15px 30px;
  color: #fff;
  background: rgba(54, 185, 54, 0.842);
  border-radius: 7px;
  cursor: pointer;
  text-align: center;
}
.add-to-buy > button:hover {
  background: rgba(54, 185, 54, 0.973);
}
</style>
