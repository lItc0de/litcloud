<template>
  <div class="home">
    <File
      v-for="{ fileId, fileName } in files"
      :fileId="fileId"
      :fileName="fileName"
      :key="fileId"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import File from '@/components/File.vue';

@Options({
  components: {
    File,
  },
})
export default class Home extends Vue {
  files: File[] = [
    {
      fileName: 'lol',
      fileId: '1',
    } as File,
    {
      fileName: 'lala',
      fileId: '2',
    } as File,
  ];
}
</script>
