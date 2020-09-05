let h2 = document.getElementById("heading");

setTimeout(function(){
   h2.innerText = 10;
    setTimeout(function(){
        h2.innerText = 9;
        setTimeout(function(){
            h2.innerText = 8;
            setTimeout(function(){
                h2.innerText = 7;
                setTimeout(function(){
                    h2.innerText = 6;
                    setTimeout(function(){
                        h2.innerText = 5;
                        setTimeout(function(){
                            h2.innerText = 4;
                            setTimeout(function(){
                                h2.innerText = 3;
                                setTimeout(function(){
                                    h2.innerText = 2;
                                    setTimeout(function(){
                                        h2.innerText = 1;
                                        setTimeout(function(){
                                            h2.innerText = "Happy Independence Day";
                                        },1000)
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},0)
