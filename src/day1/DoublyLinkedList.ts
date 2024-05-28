type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;

        ++this.length;
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode.prev = undefined;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error("Chaman CH***..");

        if (idx == 0) {
            this.prepend(item);
            return;
        } else if (idx == this.length) {
            this.append(item);
            return;
        }

        ++this.length;
        const curr = this.getNodeAt(idx) as Node<T>;

        const newNode = { value: item } as Node<T>;
        newNode.next = curr;
        newNode.prev = curr.prev;
        curr.prev = newNode;

        if (newNode.prev) newNode.prev.next = newNode;
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;

        ++this.length;
        if (!this.tail) {
            this.head = this.tail = newNode;
            newNode.next = newNode.prev = undefined;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        // Nothing to remove
        if (this.length === 0) {
            console.log("Chaman CH***..");
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            // Found
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        // Not Found after iterating whole list
        if (!curr) {
            console.log("Chaman CH***..");
            return undefined;
        }

        --this.length;

        // Probably this is not needed due to following checks
        // Only one element in the list
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return curr.value;
        }

        // Element to remove is the first Element in the List
        if (this.head === curr) {
            return this.removeFirstNode();
        }

        // Element to remove is the Last Element in the List
        if (this.tail === curr) {
            return this.removeLastNode();
        }

        // Element to remove is somewhere in the middle of the List
        if (this.tail !== curr && this.head !== curr) {
            return this.removeNode(curr);
        }

        // need to satisfy TypeScript
        return undefined;
    }

    get(idx: number): T | undefined {
        return this.getNodeAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) throw new Error("Chaman CH***..");

        const curr = this.getNodeAt(idx) as Node<T>;

        --this.length;
        // Node to be removed is the First Elem
        if (this.head === curr) {
            return this.removeFirstNode();
        }

        // Node to be removed is the Last Elem
        if (this.tail === curr) {
            return this.removeLastNode();
        }

        // Node to be Removed is somewhere in the middle
        if (this.tail !== curr && this.head !== curr) {
            return this.removeNode(curr);
        }

        // need to satisfy TypeScript
        return undefined;
    }

    removeLastNode(): T | undefined {
        const tmp = this.tail;
        if (tmp) this.tail = tmp.prev;
        if (tmp?.prev) tmp.prev.next = undefined;
        if (tmp) tmp.prev = undefined;
        return tmp?.value;
    }

    removeFirstNode(): T | undefined {
        const tmp = this.head;
        if (tmp) this.head = tmp.next;
        if (tmp?.next) tmp.next.prev = undefined;
        if (tmp) tmp.next = undefined;
        return tmp?.value;
    }

    removeNode(node: Node<T>): T {
        if (node.next) node.next.prev = node.prev;
        if (node.prev) node.prev.next = node.next;
        node.next = node.prev = undefined;
        return node.value;
    }

    getNodeAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) curr = curr.next;
        return curr;
    }
}
