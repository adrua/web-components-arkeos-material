import { MDCList } from '@material/list';

declare var xtag: any;
declare var XTagElement: any;

export class ArkeosMdcList extends XTagElement.extensions(HTMLUListElement)  {
    public host: HTMLElement;

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
    }
}


