<template>
  <div>
    <router-link :to="{ path: '/user' }">
      <button type="button">
        <span>Add user</span>
      </button>
    </router-link>
    <br>
    <table>
      <tr>
        <td>Name</td>
        <td>Surname</td>
        <td>Phone</td>
        <td>Email</td>
        <td>Action</td>
      </tr>
      <tr v-for="user in getUsers" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button type="button" v-on:click="deleteUser(user.id)">delete</button>
          <br>
          <router-link :to="{ path: '/user', query: { id: user.id }}">
            <button type="button">
              <span>Edit</span>
            </button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Main",

  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    }
  },

  methods: {
    deleteUser(userId) {
      this.$store.dispatch("deleteUser", userId);
    }
  }
};
</script>

