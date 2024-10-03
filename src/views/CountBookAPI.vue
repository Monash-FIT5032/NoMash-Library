<template>
    <pre>{{ jsonData }}</pre>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            count: null,
            error: null,
            jsonData: null
    };
    },
    methods: {
        async getBookCountAPI() {
            try {
                const response = (await axios.get("https://countbooks-rhycfrq34q-uc.a.run.app"));
                this.jsonData = response.data;
                this.count = response.data.count;
                this.error = null 

            } catch(error) {
                console.error(error);
                this.error = error
                this.count = null
            }
        }
    },
    mounted() {
        this.getBookCountAPI();
    }
}
</script>

<style>

</style>