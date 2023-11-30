// Node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Circular Linked List
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Insert a node at the beginning of the list
    insertAtBeginning(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        newNode.next = newNode;
        this.head = newNode;
      } else {
        let temp = this.head;
        while (temp.next !== this.head) {
          temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }
  
    // Insert a node at the end of the list
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        newNode.next = newNode;
        this.head = newNode;
      } else {
        let temp = this.head;
        while (temp.next !== this.head) {
          temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = this.head;
      }
      this.length++;
    }
  
    // Delete a node with the given data
    delete(data) {
      if (this.head === null) {
        return;
      }
      let current = this.head;
      let prev = null;
      while (current.data !== data && current.next !== this.head) {
        prev = current;
        current = current.next;
      }
      if (current.data === data) {
        if (prev !== null) {
          prev.next = current.next;
        } else {
          while (current.next !== this.head) {
            current = current.next;
          }
          current.next = this.head.next;
          this.head = this.head.next;
        }
        this.length--;
      }
    }
  
    // Print the data in all nodes in the list
    printList() {
      if (this.head === null) {
        return;
      }
      let temp = this.head;
      console.log(temp.data);
      temp = temp.next;
      while (temp !== this.head) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  