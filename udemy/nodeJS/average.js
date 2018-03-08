function average(tomb) {
    // body...
    var iSum=0;
   
    // for (var i = 0;i<tomb.length; i++ ){
    //     iSum+= tomb[i];
        
    // }
    tomb.forEach(function(elem){
        iSum += elem;
    })    

    if(tomb.length===0){
        return undefined;
    } else {
        return Math.round(iSum/tomb.length);
    }
    
}

// console.log("test")
console.log(average([23,33,4,45,67,12]));

