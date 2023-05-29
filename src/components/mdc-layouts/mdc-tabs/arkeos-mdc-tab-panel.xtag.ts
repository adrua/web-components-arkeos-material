declare var XTagElement: any;
export class ArkeosMdcTabPanel extends XTagElement {
    static version = "2022.1102.0220";
    public host: HTMLElement;

    promise: Promise<void>;

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%"; 
        this.host.style.height = "100%"; 
        this.host.style.overflow = "hidden";
        this.host.style.flex = "1";
        this.host.style.display = "none";	
        let children = Array.from(this.host.children);

        this.promise = this.render().then(() => {
            children.forEach(element => 
                this.host.firstElementChild.appendChild(element)
            );
        });
    }


    '::template'() {
        return `<div style="width: 100%; height: 100%; overflow: hidden;"></div>`;	
    }
}

//customElements.define("arkeos-mdc-tab-panel", ArkeosMDCTabPanel, { extends: "div" });

