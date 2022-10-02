import { dataTable } from 'material-components-web';
import { ArkeosMdcDataTableColumn } from './arkeos-mdc-datatable-column.xtag';

declare var XTagElement: any;

export class ArkeosMdcDataTable<T> extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    public _dataTable: dataTable.MDCDataTable;

    private _dataHeadPanelElement: HTMLElement; 
    private _dataHeads: Array<HTMLElement> = []; 
    private _dataPanels: Array<HTMLElement> = []; 

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

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";

        let _dataChilds = Array.from(this.host.children) as unknown as Array<HTMLElement>;
        this._dataHeads = _dataChilds.filter((_tabHead) => _tabHead.localName == "arkeos-mdc-datatable-column");
        this._dataPanels = _dataChilds.filter((_tabPanel) => _tabPanel.localName == "arkeos-mdc-tab-panel");
//         this.host.innerHTML = 
// `<div class="mdc-data-table" style="width: 100%; height: 100%;">
//     <div class="mdc-data-table__table-container">
//         <table class="mdc-data-table__table" aria-label="Dessert calories">
//             <thead>
//             <tr class="mdc-data-table__header-row"></tr>
//             </thead>
//             <tbody class="mdc-data-table__content"></tbody>
//         </table>
//     </div>
// </div>
// `; 

        this.promise.then(() => {
            let container = this.host.querySelector('.mdc-data-table');
            this._dataTable = new dataTable.MDCDataTable(container);

            let head = this.host.querySelector<HTMLTableElement>('.mdc-data-table__header-row');
            // head.innerHTML = this._dataHeads.reduce<string>((acum, cell) => acum + (cell as unknown as ArkeosMdcDataTableColumn).header, ''); 
        })
    }

    'resize::event'(e: DragEvent) {
        this.editor.layout();
    }
}