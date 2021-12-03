// determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

function isAdjacent(matrix, node1, node2) {
	// check if node exists in the matrix by checking it against the length of the matrix array
    if (node1 <= matrix.length && node2 <= matrix.length) {
        // if exists, find the corresponding number for the node and the row.
        // ex. node1 - row and then node2 - index in array of that row and vice versa
        let node1row = matrix[node1];
        let nodenum1 = node1row[node2]
        
        let node2row = matrix[node2];
        let nodenum2 = node2row[node1]

        // return true or false depending on if they are adjacent 
        if (nodenum1 == 1 && nodenum2 == 1){
            return true
        } else {
            return false
        }

    } else {
        console.log('please enter an existing node.')
        return false
    }
}


const matrix1 = [[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]]
console.log(isAdjacent(matrix1, 0, 1))
console.log(isAdjacent(matrix1, 0, 2))
console.log(isAdjacent(matrix1, 2, 1))