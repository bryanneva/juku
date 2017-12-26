// import {initialize} from "juku-core";

import {initialize} from "../../core";

export function createJuku() {
    const root = document.getElementById('root');
    const ele = document.createElement('h2');
    ele.innerText = "This is the root element";
    if (root) {
        root.appendChild(ele);
    }

    initialize();
}

createJuku();