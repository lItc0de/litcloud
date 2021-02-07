<template>
  <div class="file">
    <img src="" alt="file" :id="fileId" />
    <label :for="fileId">{{ fileName }}</label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    fileId: String,
    fileName: String,
  },
})
export default class File extends Vue {
  fileId!: string;

  fileName!: string;
}
</script>
