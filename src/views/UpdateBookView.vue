<template>
    <div>
        <h1>Update Book</h1>
        <form @submit.prevent="updateBook">
            <div>
                <label for="isbn">ISBN: </label>
                <input type="text" v-model="isbn" id="isbn" required />
            </div>
            <div>
                <label for="name">Name: </label>
                <input type="text" v-model="name" id="name" required />
            </div>
            <div>
                <label for="isbn">New ISBN: </label>
                <input type="text" v-model="newIsbn" id="newIsbn" required />
            </div>
            <div>
                <label for="name">New Name: </label>
                <input type="text" v-model="newName" id="newName" required />
            </div>
            <button type="submit">Update Book</button>
        </form>
        <BookList></BookList>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import db from '@/firebase/init';
import BookList from '@/components/BookList.vue';

const isbn = ref('');
const name = ref('');
const newIsbn = ref('');
const newName = ref('');

const updateBook = async () => {
    try {
        const isbnNumber = Number(isbn.value);
        const newisbnNumber = Number(newIsbn.value);
        if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number');
            return;
        }
        if (isNaN(newisbnNumber)) {
            alert('New ISBN must be a valid number');
            return;
        }

        // Query Firestore for the book with the given ISBN
        const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber), where('name', '==', name.value));
        const querySnapshot = await getDocs(q);

        

        querySnapshot.forEach(async (docSnap) => {
            // Update the document with the new name
            await updateDoc(doc(db, 'books', docSnap.id), {
                isbn: newisbnNumber,
                name: newName.value
            });
            
        });

        
        alert('Book updated successfully!');

        // Clear input fields
        isbn.value = '';
        name.value = '';
        newIsbn.value = '';
        newName.value = '';
    } catch (error) {
        alert('No matching book found!');
        console.error('Error updating book: ', error);
    }
};


</script>

<style></style>