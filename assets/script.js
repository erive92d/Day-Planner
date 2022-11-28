// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var displayDay = $('#currentDay')
var mainContainer = $('.container-lg')
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



var currentTime = dayjs().format('MMMM DD')
displayDay.append(currentTime)


var currentHour = dayjs().format('H')
// currentHour = 17


console.log(currentHour)
// var numDivs = 4;



//from 9AM to 12AM
function create912() {
  var i = 0;
  while (i < 4) {
    var newDiv = document.createElement('div')
    var newHour = document.createElement('div')
    var newTextArea = document.createElement('textarea');
    var newButton = document.createElement('button')
    var newI = document.createElement('i')





    newHour.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3')
    newHour.setAttribute('id', 9 + i)
    var hourID = newHour.getAttribute('id')
    newHour.textContent = hourID + 'AM'


    newDiv.setAttribute('hour-', 9 + i)
    newDiv.classList.add('time-block', 'row')

    newTextArea.classList.add('col-8', 'col-md-10', 'description')
    newTextArea.setAttribute('rows', 3)
    newTextArea.setAttribute('number', 9 + i)
    var textNumber = newTextArea.getAttribute('number')




    newButton.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1')
    newButton.setAttribute('aria-label', 'save')

    newI.classList.add('fas', 'fa-save')
    newI.setAttribute('aria-hidden', 'true')





    newButton.append(newI)
    newDiv.append(newHour, newTextArea, newButton)


    mainContainer.append(newDiv)

    i++
  }
  var allTextAreas = document.querySelectorAll('textarea')
  

  for (var i = 0; i < allTextAreas.length; i++) {
    var valueNum = allTextAreas[i].getAttribute('number')
    var turnNums = Number(valueNum)
    console.log(turnNums)
    
    console.log(allTextAreas[i])
    if (turnNums < currentHour) {
      allTextAreas[i].classList.add('past')

    } else if (turnNums > currentHour) {
      allTextAreas[i].classList.add('future')
      
     
    } else {
      allTextAreas[i].classList.add('present')
     
    

    }
  }


}

//from 1PM to 5PM
function create1to5() {
  var i = 1;
  while (i <= 5) {
    var newDiv = document.createElement('div')
    var newHour = document.createElement('div')
    var newTextArea = document.createElement('textarea');
    var newButton = document.createElement('button')
    var newI = document.createElement('i')





    newHour.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3')
    newHour.setAttribute('id', i)
    var hourID = newHour.getAttribute('id')
    newHour.textContent = hourID + 'PM'


    newDiv.setAttribute('hour-', i)
    newDiv.classList.add('time-block', 'row')

    newTextArea.classList.add('col-8', 'col-md-10', 'description')
    newTextArea.setAttribute('rows', 3)
    newTextArea.setAttribute('number', 12 + i)
    var textNumber = newTextArea.getAttribute('number')




    newButton.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1')
    newButton.setAttribute('aria-label', 'save')

    newI.classList.add('fas', 'fa-save')
    newI.setAttribute('aria-hidden', 'true')





    newButton.append(newI)
    newDiv.append(newHour, newTextArea, newButton)


    mainContainer.append(newDiv)

    i++
  }


  var allTextAreas = document.querySelectorAll('textarea')
  

  for (var i = 0; i < allTextAreas.length; i++) {
    var valueNum = allTextAreas[i].getAttribute('number')
    var turnNums = Number(valueNum)
    console.log(turnNums)
    
    console.log(allTextAreas[i])
    if (turnNums < currentHour) {
      allTextAreas[i].classList.add('past')

    } else if (turnNums > currentHour) {
      allTextAreas[i].classList.add('future')
      
     
    } else {
      allTextAreas[i].classList.add('present')
     
    

    }
  }
}



//save

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





create912()
create1to5()
saveText()