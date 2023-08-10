let slideSource = document.querySelector(".wakein"); 
slideSource.style.display = "none"
let story = document.querySelector(".Story_Time"); 

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
  story.style.display = "none"
  yes();
}, 7000);


document.querySelector('p').addEventListener('click', function() {
    window.location.href = "main.html";
});