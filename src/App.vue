<script setup>
import SearchCard from "@/components/SearchCard.vue";
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <p class="header__logo">Жилфонд</p>
      <p class="header__text">Пользователь</p>
    </header>
    <main>
      <SearchCard />
    </main>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 1266px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__logo {
    @include logo;
  }
  &__text {
    @include text-400-16px-lh20;
    margin-top: 7px;
    margin-right: 1px;
  }
}
</style>
