class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let list: number[] = [];
	let overflow = 0;

	// Add all the numbers
	while (l1 || l2 || overflow == 1) {
		let num: number = (l1?.val ?? 0) + (l2?.val ?? 0) + overflow;

		// Works because l1 + l2 can never be more than 18
		if (num >= 10) {
			num -= 10;
			overflow = 1;
		} else {
			overflow = 0;
		}

		list.push(num);

		// Go to next node
		l1 = l1?.next ?? null;
		l2 = l2?.next ?? null;
	}

	// Turn array into LinkedList
	let linkedList: ListNode | null = null;
	for (let i in list) {
		linkedList = new ListNode(
			list[list.length - 1 - Number(i)], // Read list in reverse
			linkedList,
		);
	}

	return linkedList;
}

console.log(
	addTwoNumbers(
		new ListNode(2, new ListNode(4, new ListNode(3, null))),
		new ListNode(5, new ListNode(6, new ListNode(4, null))),
	),
);
