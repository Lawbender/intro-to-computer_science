window.addEventListener("load", function()
{
            // get button element refrences.
let clickCounterElement = document.getElementById("click-counter");
let clickButtonElement = this.document.getElementById("click-button");
// counter value
let counter = 0;
// click button function
let clickButtonFunc = function()
{
counter++;
//update counter value
clickCounterElement.innerHTML = counter;
};
// attach click button.
clickButtonElement.addEventListener("click", clickButtonFunc);
});
