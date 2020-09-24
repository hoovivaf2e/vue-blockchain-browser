<template>
  <div style="padding:0 60px">
    <table
      class="table table-hover table-bordered"
      style="table-layout:fixed;word-wrap:break-word;"
    >
      <thead>
        <tr>
          <th width="20%">項目</th>
          <th width="80%">值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in itemList" :key="i">
          <td v-text="item.title"></td>
          <td v-text="item.value"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'BlockResult',
  data() {
    return {
      itemList: [
        { title: 'number', value: '1' },
        { title: 'hash', value: '123' },
        { title: 'parentHash', value: '456' },
      ],
    };
  },
};
</script>
