<template>
  <div>
    <h3>Welcome Home</h3>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",
    };
  },

  created() {
    if (!document.cookie) {
      this.$router.push("/login");
    } else {
      this.getUser();
    }
  },

  methods: {
    async getUser() {
      const res = await axios({
        method: "get",
        url: "http://localhost:3001/auth/me",
        withCredentials: true,
      });

      console.log("get user", res.data);
      this.user = res.data.data;
    },

    async logout() {
      const res = await axios({
        method: "get",
        url: "http://localhost:3001/auth/logout",
        withCredentials: true,
      });

      console.log("logout");
      if (res.data.success) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
