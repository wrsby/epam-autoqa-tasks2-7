let animal = {
    move(){
        console.log('jump jump')
    }
} 

let cat = {
}

cat.__proto__ = animal

cat.move() // prints 'jump jump' in conlsole log