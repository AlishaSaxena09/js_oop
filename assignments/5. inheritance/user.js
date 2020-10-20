class User {
    constructor(name, score = 0){
        this.name = name;
        this.score = score;
    }
    increaseScore(){
        return this.score + 1;
    }
    decreaseScore() {
        return this.score - 1;
    }
}
class PaidUser extends User{
    constructor(name, score = 0, balance) {
        super(name, score);
        this.balance = this.balance;
    }
    increaseBalance(){
        return this.balance + 1;
    }
}
let user = new User(
    "John",
    8
)