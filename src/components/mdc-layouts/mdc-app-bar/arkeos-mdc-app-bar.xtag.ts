import { topAppBar } from 'material-components-web'

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcAppBar extends XTagElement  {
    static version = "2022.1002.1116";
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    private toolbars: Array<HTMLElement> = [];

    private appcontent: HTMLElement;

    private header_0: HTMLUnknownElement;
    private main_0: HTMLUnknownElement;

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";
        this.host.style.display = "flex";
        this.host.style.flexDirection = "column";

        this.toolbars = Array.from(this.host.querySelectorAll<HTMLElement>('arkeos-mdc-toolbar-row'));

        this.appcontent = this.host.querySelector<HTMLElement>('arkeos-mdc-app-content');

        this.host.replaceChildren(this.preRender());

        this.promise.then(() => {
            this.appBar = new topAppBar.MDCTopAppBar(this.header_0);
        })
    }

    private preRender(): DocumentFragment {
        let fragment = document.createDocumentFragment();
		this.header_0 = document.createElement("header");
		let header_0_class = document.createAttribute("class");
		header_0_class.value = "mdc-top-app-bar";
		this.header_0.setAttributeNode(header_0_class);

		this.toolbars.forEach((child) => {
            this.header_0.append(child);
		});
		fragment.append(this.header_0);

        this.main_0 = document.createElement("main");
        this.main_0.style.flex = "1";
		let main_0_class = document.createAttribute("class");
		main_0_class.value = "mdc-top-app-bar--fixed-adjust";
		this.main_0.setAttributeNode(main_0_class);

        this.main_0.append(this.appcontent);

		fragment.append(this.main_0);

        return fragment;
    }

}

