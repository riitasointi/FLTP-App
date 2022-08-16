<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>Login</h1>
      <v-card class="pa-xs-5">
        <v-btn color="success" @click="createUser()">Create user</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoginPage',
  computed: mapState({
    user: (state) => state.user,
  }),
  methods: {
    async createUser() {
      try {
        const user = await this.$fire.auth.createUserWithEmailAndPassword(
          'riitasointi@gmail.com',
          'test1234'
        );
        console.log(user);
        user.user
          .updateProfile({
            displayName: 'ilkkap',
          })
          .then(
            function (user) {
              console.log('success');
              console.log(user);
            },
            function (error) {
              alert(error);
            }
          );
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
