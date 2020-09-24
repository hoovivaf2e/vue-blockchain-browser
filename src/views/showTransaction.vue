<template>
  <div class="recent">
    <h4>近期交易列表</h4>
    <data-table></data-table>
  </div>
</template>

<script>
import dataTable from '../components/dataTable.vue';

export default {
  components: {
    dataTable,
  },
  data() {
    return {
      blockList: [{ number: 0, transactions: [], gasUsed: 0 }],
      current_page: 1,
      total_pages: 1,
      errMessage: '',
      page: 1,
      secCount: 0,
      blockHeight: 0,
      chartData: {
        columns: ['BlockNum', '出塊時間', '交易數量', 'GasUsed'],
        rows: [],
      },
    };
  },
  filters: {},
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.border-setting {
  width: 90%;
  margin: 0 auto;
}
.chain-info {
  color: #0690a6;
  padding-top: 10px;
  width: 23%;
  height: 125px;
  margin-right: 10px;
  display: inline-block;
  background-color: #cfe8ec49;
  border-radius: 10px;
}
.info-content {
  color: #6c757d;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
}
</style>
