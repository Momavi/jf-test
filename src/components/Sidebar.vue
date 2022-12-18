<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import SidebarItem from "@/components/SidebarItem.vue";

const store = useStore();
const searchText = ref("");

function searchEmployee(value) {
  store.dispatch("getEmployee", value);
}
</script>

<template>
  <div class="sidebar">
    <span class="sidebar-text">Поиск сотрудников</span>
    <input v-model="searchText" @keyup.enter="searchEmployee(searchText)" type="text" class="sidebar-input"
      placeholder="Введите Id или имя" />
    <span class="sidebar-text">Результаты</span>
    <span v-if="store.state.employee.length">
      <SidebarItem />
    </span>
    <span class="sidebar-subtext" v-else-if="store.state.employee == []">начните поиск</span>
    <span class="sidebar-subtext" v-else>ничего не найдено</span>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 20%;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  margin-right: 5px;

  &-text {
    @include text-600-16px;
  }

  &-input {
    width: 90%;
    height: 42px;
    margin: 15px 0 30px 0;
    padding-left: 15px;
    background: #ffffff;
    border: 1.5px solid #e9ecef;
    border-radius: 8px;
    cursor: auto;
    @include text-400-14px;

    &:focus {
      @include active;
    }

    &:hover {
      @include hover;
    }
  }

  &-subtext {
    @include text-400-14px;
    margin-top: 17px;
  }
}
</style>