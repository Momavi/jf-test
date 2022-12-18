<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<template>
  <div class="content">
    <div class="content__wrapper" v-if="store.state.currentEmployee">
      <img class="content__image" src="@/assets/image/template-big.png" />
      <div class="content__text">
        <p class="content__text-name">{{ store.state.currentEmployee.name }}</p>
        <p class="content__text-email"><b>email:</b> <span>{{ store.state.currentEmployee.email }}</span></p>
        <p class="content__text-phone"><b>phone:</b> {{ store.state.currentEmployee.phone }}</p>
        <p class="content__text-about"><b>О себе</b></p>
        <p class="content__text-about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <span class="content-placeholder" v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </span>
  </div>
</template>

<style scoped lang="scss">
.content {
  position: relative;
  width: 80%;
  background: #ffffff;
  border-left: 1px solid #dededd;
  border-radius: 0px 10px 10px 0px;
  padding-bottom: 60px;
  padding-right: 10px;

  &__wrapper {
    padding: 30px;
    display: flex;
  }

  &__image {
    height: 286px;
  }

  &__text {
    margin-left: 6%;
    padding-left: 3px;

    &-name {
      @include text-600-16px;
      color: #000;
      margin-top: 0;
      margin-bottom: 8px;
    }

    &-email {
      @include text-600-14px;
      margin-top: 0;
    }

    &-phone {
      @include text-600-14px;
      margin-bottom: 22px;
    }

    &-about {
      @include text-600-16px;
      margin-bottom: 25px;
      &-text {
        @include text-400-14px;
      }
    }
  }

  &-placeholder {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @include text-400-14px;
  }
}
</style>