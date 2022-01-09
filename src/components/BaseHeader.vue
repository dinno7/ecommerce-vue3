<template>
  <header class="header header--bg">
    <div class="header__shape">
      <div class="header__shape-inner"></div>
    </div>
    <div class="container">
      <div class="navbar">
        <div class="navbar__row">
          <div class="header__logo">
            <router-link
              :to="{ name: 'Home' }"
              class="header__logo-img"
            ></router-link>
          </div>
          <div
            class="navbar__items"
            :class="{ 'navbar__items--is-active': isMenuShow }"
          >
            <ul class="navbar__ul">
              <li class="navbar__item">
                <router-link
                  :to="{ name: 'Home' }"
                  class="navbar__link navbar__link--is-active"
                  >صفحه اصلی</router-link
                >
              </li>
              <li class="navbar__item navbar__item--has-sub">
                <router-link
                  :to="{ name: 'Category' }"
                  @click.prevent=""
                  class="navbar__link"
                  id="shop"
                  >فروشگاه</router-link
                >
                <ul class="navbar__subset">
                  <li class="navbar__item">
                    <router-link :to="{ name: 'Category' }" class="navbar__link"
                      >دسته بندی</router-link
                    >
                  </li>
                  <li class="navbar__item">
                    <a href="" class="navbar__link"
                      >زیر منو <span class="num-fa">2</span></a
                    >
                  </li>
                  <li class="navbar__item navbar__item--has-sub">
                    <a href="" class="navbar__link"
                      >زیر منو <span class="num-fa">3</span></a
                    >
                    <ul class="navbar__subset">
                      <li class="navbar__item">
                        <a href="" class="navbar__link"
                          >زیر منو <span class="num-fa">1</span></a
                        >
                      </li>
                      <li class="navbar__item">
                        <a href="" class="navbar__link"
                          >زیر منو <span class="num-fa">2</span></a
                        >
                      </li>
                      <li class="navbar__item navbar__item--has-sub">
                        <a href="" class="navbar__link"
                          >زیر منو <span class="num-fa">3</span></a
                        >
                        <ul class="navbar__subset">
                          <li class="navbar__item">
                            <a href="" class="navbar__link"
                              >زیر منو <span class="num-fa">1</span></a
                            >
                          </li>
                          <li class="navbar__item">
                            <a href="" class="navbar__link"
                              >زیر منو <span class="num-fa">2</span></a
                            >
                          </li>
                          <li class="navbar__item">
                            <a href="" class="navbar__link"
                              >زیر منو <span class="num-fa">3</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="navbar__item">
                <router-link :to="{ name: 'About' }" class="navbar__link"
                  >درباره ما</router-link
                >
              </li>
              <li class="navbar__item">
                <router-link :to="{ name: 'Contact' }" class="navbar__link"
                  >تماس باما</router-link
                >
              </li>
            </ul>
          </div>
          <div class="navbar__action">
            <div class="header__basket">
              <span
                class="header__basket-icon"
                @click="toggleBasketHeader"
              ></span>
              <span class="header__basket-count num-fa-bold">{{
                itemsInCart.length
              }}</span>
              <div
                class="header__dropdown"
                :class="{ 'header__dropdown--is-active': isBasketHeaderShow }"
              >
                <div
                  class="header__dropdown-content header__dropdown-content--overflow"
                >
                  <div
                    class="header__basket-item"
                    v-for="item in itemsInCart"
                    :key="item.id"
                  >
                    <a href="" class="header__basket-link">
                      <img
                        :src="require(`../assets/img/slider/${item.id}.jpg`)"
                        class="header__basket-img"
                      />
                    </a>
                    <div class="header__basket-details">
                      <h5>
                        <a class="header__basket-title" href="">{{
                          item.name
                        }}</a>
                      </h5>
                      <div class="header__basket-price">
                        تعداد: {{ item.count }}
                      </div>
                      <div class="header__basket-price">
                        {{ makeMoneyIR(item.price) }} تومان
                      </div>
                      <router-link
                        to=""
                        class="header__basket-remove"
                        @click="pleaseRemoveProductFromCart(item.id)"
                      >
                        حذف
                      </router-link>
                    </div>
                  </div>
                  <div
                    v-show="itemsInCart.length"
                    class="header__basket-btn"
                    @click="isBasketHeaderShow = false"
                  >
                    <router-link
                      :to="{ name: 'Cart' }"
                      class="btn btn--boxshadow btn--brand w--100"
                      >ثبت و نهایی کردن سفارش</router-link
                    >
                  </div>
                  <div v-show="!itemsInCart.length" class="header__basket-btn">
                    <router-link
                      :to="{ name: 'Category' }"
                      class="btn btn--boxshadow btn--red w--100"
                    >
                      در حال حاضر محصولی ندارید!
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="header__account" @click="toggleAccountHeader">
              <span class="header__account-icon"></span>
              <div
                class="header__dropdown header__dropdown--w200"
                :class="{ 'header__dropdown--is-active': isAccountHeaderShow }"
              >
                <div class="header__dropdown-content">
                  <router-link
                    :to="{ name: 'Login' }"
                    class="header__account-link"
                    >ورود</router-link
                  >
                  <router-link
                    :to="{ name: 'Register' }"
                    class="header__account-link"
                    >ثبت نام</router-link
                  >
                </div>
              </div>
            </div>
            <div
              class="header__menu"
              :class="{ 'header__menu--is-active': isMenuShow }"
              @click="isMenuShow = !isMenuShow"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="overlay"
      :class="{ 'overlay--is-active': isMenuShow }"
      @click="isMenuShow = false"
    ></div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import makeMoneyIR from "@/components/MakeMoneyIr.js";
export default {
  data: () => ({
    isBasketHeaderShow: false,
    isAccountHeaderShow: false,
    isMenuShow: false,
  }),
  computed: {
    ...mapGetters("cart", ["itemsInCart"]),
  },
  methods: {
    makeMoneyIR,
    toggleBasketHeader() {
      this.isAccountHeaderShow = false;
      this.isBasketHeaderShow = !this.isBasketHeaderShow;
    },
    toggleAccountHeader() {
      this.isBasketHeaderShow = false;
      this.isAccountHeaderShow = !this.isAccountHeaderShow;
    },
    blurHeaderIcons(e) {
      if (!Boolean(e.target.closest(".header__basket,.header__account"))) {
        this.isBasketHeaderShow = false;
        this.isAccountHeaderShow = false;
      }
    },
    ...mapActions("cart", ["removeFromCart"]),
    pleaseRemoveProductFromCart(id) {
      this.removeFromCart(id);
    },
  },

  mounted() {
    document.addEventListener("click", this.blurHeaderIcons);
  },
  unmounted() {
    document.removeEventListener("click", this.blurHeaderIcons);
  },
};
</script>

<style></style>
