declare var XTagElement: any;

export class ArkeosMdcToolbarRow extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    private iconsStart: Array<HTMLElement> = [];

    private iconsEnd: Array<HTMLElement> = [];

    private span_2: HTMLSpanElement;

    private _title = "";
    set 'title::attr'(val: any) {
        this._title = val;
        this.promise.then(() => {
            this.span_2.replaceChildren(this._title);
        });
    }

    get 'title::attr'(): any {
        return this._title
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";

        this.iconsStart = Array.from(this.host.querySelectorAll<HTMLElement>('arkeos-mdc-icon[align="start"]'));

        this.iconsEnd = Array.from(this.host.querySelectorAll<HTMLElement>('arkeos-mdc-icon[align="end"]'));

        this.host.replaceChildren(this.preRender());

        this.promise.then(() => {
        })
    }

    private preRender(): DocumentFragment {
        let fragment = document.createDocumentFragment();
		this.div_0 = document.createElement("div");
		let div_0_class = document.createAttribute("class");
		div_0_class.value = "mdc-top-app-bar__row";
		this.div_0.setAttributeNode(div_0_class);

		let section_1 = document.createElement("section");
		let section_1_class = document.createAttribute("class");
		section_1_class.value = "mdc-top-app-bar__section mdc-top-app-bar__section--align-start";
		section_1.setAttributeNode(section_1_class);

		this.iconsStart.forEach((child) => {
			section_1.append(child);
		});

		let span_2 = document.createElement("span");
        this.span_2 = span_2;
		let span_2_class = document.createAttribute("class");
		span_2_class.value = "mdc-top-app-bar__title";
		span_2.setAttributeNode(span_2_class);

		span_2.append(this['title']);
		section_1.append(span_2);
		this.div_0.append(section_1);
		let section_3 = document.createElement("section");
		let section_3_class = document.createAttribute("class");
		section_3_class.value = "mdc-top-app-bar__section mdc-top-app-bar__section--align-end";
		section_3.setAttributeNode(section_3_class);

		let section_3_role = document.createAttribute("role");
		section_3_role.value = "toolbar";
		section_3.setAttributeNode(section_3_role);

		this.iconsEnd.forEach((child) => {
			section_3.append(child);
		});

		this.div_0.append(section_3);
		fragment.append(this.div_0);

        return fragment;
    }

}

