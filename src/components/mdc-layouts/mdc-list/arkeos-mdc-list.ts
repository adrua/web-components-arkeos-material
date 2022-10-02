import { MDCList } from '@material/list';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcList extends XTagElement  {
    public host: HTMLElement;

    private _items: Array<HTMLElement>;

    private _caption = "";
    set 'caption::attr'(val: any) {
        this._caption = val;
    }

    get 'caption::attr'(): any {
        return this._caption
    }

    constructor() {
        super();
    }

    '::template(ready)'() {
        this.host = this as unknown as HTMLElement;
        this._items = Array.from(this.host.querySelectorAll<HTMLElement>('arkeos-mdc-list-item'));
        return `<ul class="mdc-list"></ul>`
    }

    connectedCallback() {
        let _list = this.host.firstElementChild;
        this._list = new MDCList(_list);
        
        this._items.forEach((item) => _list.appendChild(item));
    }
}

//xtag.create("arkeos-mdc-list", ArkeosMdcList);

