import Node from "./Node";

function BinarySearchTree(val) {
  if (val) {
    this.root = new Node(val);
    return;
  }

  this.root = undefined;
}

BinarySearchTree.prototype.recursiveInsert = function(root, val) {
  if (val < root.value) {
    !root.left
      ? (root.left = new Node(val))
      : this.recursiveInsert(root.left, val);
  }
  if (val >= root.value) {
    !root.right
      ? (root.right = new Node(val))
      : this.recursiveInsert(root.right, val);
  }
};

BinarySearchTree.prototype.insert = function(val) {
  if (!val && !this.root) return;

  if (!this.root) {
    this.root = new Node(val);
    return;
  }

  let root = this.root;
  while (root) {
    if (val < root.value) {
      if (!root.left) {
        root.left = new Node(val);
        break;
      } else {
        root = root.left;
      }
    }

    if (val >= root.value) {
      if (!root.right) {
        root.right = new Node(val);
        break;
      } else {
        root = root.right;
      }
    }
  }
};

BinarySearchTree.prototype.recursiveSearch = function(root, val) {
  if (!root) return;
  else if (val === root.value) {
    return val;
  } else if (val < root.value) {
    return this.recursiveSearch(root.left, val);
  } else if (val > root.value) {
    return this.recursiveSearch(root.right, val);
  }
};

BinarySearchTree.prototype.search = function(val) {
  if (!val || !this.root) return;
  let root = this.root;

  while (root) {
    if (val === root.value) {
      return val;
    } else if (val < root.value) {
      root = root.left;
    } else if (val > root.value) {
      root = root.right;
    }
  }
};

BinarySearchTree.prototype.delete = function(val) {
  // if (this.root === undefined) {
  //   return;
  // };
};

export default BinarySearchTree;
