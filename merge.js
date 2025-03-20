function merge(left, right) {
    let sortedArr = [] // sorted items go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
        //if the number at index 0 on the left is smaller than the right one, push it into the array
      } else {
        sortedArr.push(right.shift())
        //or else, if the index 0 on the right is, push it in
      }
    }
    // Use spread operators to create a new array, combining three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    //splitting it in half
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
 }

 