let dragSources = document.querySelectorAll('[draggable="true"]');
dragSources.forEach(dragSource => {
    dragSource.addEventListener("dragstart", dragStart);
    dragSource.addEventListener("dragend", dragEnd);
});

/* TODO: adding inline styles breaks collapsed styles :( */
function dragStart(e) {
    this.classList.add("dragging");
    this.style.backgroundColor = '#0d4896';
    this.style.border = '2px dashed #BCCDE7';
    this.style.opacity = '0.4';
}

function dragEnd(e) {
    this.classList.remove("dragging");
    this.style.backgroundColor = 'inherit';
    this.style.opacity = 'inherit';
    this.style.border = 'solid 2px transparent';
}


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
    console.log(boxes);
    boxes.forEach(box => {
        box.classList.add('animating');
        box.classList.toggle('collapsed');

        box.addEventListener('transitionend', () => {
            console.log('ended');
            box.classList.remove('animating');
        }, { once: true });
    });
    console.log(e.target);
}

function toggleBox(e) {
    const boxes = document.querySelectorAll('.box.transform');
    boxes.forEach(box => {
        box.classList.toggle('collapsed');
    });
    console.log(e.target);
}

const shrinkButton = document.querySelector('#shrinkButton');

shrinkButton.addEventListener('click', shrinkBox);

const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', toggleBox);