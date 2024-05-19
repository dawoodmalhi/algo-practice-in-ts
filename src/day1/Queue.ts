type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const new_node = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = new_node;
        } else {
            this.tail.next = new_node;
            this.tail = new_node;
        }

        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            const head_node = this.head;
            this.head = this.head.next;
            this.length--;

            // free
            head_node.next = undefined;

            if (this.length === 0) this.tail = undefined;

            return head_node.value;
        }
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
