const LinkedList = require("./LinkedList");

const myList = new LinkedList();
myList.insert(42);
myList.insert(13);
myList.insert(7);
myList.insert(9);

//const array =[42, 13, 7, 9];

let currentNode = myList.head;
for (let i= 1; i <= myList.length; i += 1) {
    console.log(currentNode.data);  
    currentNode = currentNode.next;

}


//console.log(JSON.stringify(myList, null,2 ));
