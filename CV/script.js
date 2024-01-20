function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

var triggers = [
    { button: 'myButton-item1', modal: 'myModal-item1' },
    { button: 'myButton-item2', modal: 'myModal-item2' },
    { button: 'myButton-item3', modal: 'myModal-item3' },

];

triggers.forEach(function (trigger) {
    var btn = document.getElementById(trigger.button);
    btn.onclick = function (event) {
        event.preventDefault();
        openModal(trigger.modal);
    };
});

var closeButtons = document.getElementsByClassName("close");
console.log(closeButtons)
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        var modal = this.closest('.modal');
        if (modal) {
            modal.style.display = "none";
        }

    }
}

window.onclick = function (event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}