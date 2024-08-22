import { ref } from 'vue';
import router from '.';
export const isAuthenticated = ref(false);

export const login = (username, password) => {
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  if (username === hardcodedUsername && password === hardcodedPassword) {
    isAuthenticated.value = true;
  } else {
    isAuthenticated.value = false;
  }
};

export const logout = () => {
    isAuthenticated.value = false;
    router.push("/login")
};
