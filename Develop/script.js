
$(function () {
  
  var container = $(".container-fluid");
  var currentHour = dayjs().format('H');

// FOR loop to create time block elements from 9 to 5
  for(var i = 9; i < 18; i++) {

  // time in 12 hour format
    if (i > 12) {
      var hour = i - 12;
      var ampm = "pm"; }
      else if (i === 12) {
        var hour = i;
        var ampm = "pm";
      }
      else {
        var hour = i;
        var ampm = "am";
      }

  // create the time blocks in each loop iteration
    var newTimeBlock = document.createElement("div");
    var newTimeBlockElement = document.createElement("div");
    var newTextArea = document.createElement("textarea");
    var newButton = document.createElement("button");
    var newImage = document.createElement("i");
    // label for row
    newTimeBlockElement.textContent = hour + " " + ampm;
    container.append(newTimeBlock);
    newTimeBlock.append(newTimeBlockElement);
    newTimeBlockElement.after(newTextArea);
    newTextArea.after(newButton);
    newButton.append(newImage);
    
    // add classes to elements based on current hour
    if (i < currentHour) {
      newTimeBlock.className += "row time-block past";
    } else if (i == currentHour) {
      newTimeBlock.className += "row time-block present";
    } else if (i > currentHour) {
      newTimeBlock.className += "row time-block future";
    }

    // set attributes for elements
    newTimeBlock.setAttribute("id", "hour-" + i);
    newTimeBlockElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    newTextArea.setAttribute("class", "col-8 col-md-10 description");
    newTextArea.setAttribute("rows", "3");
    newTextArea.setAttribute("id", "text-" + i);
    newTextArea.setAttribute("placeholder","Enter event here");
    newButton.setAttribute("class", "btn saveBtn col-2 col-md-1");
    newButton.setAttribute("area-label", "save");
    newButton.setAttribute("id", "button-" + i);
    newImage.setAttribute("class", "fas fa-save");
    newImage.setAttribute("area-hidden", "true");

   
  // code to display the current date in the header of the page.
  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);


  console.log("The current hour is " + currentHour);

}


// check local storage for saved text for each hour
  var hour9button = document.getElementById("button-9");
  var hour9text = document.getElementById("text-9");
  hour9text.textContent = localStorage.getItem("hour9am");

  var hour10button = document.getElementById("button-10");
  var hour10text = document.getElementById("text-10");
  hour10text.textContent = localStorage.getItem("hour10am");

  var hour11button = document.getElementById("button-11");
  var hour11text = document.getElementById("text-11");
  hour11text.textContent = localStorage.getItem("hour11am");

  var hour12button = document.getElementById("button-12");
  var hour12text = document.getElementById("text-12");
  hour12text.textContent = localStorage.getItem("hour12pm");

  var hour13button = document.getElementById("button-13");
  var hour13text = document.getElementById("text-13");
  hour13text.textContent = localStorage.getItem("hour13pm");

  var hour14button = document.getElementById("button-14");
  var hour14text = document.getElementById("text-14");
  hour14text.textContent = localStorage.getItem("hour14pm");

  var hour15button = document.getElementById("button-15");
  var hour15text = document.getElementById("text-15");
  hour15text.textContent = localStorage.getItem("hour15pm");

  var hour16button = document.getElementById("button-16");
  var hour16text = document.getElementById("text-16");
  hour16text.textContent = localStorage.getItem("hour16pm");

  var hour17button = document.getElementById("button-17");
  var hour17text = document.getElementById("text-17");
  hour17text.textContent = localStorage.getItem("hour17pm");


  // add listeners to buttons after they are created
  // log the text area value to local storage
  hour9button.addEventListener("click", function() {
    localStorage.setItem("hour9am", hour9text.value);
    console.log("hour9am" + hour9text.value);
  });

  hour10button.addEventListener("click", function() {
    localStorage.setItem("hour10am", hour10text.value);
    console.log("hour10am" + hour10text.value);
  });

  hour11button.addEventListener("click", function() {
    localStorage.setItem("hour11am", hour11text.value);
    console.log("hour11am" + hour11text.value);
  });

  hour12button.addEventListener("click", function() {
    localStorage.setItem("hour12pm", hour12text.value);
    console.log("hour12pm" + hour12text.value);
  });

  hour13button.addEventListener("click", function() {
    localStorage.setItem("hour13pm", hour13text.value);
    console.log("hour13pm" + hour13text.value);
  });

  hour14button.addEventListener("click", function() {
    localStorage.setItem("hour14pm", hour14text.value);
    console.log("hour14pm" + hour14text.value);
  });

  hour15button.addEventListener("click", function() {
    localStorage.setItem("hour15pm", hour15text.value);
    console.log("hour15pm" + hour15text.value);
  });

  hour16button.addEventListener("click", function() {
    localStorage.setItem("hour16pm", hour16text.value);
    console.log("hour16pm" + hour16text.value);
  });

  hour17button.addEventListener("click", function() {
    localStorage.setItem("hour17pm", hour17text.value);
    console.log("hour17pm" + hour17text.value);
  });


});