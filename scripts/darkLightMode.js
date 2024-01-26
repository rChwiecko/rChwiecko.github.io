var mode_icon = document.getElementById("mode-icon")
function chng_mode(){
    document.body.classList.toggle("dark-theme")
    var img = document.getElementById("mode-btn")
    var modeBtn = img
    var linkedIn = document.querySelectorAll("img.linkedIn")
    var gitHub = document.getElementById("gitHub")
    var experience = document.getElementById("experience")
    var education = document.getElementById("education")
    var checkmark = document.querySelectorAll("img.checkmark")
    var email = document.getElementById("email")
    if (img.getAttribute("src") === "../assets/image_white.png"){
        modeBtn.src = "../assets/sun-moon-eclipse.svg"
        gitHub.src = "../assets/github.png"
        experience.src = "../assets/experience.png"
        education.src = "../assets/education.png"
        email.src = "../assets/email.png"
        linkedIn.forEach(function (image) {
            image.src = "../assets/linkedin.png"
        })
        checkmark.forEach(function (image){
            image.src = "../assets/checkmark.png"
        })
    }
    else{
        modeBtn.src = "../assets/image_white.png"
        gitHub.src = "../assets/github_white.png"
        experience.src = "../assets/white_experience.png"
        education.src = "../assets/white_education.png"
        email.src = "../assets/white_email.png"
        linkedIn.forEach(function (image) {
            image.src = "../assets/linkedin_white.png"
        })
        checkmark.forEach(function (image){
            image.src = "../assets/white_checkmark.png"
        })
    }
}