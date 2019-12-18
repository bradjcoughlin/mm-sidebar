let dragSources = document.querySelectorAll('[draggable="true"]');
dragSources.forEach(dragSource => {
    dragSource.addEventListener("dragstart", dragStart);
    dragSource.addEventListener("dragend", dragEnd);
});

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
    collapseSource.addEventListener("click", collapseExpand);
});

function collapseExpand(e) {
    let menu = e.target.parentElement;
    let content = e.target.parentElement.querySelector('#' + e.target.id + '.NavGroupContent');
    content.classList.toggle("NavGroupContent__is-collapsed");
    menu.classList.toggle("NavGroup__is-collapsed")
}
