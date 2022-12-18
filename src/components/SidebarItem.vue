<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const selected = reactive({
  id: 0
});

function setCurrentEmployee(item) {
  selected.id = item.id
  store.commit("setCurrentEmployee", item)
}
</script>
<template>
  <div v-for="(item, index) in store.state.employee" :key="index" class="item" @click="setCurrentEmployee(item)">
    <img src="@/assets/image/template.png" />
    <div class="item-text" :class="selected.id === item.id ? 'item-selected' : ''">
      <span class="item-name" :class="selected.id === item.id ? 'item-selected-text' : ''">{{ item.username }}</span>
      <span class="item-email">{{ item.email }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  position: relative;
  display: flex;
  background: #FFFFFF;
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
    background: #E0E0E0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 0px;
    &-text{
      margin-left: 12px;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  &-name {
    margin-bottom: 5px;
    @include text-600-14px
  }

  &-email{
    @include text-400-14px
  }
}
</style>