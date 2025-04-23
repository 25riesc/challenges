// mario

// let totalrows=0
// let pg=0
// let currentrow=0
// let brick="#"
// let space=" ";
// let spacelength=0

// do{
//     totalrows=prompt("# of rows in the pyramid")

// }while (!Number(totalrows))
    

// do{
//      pg=prompt("p or g")
// }    while(pg != "p" && pg != "g")


// console.log(`# of rows: ${totalrows}`)
// console.log(`p or g: ${pg}`)



// while(currentrow<=totalrows && (pg=="p")){

//     currentrow = 1 + currentrow
//     while(spacelength<totalrows){
//         space=(space+" ")
//         spacelength=(spacelength+1)
//     }
//     console.log(`${space} ${brick}`)
//     brick = (brick + "#")
//     space= (space.slice(1))


// }

// while(currentrow<=totalrows && (pg=="g")){

//     currentrow = 1 + currentrow
//     while(spacelength<totalrows){
//         space=(space+" ")
//         spacelength=(spacelength+1)
//     }
//     console.log(`${space}${brick}  ${brick}`)
//     brick = (brick + "#")
//     space= (space.slice(1))
    

// }

//sum of even fibonacci numbers

// num1=0
// num2=1
// max=4000000
// sum=0
// while(num1 < max && num2 < max){
    
//     num1 = num1 + num2
//     num2 = num1 + num2

//     if ((num1 < max && num2 < max)){
//         if(num1>max || num2>max){break}
//         if(num1 % 2 ===0){sum=sum+num1; console.log(sum)}
//         if(num2 % 2 ===0){sum=sum+num2; console.log(sum)}
//         // console.log(num1)
//         // console.log(num2)    
//     }


    
//     // sum=sum+num1+num2

// }
// console.log(`sum of even #'s in the sequence less than ${max} is ${sum}`)


