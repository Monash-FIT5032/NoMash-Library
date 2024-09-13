<template>
  <div class="card">
    <DataTable :value="books" tableStyle="min-width: 50rem">
      <Column field="isbn" header="ISBN"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="action" header="Actions">
        <template #body="slotProps">
          <button @click="navigateToEditBook(slotProps.data.id)" style="font-size: 12px; padding: 4px 8px;">Edit book</button>
          <button @click="removeBook(slotProps.data.id)" style="font-size: 12px; padding: 4px 8px;">Delete book</button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import db from '../firebase/init.js';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { collection, query, where, orderBy, limit, getDocs, doc, deleteDoc } from 'firebase/firestore';

export default {
  components: {
    DataTable,
    Column,
  },
  setup() {
    const books = ref([]);
    const router = useRouter();

    const fetchBooks = async () => {
      try {
        // Create a query to retrieve books with isbn > 0, ordered by name, and limit the results to 10
        const q = query(
          collection(db, 'books'), 
          where('isbn', '>', 0),
          orderBy('isbn'),
          limit(7)
        );

        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
        console.log("booklist: ", books.value);
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    const navigateToEditBook = (id) => {
      router.push({ name: 'editBook', params: { bookid: id } });
    };

    const removeBook = async (id) => {
      try {
        await deleteDoc(doc(db, "books", id));
        alert("Remove success");
        fetchBooks(); // Refresh the list after deleting
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books,
      navigateToEditBook,
      removeBook
    };
  }
};
</script>