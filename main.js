const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');


//ta toggles och loopa genom varje toggle, och eventlistener ska vara change, icke click.
//när det ska köras vi ska ha funktion som heter doTheTrick
//funktioner ska pass in e.target (what ever we select)
toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
  doTheTrick(e.target)
}));

function doTheTrick(theClickedOne) {
  if(good.checked && cheap.checked && fast.checked) {
    //if good === e.target dvs theClickedOne
    if(good === theClickedOne) {
      fast.checked = false //uncheck = false
    }

    if(cheap === theClickedOne) {
      good.checked = false
    }

    if(fast === theClickedOne) {
      cheap.checked = false
    }
  }
}

