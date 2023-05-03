declare var XTagElement: any;
export class ArkeosMdcTabHead extends XTagElement {
    static version = "2022.1101.0625";
    public host: HTMLElement;
    promise: Promise<void>;

    private _caption: string;
    set 'caption::attr'(val: string) { 
        this._caption = val;
    }

    get 'caption::attr'(): string {
        return this._caption;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
    
        this.promise = this.render().then(() => {});
    }

    '::template'() {
        return `<button class="mdc-tab" aria-selected="false" role="tab">
        <span class="mdc-tab__content">
          <span class="mdc-tab__text-label">${this.getAttribute('caption')}</span>
          <span class="mdc-tab__icon" aria-hidden="true"></span>
        </span>
        <span class="mdc-tab__ripple"></span>
        <span class="mdc-tab-indicator">
          <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
        </span>
      </button>
`;		
    }
}

//customElements.define("arkeos-mdc-tab-panel-head", ArkeosMDCTabHead, { extends: "button" });

