window.addEventListener("load", () => {
    

        const img = document.querySelector(".dawg");
        console.log(img);
        var xhr= new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                let obj = JSON.parse(xhr.responseText);
                img.setAttribute("src", obj.message);
            }
        };

        const btn = document.querySelector(".btnNext");
        console.log(btn);
        if(btn){
            btn.addEventListener("click", (e) => {
                console.log("event called");
                                xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
                                xhr.send();
                                /*setTimeout(function(){ 
                                    if(btn.innerHTML!=="Next Good Dawg"){
                                            btn.innerHTML="Next Good Dawg";}
                                }, 0);*/
                                }
                                );
        }


});