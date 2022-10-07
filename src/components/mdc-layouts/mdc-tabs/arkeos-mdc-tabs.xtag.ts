import { MDCTabBar, MDCTabBarActivatedEvent} from "@material/tab-bar";
import { MDCTabScroller } from "@material/tab-scroller";
import { MDCTab } from "@material/tab";

declare var XTagElement: any;

export class ArkeosMdcTabs extends XTagElement  {
    public host: HTMLElement;

    public promise: Promise<void>;

    public _tabBar: MDCTabBar;

    private _tabHeadPanelElement: HTMLDivElement;
    private _tabHeads: Array<Element> = []; 
    private _tabPanels: Array<HTMLElement> = []; 

    //Attributes
    private _previousTab: number;
    private _selectTab: number;
    set 'select-tab::attr'(val: number) {
        if(this._selectTab !== val) {
            this._previousTab = this._selectTab;
            this._selectTab = val;

            this.promise?.then(() => {
                let _panel = this._tabPanels[this._selectTab] as HTMLElement;
                if(_panel) {
                    _panel.style.display = "block";

                    _panel = this._tabPanels[this._previousTab] as HTMLElement;
                    if(_panel) {
                        _panel.style.display = "none";
                    }
                }
            });
        }
    }

    get 'select-tab::attr'(): number {
        return this._selectTab;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width: 100%; height: 100%; overflow: hidden;")
        this.host.classList.add("mdc-tab-bar");
        this.host.setAttribute("role", "tablist");

        let _tabChilds = Array.from(this.host.children);
        this._tabHeads = _tabChilds.filter((_tabHead) => _tabHead.localName == "arkeos-mdc-tab-head");
        this._tabPanels = _tabChilds.filter((_tabPanel) => _tabPanel.localName == "arkeos-mdc-tab-panel") as unknown as Array<HTMLElement>;

        this.promise = this.render().then(() => {
            this._tabHeadPanelElement = this.host.querySelector(".mdc-tab-scroller__scroll-content");

            this._tabHeads.forEach((_tabHead, index) => {
                _tabHead.setAttribute("tabindex", index.toString());
                this._tabHeadPanelElement.appendChild(_tabHead);
            });

            this._tabPanels.forEach((_tabPanel) => {
                this.host.appendChild(_tabPanel);                
            });
        }).then(() => {
            this._tabBar = new MDCTabBar(this.host);
            let _this = this;
            this._tabBar.listen<MDCTabBarActivatedEvent>('MDCTabBar:activated', (event: MDCTabBarActivatedEvent) => {
                // Show content for newly-activated tab
                if((event as any)["path"][0] === _this) {
                    event.preventDefault();
                    _this["select-tab"] = event.detail.index;
                }
            });    

            this._selectTab = this._selectTab || 0;
            this._tabBar.activateTab(this._selectTab);
            this._tabPanels[this._selectTab].style.display = "block";
        })
    }

    '::template'() {
        return `<div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content"></div>
    </div>
</div>`;
    }
}