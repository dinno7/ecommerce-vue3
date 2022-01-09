<template>
  <div class="telegram">
    <a href="https:t.me/dinnolearn">
      <svg
        width="50"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="telegram-plane"
        class="svg-inline--fa fa-telegram-plane fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
        />
      </svg>
      <span style="font-size: 20px; font-weight: 500">تلگرام</span>
    </a>
  </div>
</template>
<style scoped>
.telegram {
  background: #fff;
  box-shadow: 0 0 10px 2px rgba(14, 14, 14, 0.13);
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  color: white;
  position: relative;
  transition: all 0.5s ease;
  opacity: 0.8;
}
.telegram:hover {
  background: #4dabf7;
}
.telegram:hover a {
  color: #fff;
  transition: all 0.5s ease;
  opacity: 1;
}
.telegram a {
  color: black;
  display: flex;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
