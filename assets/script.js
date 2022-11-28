// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $("#time-display");
var timeBlock = $(".time-block");
var saveButton = $(".fa-save");
var desCription = $(".description");

var rightNow;
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function displayTime() {
  rightNow = dayjs().format("dddd, MMMM D");
  timeDisplayEl.text(rightNow);
}

displayTime();
var hourNow = dayjs().format("h");
hourNow = 9

// console.log(hourNow)

function saveText() {
  var saveIcon = document.querySelectorAll(".fas");
  for (var i = 0; i < saveIcon.length; i++) {
    var currentItem = saveIcon[i];
    currentItem.setAttribute("id", [i]);

    saveIcon[i].addEventListener("click", function (event) {
      event.preventDefault();
      var element = event.target;
      if (element.matches(".fa-save")) {
        var textarea = element.parentElement.previousElementSibling.value;
        var test = element.getAttribute("id");
        localStorage.setItem(test, textarea);
        console.log(currentItem);
      }
    });
  }
}

// function changeColor() {

// }
function timeBlockHTML() {
  for(var i = 0; i < timeBlock.length; i++) {
    timeBlock[i].classList.remove('past','present','future')
    
    if(hourNow > timeBlock[i].innerText.match(/\d{9}/)) {
      timeBlock[i].classList.add('past')
    }
    else if(hourNow < timeBlock[i].innerText.match(/\d{9}/)) {
      timeBlock[i].classList.add('future')
    } else {
      timeBlock[i].classList.add('present')
    }
  }
}



timeBlockHTML()



console.log(timeBlock[0].innerText.match(/[0-9]+/g))
console.log(timeBlock[0].classList)


// var newTest = timeBlock[0].innerText.match(/[a-zA-Z]+|[0-9]+/g)
// console.log(newTest)


var numBlocks = 5;

for (var i = 0; i <= numBlocks; i++) {

  


  var future = document.querySelector(".container-fluid");
  var newBlock = document.createElement("div");
  var newText = document.createElement("textarea");
  var newTime = document.createElement('div');
  var newBtn = document.createElement('button')
  var newSave = document.createElement('i')

  //time
  newTime.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3')
  newTime.textContent = i + 'PM'


  //originally start from 0, but changed to 12
  if (newTime.innerText === '0PM') {
    newTime.innerText = '12AM'
  }

 

  //textarea
  newText.classList.add('col-8', 'col-md-10', 'description')
  newText.setAttribute('rows', 3)

  //button
  newBtn.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1')
  newBtn.setAttribute('aria-label', 'save')

  //save
  newSave.classList.add('fas', 'fa-save')
  newSave.setAttribute('aria-hidden', true)


  newBlock.setAttribute("id", 'hour-' + i);
  newBlock.classList.add("time-block","row");

  if(i > hourNow) {
    newBlock.classList.add('future')
  } else if ( i < hourNow) {
    newBlock.classList.add('past')
  } else {
    newBlock.classList.add('present')
  }
 
  newBlock.append(newTime, newText, newBtn)
  newBtn.append(newSave)
  
  future.append(newBlock);
}

saveText();
