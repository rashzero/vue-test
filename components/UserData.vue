<template>
  <div>
    <form>
      <input
        name="Name"
        id="name"
        type="text"
        placeholder="Your name"
        minlength="2"
        maxlength="60"
        v-on:input="handleChangeInput('name', $event)"
        v-model="user.name"
      >
      <input
        name="Surname"
        id="surname"
        type="text"
        placeholder="Your surname"
        minlength="2"
        maxlength="60"
        v-on:input="handleChangeInput('surname', $event)"
        v-model="user.surname"
      >
      <input
        name="Phone number"
        type="tel"
        id="phone"
        placeholder="+380 XX XXX XX XX"
        pattern="^[+]{0,1}380([0-9]{9})$"
        minlength="13"
        maxlength="13"
        v-on:input="handleChangeInput('phone', $event)"
        v-model="user.phone"
      >
      <input
        name="Email"
        type="email"
        id="email"
        placeholder="Your email"
        pattern="^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$)"
        minlength="2"
        maxlength="100"
        v-on:input="handleChangeInput('email', $event)"
        v-model="user.email"
      >
      <button type="button" v-on:click="addUser">Save</button>
      <v-dialog v-model="menu" hide-overlay>
        <v-card>
          <v-card-text>
            <h1>{{ message }}</h1>
            <button type="button" v-on:click="handleClose">Close</button>
          </v-card-text>
        </v-card>
      </v-dialog>
    </form>
    <br>
    <InputJsonUsers/>
  </div>
</template>

<script>
import InputJsonUsers from "/components/InputJsonUsers";

export default {
  name: "UserData",
  components: {
    InputJsonUsers
  },

  props: ["id"],

  data() {
    return {
      user: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        id: ""
      },
      inputs: [],
      menu: false,
      message: ""
    };
  },

  mounted() {
    if (this.id) {
      const editUser = this.getUsers.find(user => user.id === this.id);
      this.user = editUser;
    }
  },

  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    }
  },

  methods: {
    addUser() {
      this.menu = !this.menu;
      if (this.id) {
        this.user.id = this.id;
        this.$store.dispatch("editUser", this.user);
        this.message = "User changed successfully";
      } else {
        this.user.id = this.getUsers[this.getUsers.length - 1].id + 1;
        this.$store.dispatch("addUser", this.user);
        this.message = "The user was added successfully";
      }
    },

    handleChangeInput(id, event) {
      this.user[id] = event.target.value;
      console.log(this.user);
    },

    handleClose() {
      this.message = "";
      this.menu = false;
    }
  }
};
</script>