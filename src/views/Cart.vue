<template>
  <main class="main">
    <div class="container">
      <div class="cart">
        <h1 class="cart__title">سبد خرید</h1>
        <form action="">
          <div class="cart__item" v-for="item in itemsInCart" :key="item.id">
            <div class="cart__row">
              <div class="cart__image">
                <a href="" class="cart__image-link"
                  ><img
                    :src="require(`@/assets/img/slider/${item.id}.jpg`)"
                    alt="item"
                    class="cart__image-img"
                /></a>
              </div>
              <div class="cart__details">
                <h5 class="cart__details-h5">
                  <a href="" target="_blank" class="cart__details-link">{{
                    item.name
                  }}</a>
                </h5>
                <div class="cart__deatils-features">
                  تعداد: {{ item.count }}
                </div>
                <div class="cart__deatils-code">
                  قیمت :{{ makeMoneyIR(item.price) }}
                </div>
              </div>
              <div class="cart__amounts">
                <div
                  class="cart__amounts-div"
                  style="display: flex;justify-content; flex-direction: column; gap: 0.5rem"
                >
                  <input
                    type="number"
                    class="txt"
                    placeholder="تعداد"
                    max="1000"
                    min="1"
                    v-model="item.count"
                  />

                  <router-link
                    to=""
                    class="add__btn"
                    style="font-size: 16px"
                    @click="
                      pleaseSetNewCount({
                        name: item.name,
                        id: item.id,
                        count: item.count,
                      })
                    "
                  >
                    افزودن محصول
                  </router-link>
                  <router-link
                    to=""
                    class="cart__amounts-remove btn--red"
                    style="font-size: 16px"
                    @click="pleaseRemoveProductFromCart(item.id)"
                  >
                    حذف
                  </router-link>

                  <router-link
                    :to="{ name: 'Products', params: { id: item.id } }"
                    class="btn btn--brand-m"
                  >
                    مشاهده محصول
                  </router-link>
                  <p class="full-price-sm">
                    کل: {{ makeMoneyIR(item.price * item.count) }} تومان
                  </p>
                </div>
              </div>
              <div class="cart__total">
                <div class="cart__total-div" style="margin-right: -5px">
                  <h6 class="cart__total-title">جمع</h6>
                  {{ makeMoneyIR(item.price * item.count) }} تومان
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="cart__info">
          <div class="cart__coupon">
            <form action="">
              <div class="cart__coupon-div">
                <input
                  type="text"
                  placeholder="کوپن خود را بنویسد"
                  class="cart__coupon-input"
                />
                <button class="btn-coupon">اعمال</button>
              </div>
            </form>
          </div>
          <div class="cart__table">
            <table>
              <tbody>
                <tr>
                  <th>جمع کل</th>
                  <td>{{ makeMoneyIR(subTotlaPrice) }} تومان</td>
                </tr>
                <tr>
                  <th>وزن</th>
                  <td>700 گرم</td>
                </tr>
                <tr>
                  <th>مالیات</th>
                  <td>{{ makeMoneyIR(fee) }} تومان</td>
                </tr>
                <tr>
                  <th>تخفیف</th>
                  <td class="text-red">0 تومان</td>
                </tr>
                <tr>
                  <th>قابل پرداخت</th>
                  <td class="text-blue">{{ makeMoneyIR(totlaPrice) }} تومان</td>
                </tr>
              </tbody>
            </table>
            <router-link
              :to="{ name: 'Login' }"
              class="btn btn--brand btn--boxshadow"
              >ثبت سفارش</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import makeMoneyIR from "@/components/MakeMoneyIr.js";
export default {
  computed: {
    ...mapGetters("cart", [
      "itemsInCart",
      "subTotlaPrice",
      "fee",
      "totlaPrice",
    ]),
  },
  methods: {
    makeMoneyIR,
    ...mapActions("cart", ["removeFromCart", "setNewCount"]),

    pleaseRemoveProductFromCart(id) {
      this.removeFromCart(id);
    },
    pleaseSetNewCount(productInfo) {
      this.setNewCount(productInfo);
      this.$swal(
        `تعداد جدید برای محصول ${productInfo.name} با موفقیت ذخیره شد.`,
        "",
        "success"
      );
    },
  },
};
</script>

<style>
.add__btn {
  padding: 2px 25px;
  margin-top: -5px;
  cursor: pointer;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 3px;
  user-select: none;
  margin-bottom: 15px;
  background: #42cf3d;
  color: rgb(255, 255, 255);
  text-align: center;
}

.add__btn:hover {
  background: #4ef148;
}
</style>
