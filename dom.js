/* dom.js */

function init() {
    let element = document.getElementById('walkBtn');
    element.addEventListener('click', function () {
        display();
    });

    element = document.getElementById('adwalkBtn');
    element.addEventListener('click', function () {
        advancedWalk();
    });

    element = document.getElementById('modifyBtn');
    element.addEventListener('click', function () {
        modify();
    });

    element = document.getElementById('addBtn');
    element.addEventListener('click', function () {
        add();
    });

    element = document.getElementById('removeBtn');
    element.addEventListener('click', function () {
        remove();
    });

}

let textarea = document.getElementById("nodeinfo1");
depth = 0;
function advancedWalk() {
    const rootNode = document.querySelector("html");
    walkTree(rootNode, 0)
}
function walkTree(node, indent) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeType === Node.COMMENT_NODE) {
        return;
    }
    indent = depth * 4;
    textarea.value += indent + node.tagName + "\n";
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
        walkTree(children[i], indent + 1);
    }
}

function display() {
    let el1;

    el1 = document.getElementById('p1');
    customwrite(el1);

    el1 = el1.firstChild;
    customwrite(el1);

    el1 = el1.nextSibling;
    customwrite(el1);

    el1 = el1.lastChild;
    customwrite(el1);

    el1 = el1.parentNode.parentNode.parentNode;
    customwrite(el1);

    el1 = el1.querySelector('section > *');
    customwrite(el1);


}
let tempString = 'This page says' + '\n';
function customwrite(el1) {
    let nodeType = el1.nodeType;
    let nodeName = el1.nodeName;
    let nodeValue = el1.nodeValue;

    tempString += 'Node Type: ' + nodeType + '\n' + 'Node Name: ' + nodeName + '\n' + 'Node Value: '
        + nodeValue + '\n';
    document.getElementById('nodeinfo').innerHTML = tempString;
}


function walk() {
    let el;

    el = document.getElementById('p1');
    showNode(el);

    el = el.firstChild;
    showNode(el);

    el = el.nextSibling;
    showNode(el);

    el = el.lastChild;
    showNode(el);

    el = el.parentNode.parentNode.parentNode;
    showNode(el);

    el = el.querySelector('section > *');
    showNode(el);
}


function showNode(el) {
    let nodeType = el.nodeType;
    let nodeName = el.nodeName;
    let nodeValue = el.nodeValue;

    alert(`Node type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}`);

}


function modify() {
    let el = document.getElementById('p1');

    // You can do all the properties one by one if you know them in HTML
    el.title = 'I was changed by JS';

    // you can update the style as a string
    // el.style = 'color: blue; font-size: 1em;';

    // you also may prefer to update on the CSS object.  This is the same as above
    // el.style.color = 'blue';
    // el.style.fontSize = '1em';
    // be careful doing many styles bit by bit it isn't efficent, might be easier just to set a class

    // you can also update the class list
    el.classList.add('fancy');

    // you can also update the dataset which change data-* attributes
    el.dataset.cool = 'true';       // data-cool="true"
    el.dataset.coolFactor = '9000'; //data-cool-factor="9000"

}

function add() {

    let p, em, txt1, txt2, txt3;

    // first we do things the long old-fashioned standard DOM way
    p = document.createElement('p'); // <p></p>
    em = document.createElement('em'); // <em></em>
    txt1 = document.createTextNode('This is a '); // "This is a"
    txt2 = document.createTextNode('test'); // "test"
    txt3 = document.createTextNode(' of the DOM'); // " of the DOM"

    p.appendChild(txt1); // <p>This is a</p>
    em.appendChild(txt2); // <em>test</em>
    p.appendChild(em); // <p>This is a<em>test</em></p>
    p.appendChild(txt3); // <p>This is a<em>test</em> of the DOM</p>

    // go an insert this new copy below the old one
    let oldP = document.getElementById('p1');
    oldP.parentNode.insertBefore(p, oldP.nextSibling);

    // Alternative method using innerHTML and insertAdjacentHTML
    // let oldP = document.getElementById('p1');
    // oldP.insertAdjacentHTML('afterend', '<p>This is a<em>test</em> of the DOM</p>');
    // clearly short hands are pretty easy!
}

function remove() {
    document.body.removeChild(document.body.lastChild);
}

window.addEventListener('DOMContentLoaded', init);