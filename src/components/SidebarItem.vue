<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const selected = reactive({
  id: -1,
});

function setCurrentEmployee(item, index) {
  selected.id = index;
  store.commit("setCurrentEmployee", item);
}
</script>

<template>
  <div v-for="(item, index) in store.state.employee" :key="index">
    <div class="item" @click="setCurrentEmployee(item, index)">
      <img src="@/assets/image/template.png" />
      <div
        class="item-text"
        :class="{ 'item-selected': selected.id === index }"
      >
        <span class="item-name">
          {{ item ? item.username : "Не верное имя" }}
        </span>
        <span class="item-email">{{ item ? item.email : "" }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  position: relative;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 4px;
  margin-bottom: 18px;
  cursor: pointer;

  &:hover {
    @include hover;
  }

  &-selected {
    width: 100%;
    background: #e0e0e0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 0px;
    & .item-name {
      margin-left: 12px;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  &-name {
    @include text-600-14px;
    margin-bottom: 5px;
  }

  &-email {
    @include text-400-14px;
  }
}
</style>
