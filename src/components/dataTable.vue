<template>
  <div style="padding:0 60px">
    <table
      class="table table-hover table-bordered"
      style="table-layout:fixed;word-wrap:break-word;"
    >
      <thead>
        <tr>
          <th v-for="(data, i) in thList" :key="i">{{data}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in itemList" :key="i">
          <td>
            <button type="button" v-text="item.number"></button>
          </td>
          <td>
            <b-link
              href="javascript:void(0)"
              v-text="item.hash"
              style="display:block; overflow:hidden; text-overflow:ellipsis;white-space:nowrap;"
            ></b-link>
          </td>
          <td></td>
          <td v-text="item.size"></td>
        </tr>
      </tbody>
    </table>
    <!-- paging -->
    <div style="margin-bottom: 30px;text-align:center;">
      <b-input-group size="sm" style="width: 330px;margin: 0px auto;text-align:center">
        <b-input-group-prepend>
          <b-button variant="outline-info" style="font-size:small">第一頁</b-button>
        </b-input-group-prepend>
        <b-input-group-prepend>
          <b-button variant="outline-info" style="font-size:small">上一頁</b-button>
        </b-input-group-prepend>
        <b-form-input
          min="1"
          :max="total_pages.toString()"
          type="number"
          v-model.number="current_page"
          onkeyup="value=value.replace(/[^\w_]/g,'');"
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-info" style="font-size:small">下一頁</b-button>
        </b-input-group-append>
        <b-input-group-append>
          <b-button variant="outline-info" style="font-size:small">最後一頁</b-button>
        </b-input-group-append>
      </b-input-group>
      <div style="margin: 5px">
        <a>總共{{total_pages}}頁</a>
      </div>
      <b-modal id="modal-2" title="搜尋結果">
        <p class="my-4">{{errMessage}}</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total_pages: 1,
      current_page: 1,
      errMessage: '',
      thList: ['交易哈希值', '區塊號', 'from', 'to'],
      itemList: [{ number: 1, hash: 123, size: 10 }],
    };
  },
};
</script>
