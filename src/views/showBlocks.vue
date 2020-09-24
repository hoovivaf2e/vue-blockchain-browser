<template>
  <div class="recent">
    <div class="border-setting" v-if="page == '1'">
      <h4>區塊鏈資訊</h4>
      <div class="chain-info">
        區塊高度
        <div class="info-content">
          {{ blockList[0].number }}
        </div>
      </div>
      <div class="chain-info">
        等待出塊時間
        <div class="info-content">{{ secCount }}</div>
      </div>
      <div class="chain-info">
        最後區塊交易數
        <div class="info-content">{{ blockList[0].transactions.length }}</div>
      </div>
      <div class="chain-info">
        最後區塊Gas
        <div class="info-content">
          {{ blockList[0].gasUsed }}
        </div>
      </div>
      <br /><br />
      <hr size="8px" align="center" width="70%" />
      <ve-line v-if="blockList.length >= 10" style="width:90%; margin:0 auto;"
        :data="chartData" :settings="chartSettings"></ve-line>
      <hr size="8px" align="center" width="90%" />
    </div>
    <h4>近期區塊列表</h4>
    <data-table></data-table>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common';
import dataTable from '../components/dataTable.vue';

export default {
  components: {
    dataTable,
    VeLine,
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
