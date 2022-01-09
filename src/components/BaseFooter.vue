<template>
  <footer class="footer">
    <span
      class="scroll__top"
      :class="{ show: showScrollTopBtn }"
      @click="goTop"
    ></span>
    <div class="footer__top">
      <div class="container">
        <div class="footer__row">
          <div class="footer__getcall">
            <img src="@/assets/img/tamasbama.png" alt="" />
            <div class="footer__getcall-info">
              <h3 class="footer__getcall-h3">با ما تماس بگیرید</h3>
              <span class="gooter__getcall-span"
                >برای ثبت سفارش و مشاوره با مشاوران ما تماس بگیرید !</span
              >
            </div>
          </div>
          <div class="footer__info">
            <span class="footer__info-span">Email : info@domian.com</span>
            <span class="footer__info-span margin--right-10"
              >Tel : 1023233030</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="footer__main">
      <div class="container">
        <div class="footer__links">
          <a href="" class="footer__link">لینک اول</a>
          <a href="" class="footer__link">لینک اول</a>
          <a href="" class="footer__link">لینک اول</a>
          <a href="" class="footer__link">لینک اول</a>
          <a href="" class="footer__link">لینک اول</a>
          <a href="" class="footer__link">لینک اول</a>
        </div>
        <div class="footer__hr"></div>
        <div class="footer__about">
          <p class="footer__txt">
            وب اموز مرجعی تخصصی برای یادگیری طراحی و برنامه نویسی وب و موبایل
            است. ما در وب اموز با بهره گیری از نیروهای متخصص، باتجربه تمام تلاش
            خود را برای تهیه و تولید آموزش های با کیفیت و کامل و حرفه ای انجام
            می دهیم. باور ما اینست که کاربران ایرانی لایق بهترین ها هستند و باید
            بهترین و بروزترین فیلم های آموزشی، در اختیار آنها قرار بگیرد تا
            بتوانند به سرعت پیشرفت کنند و جزء بهترین ها شوند. امید است که با
            همراهی هر چه بیشتر شما کاربران عزیز در این راه، ما را برای حرکتی
            قدرتمند در مسیر این هدف باارزش یاری دهید.
          </p>
        </div>
      </div>
      <div class="footer__team">
        طراحی و توسعه توسط
        <router-link :to="{ name: 'About' }" class="footer__copy"
          >دینو</router-link
        >
        © 1400
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    showScrollTopBtn: false,
    scrollTimeout: null,
  }),
  methods: {
    setShowScrollTopBtn() {
      if (this.scrollTimeout) return;
      this.scrollTimeout = setTimeout(() => {
        this.showScrollTopBtn = window.scrollY > 200;

        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = 0;
      }, 150);
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  beforeMount() {
    document.addEventListener("scroll", this.setShowScrollTopBtn);
  },
  unmounted() {
    document.removeEventListener("scroll", this.setShowScrollTopBtn);
  },
};
</script>

<style scoped>
.scroll__top {
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
  background: #007aff;
}
.scroll__top::before {
  color: white;
}
.scroll__top.show {
  pointer-events: all;
  opacity: 0.5;
}
.scroll__top.show:hover {
  opacity: 0.9;
}
</style>
