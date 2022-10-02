declare var XTagElement: any;

export class ArkeosMdcDataTableColumn extends XTagElement  {
    public host: HTMLElement;

    private _label = '';
    set 'label::attr'(val: string) {
        this._label = val;
    }

    get 'label::attr'(): string {
        return this._label;
    }

    private _column = '';
    set 'column::attr'(val: string) {
        this._column = val;
    }

    get 'column::attr'(): string {
        return this._column;
    }

    //Methods
    get header(): string {
        return `<th class="mdc-data-table__header-cell" role="columnheader" scope="col">${this._label}</th>
`;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";
    }

}