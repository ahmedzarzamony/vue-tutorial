const app = Vue.createApp({
    data(){
        return {
            url: 'https://google.com',
            name: 'Ahmed',
            age: 33,
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'Book 1', author: 'Author 1', imgSrc: 'https://fakeimg.pl/100x50/', isFav: true},
                {title: 'Book 2', author: 'Author 2', imgSrc: 'https://fakeimg.pl/100x50/', isFav: false},
                {title: 'Book 3', author: 'Author 3', imgSrc: 'https://fakeimg.pl/100x50/', isFav: false},
            ]
        }
    },
    methods: {
        changeName1(name=null){
            this.name = 'sara'
        },
        changeName(name=null){
            this.name = name ? name : 'Nader'
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, $data=null){
            console.log(e, e.type, $data);
        },
        handleMoveEvent(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')