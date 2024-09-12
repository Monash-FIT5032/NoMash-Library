<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase/init.js'; // Check that this path is correct
import { collection, addDoc } from 'firebase/firestore';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      const isbnNumber = Number(isbn.value);
      if (isNaN(isbnNumber)) {
        alert('ISBN must be a valid number');
        return;
      }

      try {
        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value,
        });
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook,
    };
  },
};
</script>
