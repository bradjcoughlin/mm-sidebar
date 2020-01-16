// expand/collapse
let collapseSources = document.querySelectorAll('.NavGroupToggle');
collapseSources.forEach(collapseSource => {
    collapseSource.addEventListener("click", collapseExpandAnimated);
});

function collapseExpandOld(e) {
    let menu = e.target.parentElement;
    let content = e.target.parentElement.querySelector('#' + e.target.id + '.NavGroupContent');
    content.classList.toggle("NavGroupContent__is-collapsed");
    menu.classList.toggle("NavGroup__is-collapsed")
}

function collapseExpandAnimated(e) {
    const boxes = e.target.parentElement.querySelectorAll('#' + e.target.id + '.NavGroupContent .NavGroupContent__list-item');
    boxes.forEach(box => {
        box.classList.add('animating');
        box.classList.toggle('collapsed');

        box.addEventListener('transitionend', () => {
            box.classList.remove('animating');
        }, { once: true });
    });
}

function toggleBox(e) {
    const boxes = document.querySelectorAll('.box.transform');
    boxes.forEach(box => {
        box.classList.toggle('collapsed');
    });
}

const shrinkButton = document.querySelector('#shrinkButton');

shrinkButton.addEventListener('click', shrinkBox);

const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', toggleBox);