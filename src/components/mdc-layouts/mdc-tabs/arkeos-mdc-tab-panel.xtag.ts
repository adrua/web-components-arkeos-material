declare var XTagElement: any;

export class ArkeosMdcTabPanel extends XTagElement.extensions(HTMLDivElement)  {
    public host: HTMLElement;

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width: 100%; height: 100%; overflow: hidden; display: none;");
    }
}