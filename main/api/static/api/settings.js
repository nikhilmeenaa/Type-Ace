console.log("Themes JS");

const arr = [
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
    linksHoverColor: "Yellow",
    aceTypeHoverColor: "Red",
    upperBarColor: "yellow",
    toWriteColor: "magenta",
    progressLengthBackgroundColor: "White",
    aboutColor: "white",
    siteNameColor: "purple",
    motoColor: "purple",
  },
  {
    themeHeading: "rgb(255, 243, 15)",
    navbar: "rgb(255, 243, 15)",
    backgroundColor: "rgb(19, 19, 19)",
    linksHoverColor: "Red",
    aceTypeHoverColor: "Red",
    upperBarColor: "yellow",
    toWriteColor: "magenta",
    progressLengthBackgroundColor: "White",
    aboutColor: "white",
    siteNameColor: "purple",
    motoColor: "purple",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
    linksHoverColor: "Yellow",
    aceTypeHoverColor: "Red",
    upperBarColor: "yellow",
    toWriteColor: "magenta",
    progressLengthBackgroundColor: "White",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
  },
  {
    themeHeading: "rgb(48, 49, 43)",
    navbar: "rgb(223, 230, 198)",
    backgroundColor: "rgb(178, 183, 162)",
    // background-color: rgb(223, 230, 198);
    // color: rgb(48, 49, 43);

    linksHoverColor: "Red",
    aceTypeHoverColor: "Red",
    upperBarColor: "rgb(223, 230, 198)",
    toWriteColor: "rgb(223, 230, 198)",
    progressLengthBackgroundColor: "rgb(25, 181, 11)",
    aboutColor: "rgb(48, 49, 43)",
    siteNameColor: "purple",
    motoColor: "purple",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
  },
];


const body = document.querySelector("body");

const progressLength = document.querySelector("#progressLength");
const upperbar = document.querySelector("#upperbar");
const toWrite = document.querySelector("#toWrite");

const themeHeading = document.querySelector('.themeHeading');

const about = document.querySelector(".about");
const siteName= document.querySelector(".siteName");
const moto = document.querySelector(".moto");

const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".links a");
const aceType=document.querySelector(".acetype");


themeElements = document.querySelectorAll(".theme");


// themeHeading.style.color = "Yellow";


function themeChangeFunction(index) {
    // index = 1;
    console.log("we are here");
    if(themeHeading)
        themeHeading.style.color = arr[index].themeHeading;
    if (navbar) navbar.style.color = arr[index].navbar;
    if(body)
        body.style.backgroundColor = arr[index].backgroundColor;


    for (let i = 0; i <navbarLinks.length ; i++) {
        navbarLinks[i].style.color = arr[index].navbar;
        navbarLinks[i].addEventListener('mouseover', (event)=>{
            event.target.style.color = arr[index].linksHoverColor;
        });
        navbarLinks[i].addEventListener("mouseout", (event) => {
          event.target.style.color = arr[index].navbar;
        });
    }

        aceType.addEventListener("mouseover", (event) => {
          event.target.style.color = arr[index].aceTypeHoverColor;
        });
        aceType.addEventListener("mouseout", (event) => {
          event.target.style.color = arr[index].navbar;
        });
    
    if(progressLength) {
        progressLength.style.backgroundColor = arr[index].progressLengthBackgroundColor;
    }

    if(upperbar){
        upperbar.style.color = arr[index].upperBarColor;
    }

    if(toWrite){
        toWrite.style.color = arr[index].toWriteColor;
    }

    if(about)about.style.color = arr[index].aboutColor;

    if(siteName)siteName.style.color = arr[index].siteNameColor;

    if (moto) moto.style.color = arr[index].motoColor;
}

if(window.localStorage.hasOwnProperty("theme")) {
    themeChangeFunction(window.localStorage.theme);
}

themeElements.forEach(theme => {
    theme.addEventListener('click', (event)=>{
        window.localStorage.theme = event.target.getAttribute("name");
        themeChangeFunction(event.target.getAttribute("name"));
    });
});

