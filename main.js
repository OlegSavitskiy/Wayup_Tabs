const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const contentInside = document.querySelectorAll('.content-inside');
const tabsInside = document.getElementById('tabs-inside');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})

const changeClassInside = el => {
    for(let i = 0; i < tabsInside.children.length; i++){
        tabsInside.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabsInside.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClassInside(e.target);
    for(let i = 0; i < contentInside.length; i++) {
        contentInside[i].classList.remove('active');
        if(contentInside[i].dataset.content === currTab) {
            contentInside[i].classList.add('active');
        }
    }
})