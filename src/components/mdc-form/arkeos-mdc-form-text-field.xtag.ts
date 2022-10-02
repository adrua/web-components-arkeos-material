import { textField } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcTextField extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    private field: textField.MDCTextField;

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
// `<label class="mdc-text-field mdc-text-field--filled" style="width: 100%">
//     <span class="mdc-text-field__ripple"></span>
//     <span class="mdc-floating-label">Label</span>
//     <input type="text" class="mdc-text-field__input" aria-labelledby="my-label">
//     <span class="mdc-line-ripple"></span>
// </label>`;

        this.promise.then(() => {
            this.field = new textField.MDCTextField(this.host);
            this._captionElement = this.host.querySelector('.mdc-floating-label');
        }).then((x) => {
            childs.forEach((child) => this.host.appendChild(child));
        })
    }
}