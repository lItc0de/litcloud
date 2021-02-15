<template>
  <div class="home">
    <DragArea>
      <File
        v-for="{ _id, filename } in files"
        :fileId="_id"
        :fileName="filename"
        :key="_id"
      />
    </DragArea>
  </div>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable';
import getFiles from '@/graphql/getFiles.gql';
import { GetFilesDto } from '@/graphql/@types/getFiles.d';

import File from '@/components/File.vue';
import DragArea from '@/components/DragArea.vue';

export default {
  components: {
    File,
    DragArea,
  },

  setup() {
    const { result } = useQuery<GetFilesDto>(getFiles);

    const files = useResult(result, [], (data) => data.files);

    return { files };
  },
};
</script>
