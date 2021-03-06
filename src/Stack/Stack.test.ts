import Stack  from './Stack';

describe('Stacks', () => {
  let stack: Stack<string | number>;
  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = new Stack();
  });

  describe('initialization', () => {
    test('starts out empty', () => {
      expect(stack.size()).toBe(0);
      expect(stack.tail).toBeUndefined();
    });
  });

  describe('pop', () => {
    test('handles null gracefully', () => {
      expect(stack.pop()).toBeUndefined();
    });

    test('can remove the sole item from the stack', () => {
      stack.push(100);
      stack.pop();
      expect(stack.size()).toBe(0);
      expect(stack.tail).toBeUndefined();
    });

    test('can remove the sole item from the stack', () => {
      stack.push(100);
      stack.push(200);
      stack.pop();
      expect(stack.size()).toBe(1);
      expect(stack.tail!.value).toBe(100);
    });
  });

  describe('push', () => {
    test('it can add an item to an empty stack', () => {
      stack.push(200);
      expect(stack.size()).toBe(1);
      expect(stack.tail!.value).toBe(200);
    });

    test('it can add an item to an empty stack', () => {
      stack.push(100);
      stack.push(200);
      stack.push(300);
      expect(stack.size()).toBe(3);
      expect(stack.tail!.value).toBe(300);
    });
  });

  describe('peek', () => {
    test('it returns null if stack is empty', () => {
      expect(stack.peek()).toBeUndefined();
    });

    test('it returns the item at the top of the stack', () => {
      stack.push(500);
      stack.push(300);
      expect(stack.peek()!.value).toBe(300);
    });
  });

  describe('isEmpty', () => {
    test('it returns 0 if stack is empty', () => {
      expect(stack.size()).toBe(0);
    });
    test('it returns the size of the stack', () => {
      stack.push(100);
      expect(stack.size()).toBe(1);
    });
  });

  describe('size', () => {
    test('it returns true if the stack is empty', () => {
      expect(stack.isEmpty()).toBe(true);
    });
    test('it returns false if the stack is not empty', () => {
      stack.push(100);
      expect(stack.isEmpty()).toBe(false);
    });
  });
});
