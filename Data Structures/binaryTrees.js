class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        
        if(!this.root) {
            this.root = newNode
            return this
        } else { 
            let currentNode = this.root
            while(true){
                if(value === currentNode.value) return undefined
                if(!currentNode.left && value < currentNode.value) {
                    currentNode.left = newNode
                    return this
                } else if(value < currentNode.value){
                    currentNode = currentNode.left
                } else if(!currentNode.right && value > currentNode.value){
                    currentNode.right = newNode
                    return this
                } else if(value > currentNode.value){
                    currentNode = currentNode.right
                }                    
            }
        }
    }

    find(value){
        if(!this.root) return false
        let currentNode = this.root
        let found = false
        
        while(currentNode && !found){
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else if(value > currentNode.value){
                currentNode = currentNode.right
            } else {
                found = true
            }
        }
        if(!found) return undefined
        return currentNode
    }
}

const newTree = new BinarySearchTree()

newTree.root = new Node(10)
newTree.insert(5)
newTree.insert(15)
newTree.insert(7)
newTree.insert(25)

// console.log(newTree)

console.log(newTree.find(7))
console.log(newTree.find(37))

// const tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

// console.log(tree)

//INSERT FUNCTIONALITY
    //create a new node    
    //check for the root
        //if no root - the node becomes the root
    //check the value of the node against the value to be inserted
        //if the node is greater
            //check if there is a node to the right
                //if so move right and repeat
                //if not the node becomes the right
        //if node is less
            //check if there is a node to the left
                //if so move left and repeat
                //if not node becomes the left

//FIND FUNCTIONALITY
    //check the value against the root
    //if it's less go to the left
        //repeat until found
    //if it's greater go to the right
        //repeat until found