import {MDCRipple} from '@material/ripple';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcListItem extends XTagElement.extensions(HTMLLIElement)  {
    static version = "2022.1002.1116";
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

    private _icon = "";    
    set 'icon::attr()'(val: any) {
        this._icon = val;
        this.promise?.then(() => {
            if(this._icon && this.tagName === 'ARKEOS-MDC-LIST-ITEM') {
                let icon = this.host.querySelector<HTMLSpanElement>('#arkeos-mdc-list-item-icon');
                if(icon) {
                    icon.innerHTML = this._icon;
                }
                else 
                {
                    let ripple = this.host.querySelector('.mdc-list-item__ripple');
                    icon = document.createElement<"span">('span');
                    icon.classList.add("material-icons");
                    icon.id = "arkeos-mdc-list-item-icon";
                    icon.innerHTML = this._icon;    
                    ripple.insertAdjacentElement('afterend' , icon);
                }
            }
        });
    }

    get 'icon::attr'(): any {
        return this._icon
    }

    private _previousIcon = "";    
    set 'previous-icon::attr'(val: any) {
        this._previousIcon = val;
        this.promise?.then(() => {
            if(this._previousIcon && this.tagName === 'ARKEOS-MDC-LIST-ITEM') {
                let icon = this.host.querySelector<HTMLSpanElement>('#arkeos-mdc-list-item-previous-icon');
                if(icon) {
                    icon.innerHTML = this._previousIcon;
                }
                else 
                {
                    let ripple = this.host.querySelector('.mdc-list-item__ripple');
                    icon = document.createElement<"span">('span');
                    icon.classList.add("material-icons");
                    icon.id = "arkeos-mdc-list-item-previous-icon";
                    icon.innerHTML = this._previousIcon;    
                    ripple.insertAdjacentElement('beforebegin' , icon);
                }
            }
        });
    }

    get 'previous-icon::attr'(): any {
        return this._previousIcon
    }

    constructor() {
        super();
        this.host = this as unknown as HTMLElement;
        this.host.classList.add("mdc-list-item");
        this._items = Array.from(this.host.children) as unknown as Array<HTMLElement>;

        this.promise = this.render().then(() => {
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

