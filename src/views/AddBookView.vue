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
import { db } from '../firebase/init.js'; // Ensure this import is correct
import { collection, addDoc } from 'firebase/firestore';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      const isbnNumber = Number(isbn.value);
      console.log("ISBN Input:", isbn.value);
      console.log("Converted ISBN Number:", isbnNumber);

      if (isNaN(isbnNumber)) {
        alert('ISBN must be a valid number');
        console.error('Invalid ISBN entered');
        return;
      }

      try {
        console.log('Attempting to add book to Firestore...');
        const docRef = await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value,
        });
        console.log('Document written with ID: ', docRef.id);

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error.message);
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
