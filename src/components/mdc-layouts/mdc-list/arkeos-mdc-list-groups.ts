import { ArkeosMdcList } from "./arkeos-mdc-list";

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcListGroup extends XTagElement  {
    static version = "2022.1002.1116";
    public host: HTMLElement;

    private _itemList: Array<ArkeosMdcList>;

    connectedCallback() {
        this._itemList = Array.from(this.host.children) as unknown as Array<ArkeosMdcList>;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        let host_style = document.createAttribute("style");
        host_style.value = "width: auto; max-width: 80%; height: 100%; display: block; overflow-y: auto;";
        this.host.setAttributeNode(host_style);

        let host_class = document.createAttribute("class");
        host_class.value = "mdc-list-group";
        this.host.setAttributeNode(host_class);
        
    }
}

//xtag.create("arkeos-mdc-list-group", ArkeosMdcListGroup);

