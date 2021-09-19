//Пример 3 Call-back функции

function server(){
    setTimeout(function(){
        console.log(1);
    },1000)
}

function foo(){
    console.log(2);
}

server();
foo();

function serverNew(host, callback){
    console.log(`Server ${host} is starting...`);
    callback();
}

// serverNew('MyServer', function(){
//      console.log('connect success!');
// })

function done(){
    console.log('connect success!');
}

serverNew('MyServer', done);

//Задание 3
function one(){
    console.log(1);
}

function two(){
    setTimeout(function(){
        console.log(2);
    },1000)
    
}

function three(){
    setTimeout(function(){
        console.log(3);
    },2000)
}

function four(){
    setTimeout(function(){
        console.log(4);
    },3000)
}

function five(){
    setTimeout(function(){
        console.log(5);
    },4000)
}

function six(){
    setTimeout(function(){
        console.log(6);
    },5000)
}

function seven(){
    setTimeout(function(){
        console.log(7);
    },6000)
}

function eight(){
    setTimeout(function(){
        console.log(8);
    },7000)
}

function nine(){
    setTimeout(function(){
        console.log(9);
    },8000)
}

function ten(){
    setTimeout(function(){
        console.log(10);
    },9000)
}

function win(){
    setTimeout(function(){
        console.log('You win a chicken');
    },10000)
}


one();
two();
three();
four();
five();
six();
seven();
eight();
nine();
ten();
win();