type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const new_node = { value: item } as Node<T>;
        new_node.prev = this.head;
        this.head = new_node;
        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) return undefined;

        const node = this.head;
        this.head = node.prev;
        this.length--;

        //free
        node.prev = undefined;

        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
