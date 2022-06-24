let person = {
    name : "Kweli",
    age : 30,
    voice() {
        console.log("Yes, thats him!")
    }
}

person.voice()

person.age = person.age + 1

console.log(person.name + " is " + person.age + " years old!")