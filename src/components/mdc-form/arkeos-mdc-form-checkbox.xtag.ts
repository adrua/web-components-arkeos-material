import { checkbox } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcCheckBox extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    private field: checkbox.MDCCheckbox;

    //Attributes
    private _captionElement: HTMLSpanElement = null;
    set 'caption::attr'(val) {
        this.promise.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.textContent;
    }

    private _labelPosition: "left" | "right" = 'left';
    set 'label-position::attr'(val: "left" | "right") {
        this._labelPosition = val;
        this.promise.then(() => {
            this._captionElement.style.float = val;
        });
    }

    get 'label-position::attr'() {
        return this._labelPosition;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.overflow = "none";

        let childs = Array.from(this.host.children);

//         this.host.innerHTML = 
// `<div style="width: 100%;">
//     <span class="arkeos-mdc-label" style="float: ${this._labelPosition};">Label</span>
//     <div class="mdc-checkbox" style="float: inline-start;">
//         <input type="checkbox" 
//             class="mdc-checkbox__native-control"            
//             id="my-checkbox"
//             aria-labelledby="my-checkbox-label"/>
//         <div class="mdc-checkbox__frame"></div>
//         <div class="mdc-checkbox__background">
//             <svg class="mdc-checkbox__checkmark"
//                 viewBox="0 0 24 24">
//                 <path class="mdc-checkbox__checkmark-path"
//                     fill="none"
//                     d="M4.1,12.7 9,17.6 20.3,6.3"/>
//             </svg>
//             <div class="mdc-checkbox__mixedmark"></div>
//         </div>
//     </div>`;

        this.promise.then(() => {
            let _checkbox = this.host.querySelector<HTMLDivElement>('.mdc-checkbox');
            this.field = new checkbox.MDCCheckbox(_checkbox);
            this._captionElement = this.host.querySelector<HTMLSpanElement>('.arkeos-mdc-label');
        }).then((x) => {
            childs.forEach((child) => this.host.appendChild(child));
        })
    }
}