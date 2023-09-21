<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <p class="header__logo">Жилфонд</p>
      <p class="header__text">Пользователь</p>
    </header>
    <main>
      <Card />
    </main>
  </div>
</template>

<style scoped lang="scss">
/* Общие стили для контейнера страницы */
.wrapper {
  max-width: 1266px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

/* Стили для шапки */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Стили для логотипа */
  &__logo {
    @include text-logo;
  }

  /* Стили для текста */
  &__text {
    @include text-400-16px;
    margin-top: 7px;
    margin-right: 5px;
  }
}
</style>
