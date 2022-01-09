<template>
  <main class="main">
    <input type="text" spellcheck="true" />
    <div class="container">
      <div class="page">
        <div class="page__sidebar">
          <transition name="fade-scale">
            <div class="box" v-show="selectedFilters.length">
              <div class="box-filters">
                <div class="box-filters__header">
                  <span class="box-filters__title">فیلتر های اعمال شده</span>
                  <span
                    href=""
                    class="box-filters__clear"
                    style="cursor: pointer"
                    @click="selectedFilters = []"
                    >حذف همه</span
                  >
                </div>
                <transition-group
                  tag="ul"
                  name="fade-scale"
                  mode="out-in"
                  class="box-filters__ul"
                >
                  <li
                    class="box-filters__li"
                    v-for="filter in selectedFilters"
                    :key="filter"
                  >
                    <button
                      class="box-filters__button"
                      @click="removeFilter(filter)"
                    ></button>
                    <span class="box-filters__name">{{ filter }}</span>
                  </li>
                </transition-group>
              </div>
            </div>
          </transition>
          <div class="box">
            <div class="box__row">
              <div
                class="box__header"
                :class="{ 'box--togglable': !isBrandsShow }"
                @click="isBrandsShow = !isBrandsShow"
              >
                برند ها
              </div>
              <transition name="fade">
                <div class="box__filter" v-show="isBrandsShow">
                  <div class="box__content-container">
                    <div class="box__content">
                      <ul class="box__ul">
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="سامسونگ"
                            data-en="Sumsung"
                            data-serach="Sumsung سامسونگ"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="سامسونگ"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            سامسونگ
                          </label>
                        </li>
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="سونی"
                            data-en="sony"
                            data-serach="sony سونی"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="سونی"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            سونی
                          </label>
                        </li>
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="اپل"
                            data-en="apple"
                            data-serach="apple اپل"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="اپل"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            اپل
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="box">
            <div class="box__row">
              <div
                class="box__header"
                :class="{ 'box--togglable': !isColorsShow }"
                @click="isColorsShow = !isColorsShow"
              >
                رنگ ها
              </div>
              <transition name="fade">
                <div class="box__filter" v-show="isColorsShow">
                  <div class="box__content-container">
                    <div class="box__content">
                      <ul class="box__ul">
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="مشکی"
                            data-serach="balck مشکی"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="مشکی"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            مشکی
                            <span
                              class="filter__color"
                              style="background: rgb(0, 0, 0)"
                            ></span>
                          </label>
                        </li>
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="آبی"
                            data-serach="blue آبی"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="آبی"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            آبی
                            <span
                              class="filter__color"
                              style="background: rgb(0, 0, 255)"
                            ></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="box box--switcher">
            <label class="ui-switcher">
              <input type="checkbox" class="ui-switcher__input" />
              <span class="ui-switcher__slider">
                <span class="ui-switcher__toggle"></span>
              </span>
              فقط کالای های موجود
            </label>
          </div>
        </div>
        <div class="page__content">
          <ul class="breadcrumb">
            <li class="breadcrumb__item breadcrumb__item--hide">
              <router-link :to="{ name: 'Home' }" class="breadcrumb__link"
                ><span class="breadcrumb__span">صفحه اصلی</span></router-link
              >
            </li>
            <li class="breadcrumb__item">
              <a href="" class="breadcrumb__link"
                ><span class="breadcrumb__span">دسته بندی محصولات</span></a
              >
            </li>
          </ul>
          <div class="products">
            <router-link
              v-for="product in allProducts"
              :key="product.id"
              :to="{ name: 'Products', params: { id: product.id } }"
              class="products__item"
            >
              <div class="card">
                <div class="card__image">
                  <img
                    :src="require(`@/assets/img/slider/${product.id}.jpg`)"
                    alt=""
                    class="card__img"
                  />
                </div>
                <div class="card__title">گوشی موبایل {{ product.name }}</div>
                <div class="card__price">
                  <span class="card__compare-price"
                    >{{ makeMoneyIR(12400000) }} تومان</span
                  >
                  <span class="card__total-price"
                    >{{ makeMoneyIR(product.price) }} تومان</span
                  >
                </div>
                <span class="card__discount">%6</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import makeMoneyIR from "@/components/MakeMoneyIr.js";
export default {
  data: () => ({
    isBrandsShow: true,
    isColorsShow: true,
    selectedFilters: [],
  }),

  methods: {
    removeFilter(filterName) {
      // First way:
      // if (this.selectedFilters.find((item) => item === filterName)) {
      //   this.selectedFilters.splice(
      //     this.selectedFilters.indexOf(filterName),
      //     1
      //   );
      // }

      // Second way:
      this.selectedFilters = this.selectedFilters.filter(
        (item) => item !== filterName
      );
    },

    makeMoneyIR,
  },
  computed: {
    // ...mapGetters(["allProducts", "productsCount", "getUserInfo"]),
    ...mapGetters("products", ["allProducts", "productsCount"]),
    ...mapGetters("user", ["getUserInfo"]),
    // ...mapState(["allProducts", "user"]),
  },
  created() {
    this.$store.dispatch("products/getProducts");
    // console.log(this.$store.getters.getUserInfo);
    // console.log(this.$store.getters["user/getUserInfo"]);
  },
};
</script>

<style scoped>
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0;
} */
.fade-enter-active {
  animation: slide-down 0.9s ease;
}
.fade-leave-active {
  animation: slide-up 0.5s ease -0.5s;
}
@keyframes slide-up {
  from {
    overflow: hidden;
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slide-down {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* -------------------------------------- */
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}
</style>
