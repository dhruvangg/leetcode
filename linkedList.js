class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    addNode(data) {
        let node = new Node(data)
        let current;

        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log(index);
            throw new Error("Please enter a valid index.")
        }
        let node = new Node(data)
        let current, prev;
        current = this.head

        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let it = 0
            while (it < index) {
                it++;
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node
        }
        this.size++;
    }

    indexOf(element){
        let count = 0;
        let current = this.head
        while(current.next){
            if(current.data === element){
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }
}

const node = new LinkedList();
node.addNode(1)
node.addNode(2)
node.insertAt(3, 1)
node.indexOf(3)
console.log(node.indexOf(2));

// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/