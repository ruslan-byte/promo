<template>
  <header class="header">
    <div class="header__container container">
      <NuxtLink to="/" class="header__logo">
        <img src="/logo.png"  alt="">
      </NuxtLink>
      <div class="header__links">
        <NuxtLink to="/">Ссылка</NuxtLink>
        <NuxtLink to="/">Ссылка</NuxtLink>
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
  border-bottom: 1px solid $border-color;
    &__container
    {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logo img{
      width: 80px;
      border-radius: 4px;
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