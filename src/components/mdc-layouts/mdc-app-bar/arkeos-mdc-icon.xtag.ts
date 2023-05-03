import { MDCRipple } from '@material/ripple';

declare var XTagElement: any;

export class ArkeosMdcIcon extends XTagElement  {
    static version = "2022.1002.1116";
    public host: HTMLElement;

    public promise: Promise<void>;

    private _button: MDCRipple;

    private _role = "";
    set 'role::attr'(val: any) {
        this._role = val;
        this.promise.then(() => {
            this.host.firstElementChild.setAttribute("role", this._role);
        });
    }

    get 'role::attr'(): any {
        return this._role
    }

    private _aria_label = "";
    set 'aria-label::attr'(val: any) {
        this._aria_label = val;
        this.promise.then(() => {
            this.host.firstElementChild.setAttribute("aria-abel", this._aria_label);
        });
    }

    get 'aria-label::attr'(): any {
        return this._aria_label
    }

    private _icon = "";
    set 'icon::attr'(val: any) {
        this._icon = val;
        this.promise?.then(() => {
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
        return `<button class="mdc-icon-button material-icons" role="${this.getAttribute('role') || 'toolbar'}" aria-label=${this.getAttribute('aria-label')} title=${this.getAttribute('aria-label')}>
        <div class="mdc-icon-button__ripple"></div>
        ${this.getAttribute('icon')}
      </button>`;        
    }
}

