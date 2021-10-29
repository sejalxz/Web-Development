let todos = [];
input = prompt("What would you like to do?");
while (input.toLocaleLowerCase() !== "quit" && input !== 'q') {
    if (input.toLocaleLowerCase() === "new") {
        let task = prompt("Enter new task");
        todos.push(task);
        console.log(`${task} added to the list!`);
    }
    else if (input.toLocaleLowerCase() === "list") {
        console.log("************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1} : ${todos[i]}`);
        }
        console.log("************");
    }
    else if (input.toLocaleLowerCase() === "delete") {
        let index = parseInt(prompt("Enter the index of the task you want to delete"));
        if (!Number.isNaN(index - 1) && (index - 1) > 0 && (index - 1) < todos.length) {
            console.log(`Ok, deleted ${index - 1}`);
            todos.splice(index - 1, 1);
        }
        else {
            let index = parseInt(prompt("Not a valid index"));
        }

    }
    input = prompt("What would you like to do?");
}
console.log("YOU QUIT!!")