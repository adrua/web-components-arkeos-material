declare var XTagElement: any;

export class ArkeosMdcTabPanel extends XTagElement  {
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

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        let host_style = document.createAttribute("style");
        host_style.value = "width: 100%; height: 100%; overflow: none;";
        this.host.setAttributeNode(host_style);

        let childs = Array.from(this.host.children);

        // //childs.forEach((child) => child.remove());

        // this.promise.then(() => {
        //     let _heads = this.host.parentElement?.querySelector(".mdc-tab-scroller");

        //     this.host.style.height = `calc(100% - ${_heads?.clientHeight || 0}px)`;
        // }).then((x) => {
        //     //childs.forEach((child) => this.host.appendChild(child));
        // })
    }
}