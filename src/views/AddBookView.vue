<script setup>
import { ref } from 'vue';
import { addDoc, collection } from "firebase/firestore";
import db from '@/firebase/init'; // Import your Firestore db instance

// Define references for the form fields
const isbn = ref('');
const name = ref('');
const message = ref('');

// Define an async function to handle form submission
const addBook = async () => {
  try {
    // Add new book details to the "books" collection in Firestore
    await addDoc(collection(db, 'books'), {
      isbn: Number(isbn.value),  // Save ISBN as a number
      name: name.value            // Save book name as a string
    });
    message.value = "Book added successfully!";
    // Clear form after submission
    isbn.value = '';
    name.value = '';
  } catch (error) {
    console.error("Error adding book: ", error);
    message.value = "Failed to add book!";
  }
};
</script>
