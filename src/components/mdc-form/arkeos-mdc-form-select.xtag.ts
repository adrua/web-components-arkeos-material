import { select } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcSelect extends XTagElement  {
    static version = "2022.1002.1116";
    public host: HTMLElement;

    public promise: Promise<void>;

    private field: select.MDCSelect;

    //Attributes
    private _captionElement: HTMLElement = null;
    private _caption: string;
    set 'caption::attr'(val) {
        this._caption = val;
        this.promise?.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.textContent;
    }

    '::template'() {
        return `<div class="mdc-select mdc-select--with-leading-icon">
    <input type="hidden" name="test-input">
    <div class="mdc-select__anchor">
    <span class="mdc-select__ripple"></span>
    <i class="mdc-select__icon material-icons">code</i>
    <span class="mdc-select__selected-text"></span>
    <span class="mdc-select__dropdown-icon">
        <svg
            width="10px"
            height="5px"
            viewBox="7 10 10 5" focusable="false">
        <polygon
            class="mdc-select__dropdown-icon-inactive"
            stroke="none"
            fill-rule="evenodd"
            points="7 10 12 15 17 10">
        </polygon>
        <polygon
            class="mdc-select__dropdown-icon-active"
            stroke="none"
            fill-rule="evenodd"
            points="7 15 12 10 17 15">
        </polygon>
        </svg>
    </span>
    <span class="mdc-floating-label">${this._caption}</span>
    <span class="mdc-line-ripple"></span>
    </div>

    <div class="mdc-select__menu mdc-menu mdc-menu-surface">
    <ul class="mdc-deprecated-list"></ul>
    </div>
</div>`;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width; 100%; overflow: none;");

        let childs = Array.from(this.host.children);

        this.promise = this.render().then(() => {
            this._captionElement = this.host.querySelector(".mdc-floating-label");
            this._captionElement.replaceChildren(this._caption);
            let li = this.host.querySelector(".mdc-deprecated-list");
            childs.forEach((child) => li.appendChild(child));
        }).then(() => this.field = new select.MDCSelect(this.host.firstElementChild));
    }
}