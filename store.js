import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  users: [
    {
      id: 1,
      name: "Kolya",
      surname: "West",
      phone: "+380123456789",
      email: "wes@skjfkd.fe"
    }
  ]
};

const mutations = {
  ADD_USER(state, payload) {
    state.users.push(payload);
  },

  ADD_USERS_JSON(state, payload) {
    const arrUsers = payload.split("; ");
    console.log(arrUsers);
    const structuredUserData = arrUsers.map(function(user) {
      return user.split(" ");
    });
    console.log(structuredUserData);
    let id = state.users.length;
    const arrUsersNew = structuredUserData.map(function(user) {
      return {
        id: ++id,
        name: user[0],
        surname: user[1],
        phone: user[2],
        email: user[3]
      };
    });
    console.log(arrUsersNew);
    const newStateUsers = state.users.concat(arrUsersNew);

    state.users = newStateUsers;
    console.log(state.users);
  },

  DELETE_USER(state, payload) {
    const userIndex = state.users.findIndex(user => user.id === payload);
    state.users.splice(userIndex, 1);
  },

  EDIT_USER(state, payload) {
    const userIndex = state.users.findIndex(user => user.id === payload.id);
    state.users.splice(userIndex, 1, payload);
  }
};

const actions = {
  addUser(context, user) {
    context.commit("ADD_USER", user);
  },

  addUsersJson(context, usersArr) {
    context.commit("ADD_USERS_JSON", usersArr);
  },

  deleteUser(context, userId) {
    context.commit("DELETE_USER", userId);
  },

  editUser(context, user) {
    context.commit("EDIT_USER", user);
  }
};

const getters = {
  getUsers(state) {
    return state.users;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
