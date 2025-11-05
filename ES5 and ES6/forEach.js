let arr = ["facebook", "twitter", "instagram", "tiktok", "whatsapp"]

arr.forEach((element, index) => {
    console.log(element + " esta na posicao: " + index)
})

arr.forEach((element, index) => {
    if(index % 2 == 0){
        console.log(element)
    }
})