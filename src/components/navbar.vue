<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-brand
      href="#"
      style="color: orange; font-weight: bold;font-size: x-large;"
      >BlockChain Explore</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link
            to="/block"
            style="color: white; font-weight: bold;font-size: x-large;"
            duration="1000"
            >Blocks</router-link
          >
        </b-nav-item>
        <b-nav-item>
          <router-link
            to="/transaction"
            style="color: white; font-weight: bold;font-size: x-large;"
            duration="1000"
            >Transactions</router-link
          >
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
    <div>
      <b-navbar-nav class="ml-auto">
        <b-col sm="20">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="hash ,number, address, block size"
            label="找區塊？還是要找交易？都在區塊GO"
            v-model="insert"
            style="width: 230px"
          ></b-form-input>
        </b-col>
        <b-button size="sm">search</b-button>
      </b-navbar-nav>
      <b-modal id="modal-1" title="搜尋結果">
        <p class="my-4">{{ message }}</p>
      </b-modal>
    </div>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      insert: '123',
      message: '123',
    };
  },
};
</script>
