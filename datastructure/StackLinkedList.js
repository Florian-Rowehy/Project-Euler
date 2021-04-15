class StackLinkedList {
    #first = null;
    #length = 0;

    size = () => this.#length;
    isEmpty = () => this.#first === null;

    push = (item) => {
        const actualFirst = this.#first;
        this.#first = {
            value: item, 
            next: actualFirst,
        }
        this.#length++;
    }

    pop = () => {
        if (this.isEmpty()) throw new RuntimeException('Can\'t pop an empty stack')
        const value = this.#first.value;
        this.#first = this.#first.next;
        this.#length--;
        return value;
    }

    *[Symbol.iterator] () {
        let node = this.#first;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }
}

const test = [1,2,3,4,5,6,7,8,9,10];
const stack = new StackLinkedList();
for (const value of test) {
    stack.push(value);
}

for (let value of stack) {
    console.log(value);
}

/* while (!stack.isEmpty()) {
    console.log(stack.pop());
}
*/
