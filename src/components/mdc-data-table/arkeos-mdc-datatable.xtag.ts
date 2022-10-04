import { dataTable } from 'material-components-web';
import { ArkeosMdcDataTableColumn } from './arkeos-mdc-datatable-column.xtag';

declare var XTagElement: any;

export class ArkeosMdcDataTable<T> extends XTagElement  {
    static version = "2022.1002.1116";
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    public _dataTable: dataTable.MDCDataTable;

    private _dataHeads: Array<ArkeosMdcDataTableColumn>; 

    //Attributes
    private _selectIndex = 0;
    set 'selectColumn::attr'(val: number) {
        this._dataPanels[this._selectIndex].style.display = "none";
        this._selectIndex = val;
        this._dataPanels[val].style.display = "block";
    }

    get 'selectColumn::attr'(): number {
        return this._selectIndex;
    }

    private _data: Array<T>;
    set 'data::attr'(val: Array<T>) {
        this._data = val;
        let _body = this.host.querySelector<HTMLTableElement>('tbody');

//         _body.innerHTML = val.reduce<string>((acumRows, row): string => {
//             let cells = this._dataHeads.reduce<string>((acum, cell) => 
//                 acum + 
// `   <th class="mdc-data-table__cell" scope="row">${row[cell["column"]]}</th>
// `, '');

//             return acumRows +
// `<tr>
// ${cells}
// </tr>
// `;
//         }, '');
    }

    get 'data::attr'(): Array<T> {
        return this._data;
    }

    '::template'() {
        let heads = this._dataHeads.reduce<string>((acum, cell) => acum 
+ `<th class="mdc-data-table__header-cell" role="columnheader" scope="col">${cell.getAttribute("caption")}</th>
`, '');

        return `<div class="mdc-data-table" style="width: 100%; height: 100%;">
        <div class="mdc-data-table__table-container">
        <table class="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
                <tr class="mdc-data-table__header-row">${heads}</tr>
            </thead>
            <tbody class="mdc-data-table__content"></tbody>
        </table>
    </div>
</div>
`; 

    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width; 100%; height: 100%; overflow: none;");

        let _dataChilds = Array.from(this.host.children) as unknown as Array<ArkeosMdcDataTableColumn>;
        this._dataHeads = _dataChilds.filter((_child) => _child.localName == "arkeos-mdc-datatable-column");

        this.promise = this.render().then(() => {
            let head = this.host.querySelector<HTMLTableElement>('.mdc-data-table__header-row');
            return this.host.querySelector<HTMLElement>('.mdc-data-table');
        }).then((container: HTMLElement) => this._dataTable = new dataTable.MDCDataTable(container));
    }

    'resize::event'(e: DragEvent) {
        this.editor.layout();
    }
}