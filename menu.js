// let intro = document.querySelector(".intro");    
// let splash = document.querySelector(".splash");

// window.onload = function start () {
//     intro.classList.remove("hidden"); // To hide the element
//     splash.classList.add("hidden"); // To hide the element

//     // splash.classList.remove("hidden"); // To show the element
// }

// setTimeout(() => {    
//     setTimeout(() => {
//         intro.classList.add("hidden"); // To hide the element
//         splash.classList.remove("hidden"); 
//     }, 5000);
//     //static for a few seconds then game over screen then reset to main menu
// }, 2700);





// document.querySelector('.splash').addEventListener('click', function() {
//     this.style.opacity = 0;
// });

let slideSource = document.querySelector(".wakein"); 
slideSource.style.display = "none"

const yes = () => {
  slideSource.classList.toggle('fade');
  slideSource.style.display = "block"

  const fadeIn = () => {
        let fade = document.querySelector(".wakein"); 
        let opacity = 0;
        let intervalID = setInterval(function() {
            if (opacity < 1) {
               opacity = opacity + 0.1
                    fade.style.opacity = opacity;
                    } else {
                        clearInterval(intervalID);
                    }
            }, 300);
        }

        fadeIn();
}

setTimeout(() => {
  yes();
}, 2000);


document.querySelector('p').addEventListener('click', function() {
    window.location.href = "main.html";
});