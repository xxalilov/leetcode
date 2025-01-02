// Singly Linked List
// class Node {
//     constructor(data) {
//         this.data = data; // data
//         this.next = null; // next node
//     }
// }
//
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//
//     append(data) {
//         const newNode = new Node(data);
//         if(this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
//
//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }
//
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.print();

