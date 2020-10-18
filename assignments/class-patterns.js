// Using function to create object


// Create User (class/function) with the following properties.
// * [ ] properties (data):
// * [ ] name
// * [ ] id
// * [ ] password
// * [ ] noOfProjects
// * [ ] methods:
// * [ ] getProjects -> return number of project
// * [ ] changeUsername -> returns old username
// * [ ] incrementProject -> returns updated number of projects
// * [ ] decrementProject -> returns updated number of projects


function createUser(name, id, password, getProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.password = password;
    user.getProjects = getProjects;
    user.changeUsername = function (newName){
        let oldName = user.name;
        user.name = newName;
        return oldName;
    }
    user.increamentProject = function () {
        user.getProjects++;
        return user.getProjects;
    }
    user.decreamentProject = function () {
        user.getProjects--;
        return user.getProjects;
    }
    return user;
}

let alisha = createUser('Alisha', 'a7', 989, 9);


//Using Object.create

function createUser(name, id, password, getProjects) {
    let userMethods = {
     changeUsername: function (newName){
         const oldName = user.name;
         user.name = newName;
         return oldName;
     },
     increamentProject: function () {
         user.getProjects++;
         return user.getProjects;
     },
     decreamentProject: function () {
         user.getProjects--;
         return user.getProjects;
     }
 }    
 let user = Object.create(userMethods);
     user.name = name;
     user.id = id;
     user.password = password;
     user.getProjects = getProjects;
     return user;
 }
 
 let alisha = createUser('Alisha', 'a7', 989, 9);

 //Using Pseudoclassical Way
function createUser(name, id, password, getProjects) {
// let user = Object.create(createUser.prototype);
    this.name = name;
    this.id = id;
    this.password = password;
    this.getProjects = getProjects;
    }
    
    createUser.prototype = {
        changeUsername: function (newName){
            const oldName = this.name;
            this.name = newName;
            return oldName;
        },
        increamentProject: function () {
            this.getProjects++;
            return this.getProjects;
        },
        decreamentProject: function () {
            console.log(this)
            this.getProjects--;
            return this.getProjects;
        }
    }    
    
    let alisha = new createUser('Alisha', 'a7', 989, 9);

     // Using class

    class User {
        constructor(name, id, password, getProjects){
        this.name = name;
        this.id = id;
        this.password = password;
        this.getProjects = getProjects;
        };
        changeUsername = function (newName){
        const oldName = this.name;
        this.name = newName;
        return oldName;
        };
        increamentProject =  function () {
        this.getProjects++;
        return this.getProjects;
        };
        decreamentProject =  function () {
        this.getProjects--;
        return this.getProjects;
    };
}
    
        let alisha = new User('Alisha', 'a7', 989, 9);