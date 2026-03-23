function merge(left, right){
    let i = 0;
    let j = 0;
    let res = [];
    while(i < left.length && j < right.length){
        res.push(left[i] < right[j] ? left[i++] : right[j++]);
    } 

    for(i; i < left.length; i++){
        res.push(left[i]);
    }

    for(j; j < right.length; j++){
        res.push(right[j]);
    }

    return res;
}

export default function mergeSort(arr){
    if(arr.length < 2) return arr;

    let middle = Math.round(arr.length/2);

    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle, arr.length))

    return merge(left, right);
}