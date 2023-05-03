declare var XTagElement: any;

export class ArkeosMdcAppBarContent extends XTagElement  {
    static version = "2022.1002.1116";
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";
        this.host.style.position = "absolute";

        this.promise.then(() => {
        })
    }
}

