let num=11;
let count=0;
for(let i=0;i<=num;i++){
    if(num%i){
        count++
    }
}if(count==2){
    console.log("Prime")
}else{
    console.log("Not Prime")
}