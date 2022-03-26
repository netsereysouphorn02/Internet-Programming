<template>
  <div class="box">
    <div>
      <form id="loginForm">
        <div class="imgcontainer">
          <img src="../assets/avatar.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required/>

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required/>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="forgot">
          <span class="pwd">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    if (document.cookie) {
      this.$router.push("/");
    }
  },

  mounted() {
    let form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let username = e.target.username.value;
      let password = e.target.password.value;

      const login = await axios({
        method: "post",
        url: "http://localhost:3001/auth/login",
        data: {
          email: username,
          password: password,
        },
        withCredentials: true,
      });

      if (login.data.success) {
        this.$router.push("/");
      }

      console.log("login", login);
    });
  },
};
</script>

<style >
.box {
  display: flex;
  justify-content: center;
}
form {
  border: 3px solid #e7e2e2;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0 20px 0;
  display: inline-block;
  border: none;
  background: #e7e2e2;
}
button {
  background-color: #04aa6d;
  color: #fff;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
  max-width: 500px;
}

span.pwd {
  float: right;
  padding-top: 16px;
}
.forgot{
  padding: 10px;
}

</style>
