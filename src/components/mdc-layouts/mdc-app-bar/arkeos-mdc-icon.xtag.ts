declare var XTagElement: any;

export class ArkeosMdcIcon extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    private button_0: HTMLButtonElement;

    private _aria_label = "";
    set 'aria-label::attr'(val: any) {
        this._aria_label = val;
        this.promise.then(() => {
            this.button_0?.getAttribute("ariaLabel") && (this.button_0.setAttribute("ariaLabel", this._aria_label));
        });
    }

    get 'aria-label::attr'(): any {
        return this._aria_label
    }

    private _icon = "";
    set 'icon::attr'(val: any) {
        this._icon = val;
        this.promise.then(() => {
            this.button_0.replaceChildren(this._icon);
        });
    }

    get 'icon::attr'(): any {
        return this._icon
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";

        this.host.replaceChildren(this.preRender());

        this.promise.then(() => {
        })
    }

    private preRender(): DocumentFragment {
        let fragment = document.createDocumentFragment();
		this.button_0 = document.createElement("button");
		let button_0_class = document.createAttribute("class");
		button_0_class.value = "material-icons mdc-top-app-bar__navigation-icon mdc-icon-button";
		this.button_0.setAttributeNode(button_0_class);

		let button_0_aria_label = document.createAttribute("aria-label");
		button_0_aria_label.value = this._aria_label;
		this.button_0.setAttributeNode(button_0_aria_label);

		fragment.append(this.button_0);

        return fragment;
    }

}

