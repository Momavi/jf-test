<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const searchText = ref("");

function searchEmployee(value) {
  if (value.length) store.dispatch("getEmployee", value);
}
</script>

<template>
  <input
    v-model="searchText"
    @keyup.enter="searchEmployee(searchText)"
    type="text"
    class="sidebar-input"
    placeholder="Введите Id или имя"
  />
</template>

<style scoped lang="scss">
.sidebar-input {
  width: 90%;
  height: 42px;
  margin: 0 0 30px 0;
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
</style>
