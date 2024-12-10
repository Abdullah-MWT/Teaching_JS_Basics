class Animal{
    constructor(name) {
        this.name = name;
        console.log('Animal Created Successfully...');
    }

    eats(){
        console.log('Gee haa! Mai khaata hu...');
        
    }

    runs(){
        console.log('Aur Mai baagta bhi hu...');
        
    }
}





let cat = new Animal('Cat');
cat.eats();
cat.runs();

class Human extends Animal{
    constructor(name){
       super(name);
       console.log('Human Created Successfully...');
       
    }
}

let Zafar = new Human('Zafar');
Zafar.eats();
Zafar.runs();