import { MDCList } from '@material/list';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcList extends XTagElement.extensions(HTMLUListElement)  {
    static version = "2022.1002.1116";
    public host: HTMLElement;
    private _list: MDCList;
    
    constructor() {
        super();
        this.host = this as unknown as HTMLElement;
        this.host.classList.add("mdc-list");
        this._list = new MDCList(this.host);
    }
}


