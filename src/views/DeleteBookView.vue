<template>
    <div>
        <h1>Delete Book</h1>
        <form @submit.prevent="deleteBook">
            <div>
                <label for="isbn">ISBN: </label>
                <input type="text" v-model="isbn" id="isbn" required />
            </div>
            <div>
                <label for="name">Name: </label>
                <input type="text" v-model="name" id="name" required />
            </div>
            <button type="submit">Delete Book</button>
        </form>
        <BookList></BookList>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { doc, deleteDoc, getDocs, query, where, collection } from 'firebase/firestore';
import db from '@/firebase/init';
import BookList from '@/components/BookList.vue';

const isbn = ref('');
const name = ref('');

const deleteBook = async () => {
    try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number');
            return;
        }

        // Query the Firestore collection for the book to find its document ID
        const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber), where('name', '==', name.value));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (docSnap) => {
            // Delete the document
            await deleteDoc(doc(db, 'books', docSnap.id));
        });

        
        alert('Book deleted successfully!');
        

        // Clear the input fields
        isbn.value = '';
        name.value = '';
    } catch (error) {
        alert('No matching book found!');
        console.error('Error deleting book: ', error);
    }
};


</script>

<style></style>