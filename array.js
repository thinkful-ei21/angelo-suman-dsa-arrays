const mem = require('./memory');
const memory = new mem();

class Array {
	constructor() {
		this.length = 0;
		this._capacity = 0;
		this.ptr = memory.allocate(this.length);
	}

	push(value) {
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}

		memory.set(this.ptr + this.length, value);
		this.length++;
	}

	pop() {
		//get our length
		if (this.length === 0) {
			throw new Error('empty array')
		}
		const value = memory.get(this.ptr + this.length - 1);
		this.length--;
		return value;
		//empty out the last index
		//return
	}

	_resize(size) {
		const oldPtr = this.ptr;
		this.ptr = memory.allocate(size);
		if (this.ptr === null) {
			throw new Error('out of memory');
		}
		memory.copy(this.ptr, oldPtr, this.length);
		memory.free(oldPtr);
		this._capacity = size;
	}
}

function main(){

    Array.SIZE_RATIO = 3;

    //create an instance of the array class
    let arr = new Array();

    //add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(5);
    arr.push('lkasjdf');
    arr.pop();

    console.log(arr);
}

main();
