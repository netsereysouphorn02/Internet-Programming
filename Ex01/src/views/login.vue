<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="main">
        <div class="content">
                <div class="form">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Email Here"><br>
                    <input type="password" name="" placeholder="Enter Password Here"><br>
                    <button class="btnn"><a href="#">Login</a></button>
                    <p class="forget">Forget Password</p>
                </div>
        </div>
    </div>
  </main>
</template>

<style>
.main{
  display: flex;
  justify-content: center;
}
.form{
    width: 290px;
    background-color: rgb(131, 124, 124);
    transform: translate(0%,-5%);
    border-radius: 10px;
    padding: 25px;
}
.form h2{
    width: 220px;
    font-family: sans-serif;
    text-align: center;
    color: #ff7200;
    font-size: 22px;
    background-color: #fff;
    border-radius: 10px;
    margin: 2px;
    padding: 8px;
}

.form input{
    width: 240px;
    height: 35px;
    background: transparent;
    border-bottom: 1px solid #ff7200;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1px;
    margin-top: 30px;
    font-family: sans-serif;
}

.form input:focus{
    outline: none;
}

::placeholder{
    color: #fff;
    font-family: Arial;
}

.btnn{
    width: 240px;
    height: 40px;
    background: #ff7200;
    border: none;
    margin-top: 30px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    transition: 0.4s ease;
}
.btnn:hover{
    background: rgb(112, 104, 104);
    color: #439bee;
}
.btnn a{
    text-decoration: none;
    color: rgb(240, 233, 233);
    font-weight: bold;
}
.forget{
  color: #fff;
  text-align: center;
  padding: 10px;
}

</style>
