import { MDCRipple } from '@material/ripple';

declare var XTagElement: any;

export class ArkeosMdcIcon extends XTagElement  {
    public host: HTMLElement;

    public promise: Promise<void>;

    private _button: MDCRipple;

    private _aria_label = "";
    set 'aria-label::attr'(val: any) {
        this._aria_label = val;
        this.promise.then(() => {
            this.host.firstElementChild.getAttribute("ariaLabel") && (this.host.firstElementChild.setAttribute("ariaLabel", this._aria_label));
        });
    }

    get 'aria-label::attr'(): any {
        return this._aria_label
    }

    private _icon = "";
    set 'icon::attr'(val: any) {
        this._icon = val;
        this.promise.then(() => {
            this.host.firstElementChild.textContent = this._icon;
        });
    }

    get 'icon::attr'(): any {
        return this._icon
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width: 100%; height: 100%; overflow: hidden;")

        this.promise = this.render().then(() => {
            this._button = new MDCRipple(this.host.firstElementChild);
            this._button.unbounded = true;
        })
    }

    '::template'() {   
        return `<button class="mdc-icon-button material-icons">
        <div class="mdc-icon-button__ripple"></div>
        ${this._icon}
      </button>`;        
    }
}

