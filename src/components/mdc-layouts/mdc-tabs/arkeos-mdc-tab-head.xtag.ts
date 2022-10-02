declare var XTagElement: any;

export class ArkeosMdcTabHead extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    //Attributes
    private _captionElement: HTMLElement = null;
    set 'caption::attr'(val) {
        this.promise.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.textContent;
    }

    private preRender(): DocumentFragment {
        let fragment = document.createDocumentFragment();
		this.button_0 = document.createElement("button");
		let button_0_class = document.createAttribute("class");
		button_0_class.value = "mdc-tab";
		this.button_0.setAttributeNode(button_0_class);

		let button_0_role = document.createAttribute("role");
		button_0_role.value = "tab";
		this.button_0.setAttributeNode(button_0_role);

		let button_0_aria_selected = document.createAttribute("aria-selected");
		button_0_aria_selected.value = "true";
		this.button_0.setAttributeNode(button_0_aria_selected);

		let button_0_tabindex = document.createAttribute("tabindex");
		button_0_tabindex.value = "0";
		this.button_0.setAttributeNode(button_0_tabindex);

		let span_1 = document.createElement("span");
		let span_1_class = document.createAttribute("class");
		span_1_class.value = "mdc-tab__content";
		span_1.setAttributeNode(span_1_class);

		let span_2 = document.createElement("span");
		let span_2_class = document.createAttribute("class");
		span_2_class.value = "mdc-tab__text-label";
		span_2.setAttributeNode(span_2_class);

		span_2.append(this.caption);
        this._captionElement = span_2;
		span_1.append(span_2);
		this.button_0.append(span_1);
		let span_3 = document.createElement("span");
		let span_3_class = document.createAttribute("class");
		span_3_class.value = "mdc-tab-indicator mdc-tab-indicator--active";
		span_3.setAttributeNode(span_3_class);

		let span_4 = document.createElement("span");
		let span_4_class = document.createAttribute("class");
		span_4_class.value = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
		span_4.setAttributeNode(span_4_class);

		span_3.append(span_4);
		this.button_0.append(span_3);
		let span_5 = document.createElement("span");
		let span_5_class = document.createAttribute("class");
		span_5_class.value = "mdc-tab__ripple";
		span_5.setAttributeNode(span_5_class);

		this.button_0.append(span_5);
		fragment.append(this.button_0);

        return fragment;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.classList.add("mdc-tab");
        //this.host.attributes["role"].value = "tab";

        this.host.replaceChildren(this.preRender());

        this.promise.then(() => {
            this.host.style.paddingLeft = "0px";
            this.host.style.paddingRight = "0px";
        })
    }

}