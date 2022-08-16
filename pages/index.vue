<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <h1>Hello {{ user.displayName }}</h1>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IndexPage',
  middleware: 'auth',
  computed: mapState({
    user: (state) => state.user,
  }),
};
</script>
