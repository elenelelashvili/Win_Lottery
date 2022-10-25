
function onClick() {
    var user= document.querySelector('#name');
    var username = document.querySelector('.username');
    
    const slide = document.querySelector('.slide');
    slide.style.display="block";
                slide.classList.add('animate__animated', 'animate__lightSpeedInRight');
                slide.style.setProperty('--animate-duration', '1.5s');


                var delayInMilliseconds = 1500; //1 second
                setTimeout(function() {
        if(user.value==='Hashim' || user.value==='hashim'){

            var nothing = document.querySelector('.nothing')

            nothing.classList.add('animate__animated', 'animate__bounceInDown');

                nothing.style.display = "block";
            let x =Math.floor(Math.random()*10)+1;

            if(x===1){
            var one=document.querySelector('.one');
            one.style.display = "block";
        } else if(x===2){
            var two=document.querySelector('.two');
            two.style.display="block";
        }else if(x===3){
            var three=document.querySelector('.three');
            three.style.display="block";
        }else if(x===4){
            var four=document.querySelector('.four');
            four.style.display="block";
        }else if(x===5){
            var five=document.querySelector('.five');
            five.style.display="block";
        }else if(x===6){
            var six=document.querySelector('.six');
            six.style.display="block";
        }else if(x===7){
            var seven=document.querySelector('.seven');
            seven.style.display="block";
        }else if(x===8){
            var eight=document.querySelector('.eight');
            eight.style.display="block";
        }else if(x===9){
            var nine=document.querySelector('.nine');
            nine.style.display="block";
        }else if(x===10){
            var ten=document.querySelector('.ten');
            ten.style.display="block";
        }
    

        }else{

          
            var nothing = document.querySelector('.nothing')

            nothing.classList.add('animate__animated', 'animate__bounceInDown');

                nothing.style.display = "block";

            var winNothing=document.querySelector('.winNothing');
            winNothing.style.display="block";

        }
            
        }, delayInMilliseconds);
    }

var clicked = 0;
    function myFunc(){

        clicked++;
        var scrape = document.querySelector('.scrape');
        var star = document.querySelector('.star');

        if(clicked===1){
        scrape.style.opacity="99.5%";
    }
       

        if(clicked===2){
            scrape.style.opacity="99%";
        }

        if(clicked===3){
            scrape.style.opacity="99%";
        }

        if(clicked===4){
            scrape.style.opacity="99%";
        }


        if(clicked===5){
            scrape.style.opacity="99.5%";
        }

        if(clicked===6){
            scrape.style.opacity="99.5%";
        }

        if(clicked===7){
            scrape.style.opacity="99.5%";
        }

        if(clicked===8){
            scrape.style.opacity="98%";
        }

        if(clicked===9){
            scrape.style.opacity="98%";
        }

        if(clicked===10){
            scrape.style.opacity="98%";
        }


        if(clicked===11){
            scrape.style.opacity="97.5%";
        }

        if(clicked===12){
            scrape.style.opacity="97.5%";
        }

        if(clicked===13){
            scrape.style.opacity="97.5%";
        }

        if(clicked===14){
            scrape.style.opacity="97%";
        }

        if(clicked===15){
            scrape.style.opacity="97%";
        }

        if(clicked===16){
            scrape.style.opacity="97%";
        }

        if(clicked===17){
            scrape.style.opacity="50%";
        }

        if(clicked===18){
            scrape.style.opacity="27%";
        }

        if(clicked===19){
            scrape.style.opacity="0%";
            star.style.display= "flex";
            var terms = document.querySelector('.terms');
            terms.style.display="block";
            var delayInMilliseconds = 2000;
            setTimeout(function() {
                star.style.display= "none";
                    
                }, delayInMilliseconds);

        }

    }