<template>
    <div class="register">
      <form id="form">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />
          <label for="firstName"><b>First Name</b></label>
          <input type="text" placeholder="Enter First Name" name="firstName" required/>
          <label for="lastName"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Last Name" name="lastName" required/>
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required/>
          <label>
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom: 10px"/>
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="#" style="color: blue">Terms & Privacy</a>.
          </p>
            <button type="submit" class="signup">Sign Up</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  components: {
    
  },
};
</script>

<style>
.register {
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 20px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  width: 100%;
}
.signup {
  float: left;
  width: 50%;
}

.container {
  padding: 16px;
  max-width: 500px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

</style>
