<template>
  <div class="sidebar">
    <span class="sidebar-text">Поиск сотрудников</span>
    <SidebarInput />
    <span class="sidebar-text">Результаты</span>
    <Preloader v-if="isLoading" />
    <SidebarItem v-else-if="isEmployees" />
    <span class="sidebar-subtext" v-else-if="isEmptyState">начните поиск</span>
    <span class="sidebar-subtext" v-else>ничего не найдено</span>
  </div>
</template>

<script setup>
import SidebarItem from "@/components/SidebarItem.vue";
import SidebarInput from "@/components/SidebarInput.vue";
import Preloader from "@/components/Preloader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const isEmployees = computed(
  () =>
    (store.state.employee.length > 0 && !!store.state.employee[0]) ||
    store.state.employee.length > 1
);
const isLoading = computed(() => store.state.loading);
const isEmptyState = computed(() => store.state.employee.length === 0);
</script>

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
    margin-bottom: 16px;
  }

  &-subtext {
    @include text-400-14px;
    margin-top: 17px;
  }
}
</style>
