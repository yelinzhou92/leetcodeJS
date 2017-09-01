
 function ListNode(val) {
     this.val = val;
     this.next = null;
  }
var rotateRight = function(head, k) {
    if (head === null || k === null) {
        return [];
    }
    
    function getLength(head) {
        let length = 0;
        while (head != null) {
            length ++;
            head = head.next;
        }
        return length;
    }
    const length = getLength(head);    
    let dummy = new ListNode(-1);
    dummy.next = head;
    head = dummy;
    
    k = k % length;
    let tail = dummy;
    for (let i = 0; i < k; i++) {
        head = head.next;
    }
    var count = 0
    while (head.next != null) {
        console.log('head:' + head.val);
        console.log('tail:' + tail.val);
        head = head.next;
        tail = tail.next;
        console.log(count);
        count++;
    }
    
    head.next = dummy.next;
    dummy.next = tail.next;
    tail.next = null;
    
    return dummy.next;
};
console.log(rotateRight([1,2,3,4,5], 2));