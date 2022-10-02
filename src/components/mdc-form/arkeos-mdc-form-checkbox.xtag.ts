import { checkbox } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcCheckBox extends XTagElement  {
    public host: HTMLElement;

    public promise: Promise<void>;

    private field: checkbox.MDCCheckbox;

    //Attributes
    private _captionElement: HTMLSpanElement;
    private _caption: string;
    set 'caption::attr'(val) {
        this._caption = val;
        this.promise?.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.textContent;
    }

    private _labelPosition: "left" | "right";
    set 'label-position::attr'(val: "left" | "right") {
        this._labelPosition = val;
        this.promise?.then(() => {
            this._captionElement.style.float = val;
        });
    }

    get 'label-position::attr'(): "left" | "right" {
        return this._labelPosition;
    }

    '::template'() {
        return `<div style="width: 100%; display: block; overflow: none;">
    <span class="arkeos-mdc-label" style="float: ${this._labelPosition || 'left'};">${this._caption || 'label'}</span>
    <div class="mdc-checkbox" style="float: inline-start;">
        <input type="checkbox" 
            class="mdc-checkbox__native-control"            
            id="my-checkbox"
            aria-labelledby="my-checkbox-label"/>
        <div class="mdc-checkbox__frame"></div>
        <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark"
                viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path"
                    fill="none"
                    d="M4.1,12.7 9,17.6 20.3,6.3"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
        </div>
    </div>    
</div>`;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width:100%; overflow:none");

        let childs = Array.from(this.host.children);

        this.promise = this.render().then(() => {
            let _checkbox = this.host.querySelector<HTMLDivElement>('.mdc-checkbox');
            this.field = new checkbox.MDCCheckbox(_checkbox);
            this._captionElement = this.host.querySelector<HTMLSpanElement>('.arkeos-mdc-label');
            this._captionElement.replaceChildren(this._caption);
            this._captionElement.style.float = this._labelPosition;
        }).then(() => {
            childs.forEach((child) => this.host.appendChild(child));
        })
    }
}