import { MDCTabBar, MDCTabBarActivatedEvent} from "@material/tab-bar";
import { ArkeosMdcTabHead } from "./arkeos-mdc-tab-head.xtag";
import { ArkeosMdcTabPanel } from "./arkeos-mdc-tab-panel.xtag";

declare var XTagElement: any;

export class ArkeosMdcTabs extends XTagElement  {
    static version = "2022.1101.0625";
    public host: HTMLElement;

    public promise: Promise<void>;

    public _tabBar: MDCTabBar;

    private _tabHeadPanelElement: HTMLDivElement;
    private _tabHeads: Array<ArkeosMdcTabHead> = []; 
    private _tabPanels: Array<ArkeosMdcTabPanel> = []; 

    //Attributes
    private _previousTab: number;
    private _selectTab: number = -1;
    set 'selectTab::attr'(selectTab: number) {
        if(this._selectTab !== selectTab) {
            this._previousTab = this._selectTab;

            this.promise?.then(() => {
                let _panel = this._tabPanels[selectTab];
                if(_panel) {
                    this._selectTab = selectTab;
                    _panel.style.display = "block";

                    _panel = this._tabPanels[this._previousTab];
                    if(_panel) {
                        _panel.style.display = "none";
                    }
                }
            });
        }
    }

    get 'selectTab::attr'(): number {
        return this._selectTab;
    }

    count(): number {
        return this._tabHeads.length;         
    }

    add(head: ArkeosMdcTabHead, 
        panel: ArkeosMdcTabPanel, 
        position: number = -1, 
        where: InsertPosition = 'afterend'): number {

        let count = this.count();

        this.promise.then(() => {
            this._tabHeads.push(head);
            this._tabPanels.push(panel);
        
            if(position < 0 || position >= count) {
                this._tabHeadPanelElement.appendChild(head as any);
                this.appendChild(panel); 
                position = count;   
            } else {
                this._tabHeadPanelElement.children[position].insertAdjacentElement(where, head as any)
                this.host.children[position].insertAdjacentElement(where, head as any)
            }    
        })
        .then(() => { 
            this._tabBar = new MDCTabBar(this.host);
        })
        .then(() => { 
            this.selectTab = position; 
            this._tabBar.activateTab(position);
        });

        return count;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%"; 
        this.host.style.height = "100%"; 
        this.host.style.overflow = "hidden";
        this.host.classList.add("mdc-tab-bar");
        this.host.setAttribute("role", "tablist");

        let _tabChilds = Array.from(this.host.children);
        this._tabHeads = _tabChilds.filter((_tabHead) => _tabHead.localName === "arkeos-mdc-tab-head" )  as unknown as Array<ArkeosMdcTabHead>;
        this._tabPanels = _tabChilds.filter((_tabPanel) => _tabPanel.localName === "arkeos-mdc-tab-panel") as unknown as Array<ArkeosMdcTabPanel>;

        this.promise = this.render().then(() => {
            this._tabHeadPanelElement = this.host.querySelector(".mdc-tab-scroller__scroll-content");

            this._tabHeads.forEach((_tabHead, index) => {
                _tabHead.setAttribute("tabindex", index.toString());
                this._tabHeadPanelElement.appendChild(_tabHead as any);
            });

            this._tabPanels.forEach((_tabPanel) => {
                this.host.appendChild(_tabPanel as any);                
            });
        }).then(() => {
            this._tabBar = new MDCTabBar(this.host);
            let _this = this;
            this._tabBar.listen<MDCTabBarActivatedEvent>('MDCTabBar:activated', (event: MDCTabBarActivatedEvent) => {
                // Show content for newly-activated tab
                event.preventDefault();
                _this.selectTab = event.detail.index;
            });    

            this._tabHeads.forEach((_tabHead) => {
                _tabHead.setAttribute("aria-selected", "false");
            });

            let _tab = (this._selectTab < 0) ? 0 : this._selectTab;
            this.selectTab = _tab;
            this._tabBar.activateTab(_tab);
        });
    }

    '::template'() {
        return `<div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content"></div>
    </div>
</div>`;
    }
}