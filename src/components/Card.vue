<script setup>
import CardContent from "@/components/CardContent.vue";
import Sidebar from "@/components/Sidebar.vue"
</script>

<template>
  <div class="card">
    <Sidebar />
    <CardContent />
  </div>
</template>

<style scoped lang="scss">
/* Стили для внешнего контейнера карточки */
.card {
  width: 100%;
  height: 575px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
}
</style>
