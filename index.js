console.log("working");

// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

function removeDuplicate(STR,N) {
    let result = new Set();
    for(let i = 0; i < N; i++)
    result.add(STR[i]);
    for(const value of result){
        console.log(value);
    }
    return result;
}
removeDuplicate("abcadeecfb",10);

// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

function count_alpha(Str){
  let res = Str.split('');
  let count = {};
  res.map((N) =>{
  if(count[N]){
  count[N] += 1;
  }
  else{
  count[N] = 1;
  }
})
for (show in count){
  console.log(`${show} = ${count[show]}`);
}
}
count_alpha("abcadeecfb");