/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const nodes = [];
    let current = head;

    while(current) {
        nodes.push(current);
        current = current.next;
    }
    return nodes[Math.floor(nodes.length / 2)];
};