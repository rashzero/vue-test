<template>
  <div>
    <form>
      <div data-app>
        <span>Введите массив пользователей в формате JSON</span>
        <v-icon class="infoButton" @click="menuHelper = !menuHelper">?</v-icon>
        <v-dialog v-model="menuHelper" hide-overlay>
          <v-card>
            <v-card-text>
              <h1>"Tom Green +380123456789 tom@gmail.com; Bill White"</h1>
              <button type="button" v-on:click="handleClose">Close</button>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <input type="text" v-on:input="handleChenge">
      <button type="button" v-on:click="addUsersJson">Save</button>
      <v-dialog v-model="menu" hide-overlay>
        <v-card>
          <v-card-text>
            <h1>{{ message }}</h1>
            <button type="button" v-on:click="handleClose">Close</button>
          </v-card-text>
        </v-card>
      </v-dialog>
    </form>
    <router-link :to="{ path: '/main' }">
      <button type="button">
        <span>Back</span>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "InputJsonUsers",

  data() {
    return {
      arrJson: "",
      menuHelper: false,
      menu: false,
      message: ""
    };
  },

  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    }
  },

  methods: {
    addUsersJson() {
      const stringUsers = JSON.parse(this.arrJson);
      console.log(stringUsers);
      this.$store.dispatch("addUsersJson", stringUsers);
      this.message = "The users was added successfully";
      this.menu = !this.menu;
    },

    handleChenge: function(event) {
      this.arrJson = event.target.value;
    },

    handleClose() {
      this.message = "";
      this.menu = false;
      this.menuHelper = false;
    }
  }
};
</script>
