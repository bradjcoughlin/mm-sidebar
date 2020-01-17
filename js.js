// expand/collapse
let collapseSources = document.querySelectorAll('.NavGroupToggle');
collapseSources.forEach(collapseSource => {
    collapseSource.addEventListener("click", collapseExpandAnimated);
});

function collapseExpandAnimated(e) {
    const icon = e.target.querySelector('i.fas');
    icon.classList.toggle('fa-rotate-180');

    const boxes = e.target.parentElement.querySelectorAll('#' + e.target.id + '.NavGroupContent .NavGroupContent__list-item:not(.unread)');
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