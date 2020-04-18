class _Node {
	constructor( data ) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkList {
	constructor() {
		this.head = null;
		this.tail = null;	}

	push( item ) {
		let node = new _Node( item );

		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node
		}
  }
  
	remove( item ) {
		let current = this.head;
		while( current ) {
			if( current.data === item ) {
				if( current == this.head && current == this.tail ) {
					this.head = null;
					this.tail = null;
				} else if ( current == this.head ) {
					this.head = this.head.next
					this.head.prev = null
				} else if ( current == this.tail ) {
					this.tail = this.tail.prev;
					this.tail.next = null;
				} else {
					current.prev.next = current.next;
					current.next.prev = current.prev;
				}
			}
			current = current.next
		}
	}

	display() {
		let current = this.head;
		let elements = [];
		while( current !== null ) {
			elements.push( current.data );
			current = current.next
		}
		return elements.join(" ");
	}
};

module.exports = DoubleLinkList;