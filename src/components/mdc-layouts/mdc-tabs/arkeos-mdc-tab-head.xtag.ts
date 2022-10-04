declare var XTagElement: any;

export class ArkeosMdcTabHead extends XTagElement.extensions(HTMLButtonElement)  {
    public host: HTMLElement;

    public promise: Promise<void>;

	private _childs: Array<Element>;

    //Attributes
    private _captionElement: HTMLSpanElement = null;
	private _caption: string | HTMLElement;
    set 'caption::attr'(val: string | HTMLElement) {
		this._caption = val;
        this.promise.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'(): string | HTMLElement {
        return this._captionElement?.innerHTML;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.classList.add("mdc-tab");
        this.host.setAttribute("role", "tab");
        this.host.setAttribute("aria-selected", "false");
        this.host.setAttribute("tabindex", "-1");

		this._childs = Array.from(this.host.children); 

        this.promise = this.render().then(() => {
            this.host.style.paddingLeft = "0px";
            this.host.style.paddingRight = "0px";
			this._captionElement = this.host.firstElementChild as HTMLSpanElement;	
        }).then(() => {
			this._captionElement.replaceChildren(this._caption);
		}).then(() => {
		 	this._childs.forEach((child) => this._captionElement.appendChild(child));
		});
    }

	'::template'() {
		return  `<span class="mdc-tab__content">${this._caption}</span>
	<span class="mdc-tab-indicator">
		<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
	</span>
</span>
<span class="mdc-tab__ripple"></span>`;
	}

}