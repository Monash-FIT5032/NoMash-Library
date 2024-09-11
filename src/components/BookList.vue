<template>
    <div>
        <form @submit.prevent="queryBooks">
            <div>
                <label for="isbn">ISBN: </label>
                <input type="text" v-model="isbn" id="isbn"  />
            </div>
            <div>
                <label for="queryType">Equal: </label>
                <input type="radio" v-model="queryType" id="queryType" value="=="  />
                <label for="queryType">Greater than: </label>
                <input type="radio" v-model="queryType" id="queryType" value=">"  />
                <label for="queryType">Less than: </label>
                <input type="radio" v-model="queryType" id="queryType" value="<"  />
            </div>
            <div>
                <label for="name">Name: </label>
                <input type="text" v-model="name" id="name"  />
            </div>
            <div>
                <label for="limitNumber">Limit: </label>
                <input type="number" v-model="limitNumber" id="limitNumber"  />
            </div>
            <div>
                <label for="orderType">DESC: </label>
                <input type="radio" v-model="orderType" id="orderType" value="desc"  />
                <label for="orderType">ASC: </label>
                <input type="radio" v-model="orderType" id="orderType" value="asc"  />
            </div>
            <button type="submit">Query Book</button>
        </form>
        <ul>
            <h1>Books with ISBN > 1000</h1>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
        <ul v-if="queryResult.length > 0">
            <h1>Query Result</h1>
            <li v-for="query in queryResult" :key="query.id">
                {{ query.name }} - ISBN: {{ query.isbn }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import db from '../firebase/init.js'
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';


const books = ref([]);
const name = ref('')
const isbn = ref('')
const queryType = ref('')
const limitNumber = ref()
const orderType = ref('')
const queryResult = ref([])

const fetchBooks = async () => {
    try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
            booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
    } catch (error) {
        console.error('Error fetching books: ', error);
    }
};

const queryBooks = async () => {
    const isbnNumber = Number(isbn.value);
    try {
        let q = query(
            collection(db, 'books'));

        if (queryType.value !== '') {
            if (isNaN(isbnNumber)) {
                alert('ISBN must be a valid number');
                return;
            }
            q = query(q, where('isbn', queryType.value, isbnNumber));
        }
        if (name.value !== '') {
            q = query(q, where('name', "==", name.value));
        }
        // Apply orderBy based on the selected order type (ASC or DESC)
        if (orderType.value !== '') {
            q = query(q, orderBy('isbn', orderType.value));
        }

        // Apply limit based on user input
        if (limitNumber.value !== '') {
            q = query(q, limit(Number(limitNumber.value)));
        }
        
        const querySnapshot = await getDocs(q);

        const booksArray = [];
        querySnapshot.forEach((doc) => {
            booksArray.push({ id: doc.id, ...doc.data() });
        });
        queryResult.value = booksArray;
        console.error(booksArray)
        alert('Query Successfully')
    } catch (error) {
        console.error(error)
    }
};



onBeforeMount(() => {
    fetchBooks();
});



</script>

<style></style>