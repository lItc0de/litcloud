<template>
  <div class="drag-area" ref="dropArea">
    <slot />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const dropArea = ref<any>(null);
    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const highlight = () => {
      if (dropArea.value === null) return;

      dropArea.value.classList.add('highlight');
    };
    const unhighlight = () => {
      if (dropArea.value === null) return;

      dropArea.value.classList.remove('highlight');
    };
    const uploadFile = (file) => {
      console.log(file.name);
    };
    const handleFiles = (files) => {
      ([...files]).forEach(uploadFile);
    };
    const handleDrop = (e) => {
      const dt = e.dataTransfer;
      const { files } = dt;

      handleFiles(files);
    };

    onMounted(() => {
      console.log('Component is mounted!');
      if (!dropArea.value) return;

      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        dropArea.value.addEventListener(eventName, preventDefaults, false);
      });

      ['dragenter', 'dragover'].forEach((eventName) => {
        dropArea.value.addEventListener(eventName, highlight, false);
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        dropArea.value.addEventListener(eventName, unhighlight, false);
      });
      dropArea.value.addEventListener('drop', handleDrop, false);
    });

    return { dropArea };
  },
};
</script>
