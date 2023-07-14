const paraParentDiv = document.getElementById("toWrite");

// calling the api and getting the paragraph

let para = "cooler",
  countValue = 50;

let totalWords = para.split(" ").length;

para = Array.from(para);

para.unshift("_");

value = true;
let index = 0;

para.forEach((element) => {
  charSpan = document.createElement("span");
  charSpan.innerHTML = element;
  charSpan.id = `spanId` + index;
  charSpan.classList.add("spanClass");

  if (element == " ") {
    charSpan.style.margin = "0px 1px";
  } else {
    charSpan.style.margin = "0px 0.5px";
  }

  if (index != 0) paraParentDiv.appendChild(charSpan);

  value = !value;
  index++;
});

let paraLength = para.length;

let states = new Array(length + 1);

for (let i = 1; i < length; i++) states[i] = -1;

states[0] = 1;

//  Defining the states and previous keys which will help us, in determining the states

let prev = 0;

// Grabbing the textarea and checking how it works, on changing

let allowedSet = new Set([
  "?",
  ",",
  "[",
  "]",
  "<",
  ">",
  ".",
  "/",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]);

// console.log("Is there -> " , allowedSet.has("Hello"));

tArea = document.getElementById("bodyy");

allSpans = document.getElementsByClassName("spanClass");

// flag which shows whether the user started the race
let Started = false,
  startTime,
  endTime,
  timeTaken;

result = document.getElementById("result");
wpm = document.getElementById("wpm");
newPara = document.getElementById("newPara");

tArea.addEventListener("keydown", (event) => {
  if (Started == false) {
    Started = true;
    startTime = Date.now();
  }

  // key user pressed
  keyPressed = event.key;

  // User done writing the Paragraph
  if (prev == paraLength - 2 && states[prev] == 1) {
    console.log("Test Done!!!!!!!!!");
    return;
  }
  if (prev == paraLength - 2 && states[prev] == 0) {
    if (keyPressed != "Backspace") return;
  }

  // event.target.value = "";
  let curr = prev + 1;

  // console.log(keyPressed)

  // Sorting out the differnet key presses
  if (keyPressed == "Backspace") {
    console.log("inside back space");
    if (prev != 0) {
      allSpans[prev - 1].style.color = "rgb(27, 221, 255)";

      // if that character is a space, then we are required to change the backgroudn color
      if (allSpans[prev - 1].innerHTML == " ") {
        allSpans[prev - 1].style.textDecoration = "none";
        allSpans[prev - 1].style.textDecorationColor = "transparent";
      }
      prev--;
    }
    return;
  }

  kp = keyPressed;
  if (
    ((kp >= "a" && kp <= "z") || (kp >= "A" && kp <= "Z")) &&
    kp.length == 1
  ) {
    // console.log("inside if");
  } else if (
    keyPressed == " " ||
    keyPressed == "," ||
    allowedSet.has(keyPressed)
  ) {
  } else {
    //   console.log("inside else");
    return;
  }

  if (states[prev] == 0) {
    states[curr] = 0;
    allSpans[curr - 1].style.color = "red";
    if (allSpans[curr - 1].innerHTML == " ") {
      allSpans[curr - 1].style.textDecoration = "underline";
      allSpans[curr - 1].style.textDecorationColor = "red";
    }
  } else {
    if (allSpans[curr - 1].innerHTML == keyPressed) {
      states[curr] = 1;
      allSpans[curr - 1].style.color = "rgb(2, 147, 72)";

      if (allSpans[curr - 1].innerHTML == " ") {
        allSpans[curr - 1].style.textDecoration = "underline";
        allSpans[curr - 1].style.textDecorationColor = "rgb(2, 147, 72)";
      }
    } else {
      states[curr] = 0;
      allSpans[curr - 1].style.color = "red";

      if (allSpans[curr - 1].innerHTML == " ") {
        allSpans[curr - 1].style.textDecoration = "underline";
        allSpans[curr - 1].style.textDecorationColor = "red";
      }
    }
  }

  prev = curr;

  if (prev == paraLength - 2 && states[prev] == 1) {
    endTime = Date.now();
    timeTaken = (endTime - startTime) / 1000;
    result.style.visibility = "visible";
    console.log("Themes -> ", totalWords, timeTaken);

    wpm.innerHTML = String(Math.round((totalWords * 60) / timeTaken));
  }
});

const resetFunction = async (value = 50) => {
  //   console.log("we are here");

  response = await fetch(`/getparagraph/${value}`);
  // console.log(response);
  let paraResponse = await response.json();
  //    console.log(paraResponse.paragraph);

  //   result = await JSON.parse(response.json());
  //   result = result.paragraph;

  //   console.log(result);

  // Setting the visibility of the result to none
  result.style.visibility = "hidden";

  para = paraResponse.paragraph;
  totalWords = para.split(" ").length;

  para = Array.from(para);

  para.unshift("_");

  value = true;
  index = 0;

  // Resetting everything writting in the ParagraphParentDiv
  paraParentDiv.innerHTML = "";

  para.forEach((element) => {
    charSpan = document.createElement("span");
    charSpan.innerHTML = element;
    charSpan.id = `spanId` + index;
    charSpan.classList.add("spanClass");

    if (element == " ") {
      charSpan.style.margin = "0px 1px";
    } else {
      charSpan.style.margin = "0px 0.5px";
    }

    if (index != 0) paraParentDiv.appendChild(charSpan);

    value = !value;
    index++;
  });

  paraLength = para.length;

  states = new Array(length + 1);

  for (let i = 1; i < length; i++) states[i] = -1;

  states[0] = 1;

  //  Defining the states and previous keys which will help us, in determining the states

  prev = 0;

  // console.log("Is there -> " , allowedSet.has("Hello"));

  // flag which shows whether the user started the race
  Started = false;
  // startTime, endTime,timeTaken;
};

newPara.addEventListener("click", async () => {
  // console.log("value -> " );
  resetFunction(countValue);
  //   console.log(value);
});

newPara.click();

countElements = document.getElementsByClassName("count");

for (let i = 0; i < countElements.length; i++) {
  countElements[i].addEventListener("click", (event) => {
    // console.log(event.target.innerHTML)
    countValue = event.target.innerHTML;
    resetFunction(countValue);
  });
}
