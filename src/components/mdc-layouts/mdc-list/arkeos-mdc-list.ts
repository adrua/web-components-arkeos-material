import { MDCList } from '@material/list';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcList extends XTagElement.extensions(HTMLUListElement)  {
    public host: HTMLElement;
    private _list: MDCList;
    private _caption = "";
    set 'caption::attr'(val: any) {
        this._caption = val;
    }

    get 'caption::attr'(): any {
        return this._caption
    }

    constructor() {
        super();
        this.host = this as unknown as HTMLElement;
        this.host.classList.add("mdc-list");
        this._list = new MDCList(this.host);
    }
}


