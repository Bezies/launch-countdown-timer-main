// FONCTION QUI MARCHE
// const days = document.querySelector("#days-count");
// const hours = document.querySelector("#hours-count")
// const minutes = document.querySelector("#minutes-count")
// const secondes= document.querySelector("#seconds-count")


//     function dateDiff(date1, date2) {
    
//     let diff = {}
//     let time = date2 - date1;

//     console.log(date1)
//     console.log(date2)
    
//     time = Math.floor(time/1000);
//     diff.sec = time % 60;
//     secondes.innerHTML = diff.sec;


//     time = Math.floor((time - diff.sec)/60);
//     diff.min = time % 60;
//     minutes.innerHTML = diff.min;


//     time = Math.floor((time - diff.min) / 60);
//     diff.hour = time % 24;
//     hours.innerHTML = diff.hour;


//     time = Math.floor((time - diff.hour) / 24);
//     diff.day = time;
//     days.innerHTML = diff.day;

    
//     return diff;
// }

// let date1 = new Date();
// let date2 = new Date(2023, 05, 30);
// diff = dateDiff(date1, date2)

// window.location.reload();


// setInterval(dateDiff, 4000);



// TEST 2 

const days = document.querySelector("#days-count");
const hours = document.querySelector("#hours-count")
const minutes = document.querySelector("#minutes-count")
const secondes= document.querySelector("#seconds-count")

setInterval(() => {
    let date1 = new Date();
    let date2 = new Date(2023, 04, 05);
    let diff = {}
    let time = date2 - date1;
    

    time = Math.floor(time/1000);
    diff.sec = time % 60;
    secondes.innerHTML = diff.sec < 10 ? "0" + diff.sec : diff.sec;


    time = Math.floor((time - diff.sec)/60);
    diff.min = time % 60;
    minutes.innerHTML = diff.min < 10 ? "0" + diff.min : diff.min;


    time = Math.floor((time - diff.min) / 60);
    diff.hour = time % 24;
    hours.innerHTML = diff.hour < 10 ? "0" + diff.hour : diff.hour;


    time = Math.floor((time - diff.hour) / 24);
    diff.day = time;
    days.innerHTML = diff.day < 10 ? "0" + diff.day : diff.day;

    if (diff.sec < 0) {
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        secondes.innerHTML = "00"
    }
    
    return diff;
}, 1000)
