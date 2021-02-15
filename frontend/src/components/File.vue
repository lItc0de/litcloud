<template>
  <div class="file">
    <img src="" alt="file" :id="fileId" />
    <label :for="fileId">{{ fileName }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fileId: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  },
};
</script>
