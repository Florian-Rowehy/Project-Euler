class QueueLinkedList {
    #first = null;
    #last = null;
    #length = 0;

    size = () => this.#length;
    isEmpty = () => this.#first === null;

    enqueue = (item) => {
        const oldLast = this.#last;
        this.#last = {
            value: item,
            next: null,
        };
        if (this.isEmpty()) {
            this.#first = this.#last;
        } else {
            oldLast.next = this.#last;
        }
        this.#length++;
    };

    dequeue = () => {
        if (this.isEmpty()) throw new RuntimeException('Can\'t dequeue an empty queue')

        const item = this.#first.value;
        this.#first = this.#first.next;
        this.#length--;
        if (this.isEmpty()) this.#last = null;

        return item;
    };

    *[Symbol.iterator] () {
        let node = this.#first;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }
}

const test = [1,2,3,4,5,6,7,8,9,10];
const queue = new QueueLinkedList();
for (const value of test) {
    queue.enqueue(value);
}

console.log(queue.size())

for (let value of queue) {
    console.log(value);
}

while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}

queue.dequeue();