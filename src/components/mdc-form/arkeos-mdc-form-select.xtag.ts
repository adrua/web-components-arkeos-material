import { select } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcSelect extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    private field: select.MDCSelect;

    //Attributes
    private _captionElement: HTMLElement = null;
    set 'caption::attr'(val) {
        this.promise.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.textContent;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.overflow = "none";

        let childs = Array.from(this.host.children);

//         this.host.innerHTML = 
// `<ul class="mdc-deprecated-list" tabindex="-1">
//     <li class="mdc-deprecated-list-item" tabindex="0">
//         <span class="mdc-deprecated-list-item__ripple"></span>
//         <span class="mdc-deprecated-list-item__text">Fruit</span>
//         <button>one</button>
//     </li>
//     <li class="mdc-deprecated-list-item">
//         <span class="mdc-deprecated-list-item__ripple"></span>
//         <span class="mdc-deprecated-list-item__text">Potato</span>
//         <a href="http://www.google.com">Link</a>
//     </li>
//     <li class="mdc-deprecated-list-item">
//         <span class="mdc-deprecated-list-item__ripple"></span>
//         <span class="mdc-deprecated-list-item__text">Pasta</span>
//         <input type="checkbox"/>
//     </li>
//     <li class="mdc-deprecated-list-item">
//         <span class="mdc-deprecated-list-item__ripple"></span>
//         <span class="mdc-deprecated-list-item__text">Pizza</span>
//         <input type="radio"/>
//     </li>
// </ul>`;

        this.promise.then(() => {
            this.field = new select.MDCSelect(this.host.firstElementChild);
            this._captionElement = this.host.querySelector('.mdc-floating-label');
        }).then((x) => {
            childs.forEach((child) => this.host.appendChild(child));
        })
    }
}