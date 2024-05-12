<template>
    <div class="backdrop">
        <div class="modal2">
            <div class="heading">
                <slot name="heading">
                    Please write your email
                </slot>
            </div>
            <div class="body">
                <slot name="body">
                    <input type="text" placeholder="Emaill address" ref="email">
                </slot>
            </div>
            <div class="footer">
                <slot name="footer">
                    <button @click="subscribeEmail">Subscribe</button>
                    <button @click="closeModal2">Close</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){

    },
    methods: {
        closeModal2(){
            this.$emit('close')
        },
        subscribeEmail(){
            this.$emit('subscribe', this.$refs.email.value);
        }
    },
}
</script>

<style>
.modal2{
    background: #fff;
    width:70%;
    min-height: 100px;
    margin: 10% auto;
    border-radius: 10px;
    border:2px solid #ddd;
}
.modal2 .heading{
    padding: 10px;
    border-bottom: 1px dashed #666;
}
.modal2 .body{
    padding: 10px;
    border-bottom: 1px dashed #666;
    
}
.modal2 .footer{
    padding: 10px;
    
}
.modal2 input{
    padding: 10px;
    width:80%;
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 5px;
}
.modal2 .footer button{
    margin: 5px;
    background: #666;
    border:none;
    color:#fff;
    padding: 10px 20px;
    cursor: pointer;
}
</style>