class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
  if(curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------

const findCycle = function(head) {
  if(!head) return null;
  
  let tortoise = head, hare = head;
  
  while(true) {
    tortoise = tortoise.next;
    hare = hare.next;
    
    if(hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }
    
    if(tortoise === hare) break;
  }
  
  let p1 = head,
      p2 = tortoise;
  
  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  
  return p2
};
// Runtime: 113 ms, faster than 41.02% of JavaScript online submissions for Linked List Cycle II.
// Memory Usage: 44.6 MB, less than 92.02% of JavaScript online submissions for Linked List Cycle II.
console.log(findCycle(linkedList));