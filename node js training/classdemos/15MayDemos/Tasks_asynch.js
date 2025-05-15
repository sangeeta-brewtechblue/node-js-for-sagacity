function fetchAllProducts(){
    for(let i = 0; i < 355660; i++){
       console.log("product"+i)
    }
}

function showOrderHistory(){
    let str='';
    for(let i = 0; i < 10; i++){  
        str += "order"+i+"<br>";  
    }
}
function captureReview(){
    let review = document.getElementById("review").value;
    document.getElementById("showReview").innerHTML=review; "";
}

function fetchProductsAsync(){
    setTimeout(()=>fetchAllProducts(),1000);
}