<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img src="logo.png" alt="">
      </div>
      <div class="header__links">
        <NuxtLink to="/">Обо мне</NuxtLink>
        <NuxtLink to="/">Портфолио</NuxtLink>
      </div>
    </div>
  </header>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.header {
  background: $main-bg-color;
  padding: 12px 0;
    &__container
    {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logo img{
      width: 42px;
    }
    &__links a{
      display: inline-block;
      margin-right: 12px;
    }
    @media (min-width: $tablet) {
        .header__links a {margin-right: 24px;}
    }
}
</style>