class Node {
  constructor () {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {

  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add a new node containing value to the end of the list
  append (value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.size === 0) this.head = newNode; // if list is currently empty, new node will be the head
    else this.tail.nextNode = newNode; // otherwise, current tail's next node will be the new node

    this.tail = newNode; // always, new node will become the new tail
    this.size++;
  }

  // add a new node containing value to the start of the list
  prepend (value) {
    const newNode = new Node();
    newNode.value = value;
    
    if (this.size === 0) this.tail = newNode; // if list is currently empty, new node will be the tail also
    else newNode.nextNode = this.head; // otherwise, the new node's next node will be st to the current head

    this.head = newNode; // always, new node will become the new head
    this.size++;
  }

  // return the node at the given index
  at (index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    return node;
  }

  // remove the last element from the list
  pop () {
    let nodeBeforeTail = this.at(this.size - 2);
    nodeBeforeTail.nextNode = null;
    this.tail = nodeBeforeTail;
    this.size--;
  }

  // return true if the passed in value is in the list and otherwise return false
  contains (value) {
    for (let i = 0; i < this.size; i++) {
      if (this.at(i).value === value) return true;
    }
    return false;
  }

  // return the index of the node containing value, or null if not found
  find (value) {
    let index = null;
    for (let i = 0; i < this.size; i++) {
      if (this.at(i).value === value) index = i;
    }
    return index;
  }

  toString () {
    let str = "";
    for (let i = 0; i < this.size; i++) {
      str += `( ${this.at(i).value} ) -> `;
    }
    str += "null";
    return str;
  }

}


let list = new LinkedList();
list.append(20);
list.append(30);
list.append(100);
list.prepend(10);
console.log(list);
// console.log(list.size);
// console.log(list.head);
// console.log(list.tail);
// console.log(list.at(3));
list.pop();
console.log(list);
console.log(list.contains(20));
console.log(list.contains(100));
console.log(list.find(30));
console.log(list.toString());
list.append(40);
console.log(list.toString());