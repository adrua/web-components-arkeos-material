declare var XTagElement: any;

export class ArkeosMdcDataTableColumn extends XTagElement  {
    public host: HTMLElement;

    private _caption = '';
    set 'caption::attr'(val: string) {
        this._caption = val;
    }

    get 'caption::attr'(): string {
        return this._caption;
    }

    private _column = '';
    set 'column::attr'(val: string) {
        this._column = val;
    }

    get 'column::attr'(): string {
        return this._column;
    }

    //Methods
    header(): string {
        return `<th class="mdc-data-table__header-cell" role="columnheader" scope="col">${this._caption}</th>
`;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width: 100%; height: 100%; overflow: none;");
    }

}