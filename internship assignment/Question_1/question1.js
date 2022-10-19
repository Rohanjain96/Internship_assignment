
function swap(array,firstindex,secondindex){
    let temporary= array[firstindex]
     array[firstindex] = array[secondindex]
     array[secondindex] = temporary 
}
function arraymaxmin(array){
   if(array.length==0||array.length==1)
   return array;
   for(let index = 0;index<array.length;
   index= index+2){
      if(index>0 && (array[index-1]>array[index]))
       swap(array,index-1,index)
      if((index<array.length)&& array[index]<array[index+1])
       swap(array,index,index+1)
   }
}

const inputarray = [16, 51, 62, 3, 2, 20, 70, 82]

arraymaxmin(inputarray)
console.log(inputarray)

// Time complexity (Big O notation):O(n)
// Space complexity (Big O notation):O(1)
// Test case1:
// input array = []
// output array = []
// Test case2:
// input array = [3,2]
// output array = [3,2]
// Test case3:
// input array = [16,51,62,3,2,20,70,82]
// output array = [51,16,62,2,20,3,82,70]



