import {MDCRipple} from '@material/ripple';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcListItem extends XTagElement.extensions(HTMLLIElement)  {
    public host: HTMLElement;
    private _item: MDCRipple;
    private _items: Array<HTMLElement>

    public promise = new Promise<void>((resolve) => resolve());

    private _captionElement: HTMLSpanElement;
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
        this.host.classList.add("mdc-list-item");
        this._items = Array.from(this.host.children) as unknown as Array<HTMLElement>;

        this.render().then(() => {
            this._captionElement = this.host.querySelector('.mdc-list-item__text');
            this._items.forEach((item) => this._captionElement.appendChild(item));
        }).then(() => {
            let li = this.host.firstElementChild;
            this._item = new MDCRipple(li);
        });

    }

    '::template'() {

        return `<span class="mdc-list-item__ripple" style="flex-direction: row;"></span>
        <span class="mdc-list-item__text" style="flex-direction: column;">${this._caption || ''}</span>
`; 
    }

}

//xtag.create("arkeos-mdc-list-item", ArkeosMdcListItem);

