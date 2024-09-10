<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Save to Firebase</button></p>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
  import { useRouter } from "vue-router"
  
  const email = ref("")
  const password = ref("")
  const router = useRouter()
  const auth = getAuth()
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
    console.log("Firebase Register Successful!");

    // 获取用户信息
    const user = data.user;
    console.log("User ID:", user.uid); // 输出用户唯一标识符
    console.log("User Email:", user.email); // 输出用户邮箱

    // 跳转到登录页面
    router.push("/FireLogin");
  })
  .catch((error) => {
    console.log(error.code);
  });
  };
</script>