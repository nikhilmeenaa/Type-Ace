// console.log("Themes JS");

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
    usernameColor: "rgb(255, 243, 15)",
  },
  {
    themeHeading: "rgb(255, 243, 15)",
    navbar: "rgb(255, 243, 15)",
    backgroundColor: "rgb(19, 19, 19)",
    linksHoverColor: "rgb(255, 179, 39)",
    aceTypeHoverColor: "rgb(255, 179, 39)",
    upperBarColor: "yellow",
    toWriteColor: "rgb(255, 243, 15)",
    progressLengthBackgroundColor: "White",
    aboutColor: "white",
    siteNameColor: "rgb(255, 243, 15)",
    motoColor: "rgb(255, 243, 15)",
    usernameColor: "rgb(255, 243, 15)",
  },
  {
    themeHeading: "rgb(33, 235, 148)",
    navbar: "rgb(33, 235, 148)",
    backgroundColor: "rgb(11, 32, 46)",
    // background-color: rgb(223, 230, 198);
    // color: rgb(48, 49, 43);

    linksHoverColor: "cyan",
    aceTypeHoverColor: "cyan",
    upperBarColor: "rgb(33, 235, 148)",
    toWriteColor: "rgb(33, 235, 148)",
    progressLengthBackgroundColor: "rgb(25, 181, 11)",
    aboutColor: "rgb(33, 235, 148)",
    siteNameColor: "cyan",
    motoColor: "cyan",
    usernameColor: "rgb(33, 235, 148)",
  },
  {
    themeHeading: "red(255, 255, 255)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
    usernameColor: "red(255, 255, 255)",
  },
  {
    themeHeading: "rgb(231, 237, 172)",
    navbar: "rgb(231, 237, 172)",
    backgroundColor: "rgb(16, 29, 37)",
    linksHoverColor: "green",
    aceTypeHoverColor: "green",
    upperBarColor: "rgb(231, 237, 172)",
    toWriteColor: "rgb(231, 237, 172)",
    progressLengthBackgroundColor: "rgb(25, 181, 11)",
    aboutColor: "rgb(231, 237, 172)",
    siteNameColor: "cyan",
    motoColor: "cyan",
    usernameColor: "rgb(231, 237, 172)",
  },
  {
    themeHeading: "rgb(248, 223, 255)",
    navbar: "rgb(248, 223, 255)",
    backgroundColor: "rgb(32, 23, 33)",
    linksHoverColor: "green",
    aceTypeHoverColor: "green",
    upperBarColor: "rgb(248, 223, 255)",
    toWriteColor: "rgb(248, 223, 255)",
    progressLengthBackgroundColor: "rgb(25, 181, 11)",
    aboutColor: "rgb(248, 223, 255)",
    siteNameColor: "cyan",
    motoColor: "cyan",
    usernameColor: "rgb(248, 223, 255)",
  },
  {
    themeHeading: "rgb(48, 49, 43)",
    navbar: "rgb(223, 230, 198)",
    backgroundColor: "rgb(178, 183, 162)",
    linksHoverColor: "rgb(234, 98, 255)",
    aceTypeHoverColor: "rgb(234, 98, 255)",
    upperBarColor: "rgb(223, 230, 198)",
    toWriteColor: "rgb(223, 230, 198)",
    progressLengthBackgroundColor: "rgb(25, 181, 11)",
    aboutColor: "rgb(48, 49, 43)",
    siteNameColor: "purple",
    motoColor: "purple",
    usernameColor: "rgb(178, 183, 162)",
  },
  {
    themeHeading: "rgb(48, 49, 43)",
    navbar: "rgb(186, 218, 238)",
    backgroundColor: "rgb(186, 218, 238)",
    linksHoverColor: "rgb(234, 98, 255)",
    aceTypeHoverColor: "rgb(234, 98, 255)",
    upperBarColor: "rgb(186, 218, 238)",
    toWriteColor: "rgb(186, 218, 238)",
    progressLengthBackgroundColor: "rgb(25, 181, 11)",
    aboutColor: "rgb(48, 49, 43)",
    siteNameColor: "purple",
    motoColor: "purple",
    usernameColor: "rgb(186, 218, 238)",
  },
  {
    themeHeading: "rgb(10, 193, 190)",
    navbar: "rgb(10, 193, 190)",
    backgroundColor: "rgb(35, 34, 34)",
    linksHoverColor: "rgb(12, 243, 239)",
    aceTypeHoverColor: "rgb(12, 243, 239)",
    upperBarColor: "rgb(27, 221, 255)",
    toWriteColor: "rgb(27, 221, 255)",
    progressLengthBackgroundColor: "rgb(59, 138, 105)",
    aboutColor: "rgb(34, 174, 122)",
    siteNameColor: "rgb(7, 201, 198)",
    motoColor: "rgb(7, 201, 198)",
    usernameColor: "rgb(10, 193, 190)",
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
const username = document.querySelector(".userNameOnProfile");




// themeHeading.style.color = "Yellow";


function themeChangeFunction(index) {
    // index = 1;
    // console.log("we are here");
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

    if(username){
        console.log(index);
        console.log("username color changing function");
        username.style.color = arr[index].usernameColor;
    }

}

if(window.localStorage.hasOwnProperty("theme")) {
    if(!isNaN(window.localStorage.getItem("theme")) )
        themeChangeFunction(window.localStorage.theme);
    // else 
        // themeChangeFunction(8);
    console.log(typeof(window.localStorage.theme));
}


themeElements = document.querySelectorAll(".theme");

themeElements.forEach(theme => {
    theme.addEventListener('click', (event)=>{
        window.localStorage.theme = event.target.getAttribute("name");
        themeChangeFunction(event.target.getAttribute("name"));
    });
});

