<template>
    <div v-if="jsonData">
            <pre>{{ formattedJsonData }}</pre> <!-- 用 <pre> 标签保持格式 -->
    </div>
</template>


<script>
// import axios from 'axios';
import { collection, query, getDocs } from 'firebase/firestore';
import db from '../firebase/init.js'
export default {
    data() {
        return {
            error: null,
            jsonData: null,
            q: null
    };
    },
    computed: {
        formattedJsonData() {
            return JSON.stringify(this.jsonData, null, 2); 
        }
    },
    methods: {
        async getAllBookAPI() {
            try {
                this.q = query(collection(db, 'books'));
                const querySnapshot = await getDocs(this.q);
                this.jsonData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                this.error = null;
            } catch(error) {
                console.error(error);
                this.error = error;
            }
        },
    },
    mounted() {
        this.getAllBookAPI();
    }
}
</script>

<style>

</style>