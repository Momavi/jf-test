<script setup></script>

<template>
  <div class="card">
    <div class="card__nav">
      <span class="card__nav-text">Поиск сотрудников</span>
      <input class="card__nav-input" placeholder="Введите Id или имя" />
      <span class="card__nav-text">Результаты</span>
      <span class="card__nav-subtext">начните поиск </span>
    </div>
    <div class="card__content">
      <span class="card__content-placeholder"
        >Выберите сотрудника, чтобы посмотреть его профиль</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 575px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  &__nav {
    width: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    margin-right: 5px;
    &-text {
      @include text-600-16px;
    }
    &-input {
      width: 218px;
      height: 42px;
      margin: 20px 0 23px 0px;
      padding-left: 15px;
      background: #ffffff;
      border: 1.5px solid #e9ecef;
      border-radius: 8px;
      @include text-400-14px;
    }
    &-subtext {
      @include text-400-14px;
      margin-top: 10px;
    }
  }
  &__content {
    width: 80%;
    background: #ffffff;
    border-left: 1px solid #dededd;
    border-radius: 0px 10px 10px 0px;
    padding-bottom: 60px;
    padding-right: 10px;
    &-placeholder {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @include text-400-14px;
    }
  }
}
</style>
