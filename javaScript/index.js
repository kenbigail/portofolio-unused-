// This is the Variables Scope

const hamburger = document.getElementById("hamburger");
const burgerbox = document.getElementById("box")
const home = document.getElementById("home")
const about = document.getElementById("about")
const logo = document.getElementById("logo")
const boxsup = document.getElementById("sup")
const achievements = document.getElementById("serti")
const projects = document.getElementById("projek")
const supimg = document.getElementById("imgsup")
const slider = document.getElementById("slider")
const imgpr1 = document.getElementById("project1")
const hover1 = document.getElementById("hoverpr1")
const link = document.getElementById("link")

// This is Functions Scope

function scrollToPercentage(percentage) {
    const windowHeight = window.innerHeight;
    const scrollTo = (percentage / 100) * windowHeight;

    window.scroll({
        top: scrollTo,
        behavior: "smooth",
    });
}

// This is the events scope

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    burgerbox.classList.toggle("active");
});

home.addEventListener("click", () => {
    window.location.href = "index.html";
});

about.addEventListener("click", () => {
    window.location.href = "about.html";
});

logo.addEventListener("click", () => {
    boxsup.classList.toggle("active")
    supimg.src = "javaScript/Interactivesup-after.png"


    setTimeout(() => {
        supimg.src = "javaScript/Interactivesup-before copy.png"
        boxsup.classList.remove("active")
    }, 800)
})

slider.addEventListener("click", () => {
    scrollToPercentage(90);
});

imgpr1.addEventListener("mouseenter", () => { 
    
})

// imgpr1.addEventListener("mouseleave", () => { 
//     hover1.classList.toggle("remove")
// })

achievements.addEventListener("click", () => {
    alert('Section is on Progress, Sorry for the Inconvenience')
    achievements.classList.toggle("active")
})

projects.addEventListener("click", () => {
    
})

about.addEventListener("click", () => {
    window.location.href = 'about.html'
})

link.addEventListener("click", () => {
    window.location.href = 'about.html'
})