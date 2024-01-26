var mode_icon = document.getElementById("mode-icon")
function chng_mode(){
    document.body.classList.toggle("dark-theme")
    var img = document.getElementById("mode-btn")
    var modeBtn = img
    var linkedIn = document.getElementById("linkedIn")
    var gitHub = document.getElementById("gitHub")
    console.log(img.getAttribute("src"))
    if (img.getAttribute("src") === "../assets/image_white.png"){
        modeBtn.src = "../assets/sun-moon-eclipse.svg"
        linkedIn.src = "../assets/linkedin.png"
        gitHub.src = "../assets/github.png"
    }
    else{
        modeBtn.src = "../assets/image_white.png"
        linkedIn.src = "../assets/linkedin_white.png"
        gitHub.src = "../assets/github_white.png"

    }
}