<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale', winner: theme === 'winner'}">
            <slot>Default content</slot>
            <div class="actions">
                <slot name="links">Default links, will only shows if the slot not has any</slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['theme'],
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
    .modal.sale{
        background: rgb(195, 2, 2);
        color:#fff;
    }
    .modal.winner{
        background: rgb(3, 98, 3);
        color:#fff;
    }
    .actions{
        text-align: center;
    }
    .actions a{
        display: inline-block;
        text-decoration: none;
        border:1px solid #fff;
        padding: 5px 10px;
        text-align: center;
        margin: 5px ;
    }
</style>