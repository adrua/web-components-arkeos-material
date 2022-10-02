import { select } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcSelectItem extends XTagElement.extensions(HTMLLIElement)  {
    public host: HTMLElement;

    public promise: Promise<void>;

    private field: select.MDCSelect;
    private _childs: Array<HTMLElement>;

    //Attributes
    private _captionElement: HTMLElement;
    private _caption: string;
    set 'caption::attr'(val) {
        this._caption = val;
        this.promise?.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.innerHTML;
    }

    private _value: string;
    set 'value::attr'(val) {
        this._value = val;
        this.host?.setAttribute("data-value", this._value);            
    }

    get 'value::attr'() {
        return this.host.getAttribute("data-value");
    }

    
    '::template'() {
        return `<span class="mdc-deprecated-list-item__ripple"></span>
        <span class="mdc-deprecated-list-item__text">${this._caption}</span>
`;

    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width; 100%; overflow: none;");
        this.host.setAttribute("class", "mdc-deprecated-list-item");
        this.host.setAttribute("data-value", this._value);            

        this._childs = Array.from(this.host.childNodes) as unknown as Array<HTMLElement>;

        this.promise = this.render().then(() => {
            this._captionElement = this.host.querySelector('.mdc-deprecated-list-item__text');
            this._captionElement.replaceChildren(this._caption || '');
            this._childs.forEach((child) => this._captionElement.appendChild(child));
        })
    }
}