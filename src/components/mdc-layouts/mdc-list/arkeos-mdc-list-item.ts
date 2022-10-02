import {MDCRipple} from '@material/ripple';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcListItem extends XTagElement  {
    public host: HTMLElement;
    private _item: MDCRipple;
    private _items: Array<HTMLElement>

    public promise = new Promise<void>((resolve) => resolve());

    private _caption = "";
    set 'caption::attr'(val: any) {
        this._caption = val;
    }

    get 'caption::attr'(): any {
        return this._caption
    }

    connectedCallback() {
        let li = this.host.firstElementChild;
        this._item = new MDCRipple(li);
        let span = li.firstElementChild.nextElementSibling;
        this._items.forEach((item) => span.appendChild(item));
    }
    
    constructor() {
        super();
    }

    '::template(ready)'() {
        this.host = this as unknown as HTMLElement;
        this._items = Array.from(this.host.children) as unknown as Array<HTMLElement>;

        return `<li class="mdc-list-item" tabindex="0" style="flex-direction: column;">
        <span class="mdc-list-item__ripple" style="flex-direction: row;"></span>
        <span class="mdc-list-item__text" style="flex-direction: column;">${this.getAttribute("caption") || ''}</span>
      </li>`; 
    }

}

//xtag.create("arkeos-mdc-list-item", ArkeosMdcListItem);

