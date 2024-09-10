<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const adminEmail = "admin@163.com"

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      if (data.user.email == adminEmail){
        alert("Hi admin!")
        router.push('/Login')
      }else{
        alert("Congratulation! Login succeed!")
        router.push('/')
      }
      console.log("Firebase Sign In Successful!");

      // 获取用户信息
      const user = data.user;
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);

      // 跳转到首页
      router.push("/");

      // 打印当前已登录用户信息
      console.log(auth.currentUser);
    })
    .catch((error) => {
      // 错误处理
      console.log("Error Code:", error.code);
      console.log("Error Message:", error.message);
    });
};
</script>