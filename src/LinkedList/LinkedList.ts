import Node from '../Node/Node';

class LinkedList<T extends string | number> {
  tail?: Node<T>;
  head?: Node<T>;
  length: number;

  constructor() {
    this.tail = undefined;
    this.head = undefined;
    this.length = 0;
  }

  addToHead(val: string | number) {
    const newNode = new Node(val, this.head);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length++;
  }

  addToTail(val: string | number) {
    const newNode = new Node(val, undefined, undefined);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  /**
   *
   * @param searchItem Node
   * @returns Node | undefined
   */
  search(searchItem: string | number) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === searchItem) return currentNode;
      currentNode = currentNode.next;
    }
  }

  /**
   * @returns void
   */
  deleteHead() {
    if (this.head === undefined) return;
    this.head = this.head.next;

    // if old head present, set it to undefined, if not, set the tail to undefined
    this.head ? (this.head.prev = undefined) : (this.tail = undefined);
    this.length--;
  }

  /**
   * @returns void
   */
  /**
   * @returns void
   */
  deleteTail() {
    if (this.tail === undefined) return;
    this.tail = this.tail.prev;

    // if old tail present, set it to null, if not, set the head to null
    this.tail ? (this.tail.next = undefined) : (this.head = undefined);
    this.length--;
  }

  /**
   *
   * @param val
   */
  deleteValue(val: string | number) {
    if (!this.tail && !this.head) return;

    let itemToDelete = this.search(val);
    if (itemToDelete) {
      if (itemToDelete.prev && itemToDelete.next) {
        itemToDelete.prev.next = itemToDelete.next;
        itemToDelete.next.prev = itemToDelete.prev;
      }
      this.assignHeadToNextIfPrevUndefined(itemToDelete);

      this.assignTailToPrevIfPrevUndefined(itemToDelete);

      this.length--;
    }
  }

  reverse() {
    let current;
    if (this.head === undefined || this.length === 0) return this;

    current = this.head;
    let next = undefined;

    this.tail = this.head;

    while (current !== undefined) {
      next = current.next;
      current.next = current.prev;
      current.prev = next;

      if (!next) {
        this.head = current;
      }

      current = next;
    }
    return this;
  }

  private assignHeadToNextIfPrevUndefined(node: Node<T>) {
    if (!node.prev) {
      return (this.head = node.next);
    }
  }

  private assignTailToPrevIfPrevUndefined(node: Node<T>) {
    if (!node.next) {
      return (this.tail = node.prev);
    }
  }
}

export default LinkedList;
