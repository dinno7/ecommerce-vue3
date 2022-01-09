<template>
  <main class="main">
    <div class="account">
      <div class="container">
        <h1 class="account__title">ثبت نام در سایت</h1>
        <div class="account__form">
          <form action="">
            <input type="text" class="txt" placeholder="نام و نام خانوادگی" />
            <input type="text" class="txt txt--left" placeholder="ایمیل" />
            <input
              type="text"
              class="txt txt--left"
              placeholder="شماره موبایل"
            />
            <input type="text" class="txt txt--left" placeholder="رمز عبور" />
            <button
              class="btn btn--brand btn--boxshadow w--100 margin--bottom-10"
              style="margin-bottom: 10px"
            >
              ورود به سایت
            </button>
            <button class="btn btn--cancel btn--cancel w--100">انصراف</button>

            <div class="account__footer">
              <span>کاربر جدید هستید ؟ </span>
              <router-link :to="{ name: 'Login' }" class="account__router"
                >صفحه ورود</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
