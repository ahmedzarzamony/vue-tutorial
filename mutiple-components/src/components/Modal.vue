<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale', winner: theme === 'winner'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['header', 'text', 'theme'],
        methods: {
            closeModal(){
                this.$emit('close')
            }
        },
    }
</script>

<style>
    .modal{
        width:400px;
        padding:20px;
        margin:100px auto;
        background: #fff;
        border-radius: 10px;
    }
    .backdrop{
        position: fixed;
        top:0;
        background-color: rgba(0,0,0,.5);
        width:100%;
        height: 100%;
    }
    .modal h1{
        text-align: center;
        margin-bottom: 15px;
    }
    .modal p{
        text-align: center;
        font-size: 16px;
    }
    .modal.sale{
        background: rgb(195, 2, 2);
        color:#fff;
    }
    .modal.winner{
        background: rgb(3, 98, 3);
        color:#fff;
    }
</style>