import { tab, tabBar, tabScroller } from 'material-components-web';

declare var XTagElement: any;

export class ArkeosMdcTabs extends XTagElement  {
    public host: HTMLElement;

    public promise = new Promise<void>((resolve) => resolve());

    public _tabBar: tabBar.MDCTabBar;
    public _tabScroller: tabScroller.MDCTabScroller;
    public _tabs: Array<tab.MDCTab> = [];

    private _tabHeadPanelElement: HTMLElement; 
    private _tabHeads: Array<HTMLElement> = []; 
    private _tabPanels: Array<HTMLElement> = []; 

    private div_0: HTMLDivElement;

    //Attributes
    private _selectIndex = 0;
    set 'selectIndex::attr'(val: number) {
        this.promise.then(() => {
            if(this._tabPanels[this._selectIndex]) {
                this._tabPanels[this._selectIndex].style.display = "none";
                this._selectIndex = val;
                this._tabPanels[val].style.display = "block";    
            }
        });
    }

    get 'selectIndex::attr'(): number {
        return this._selectIndex;
    }

    private preRender(): DocumentFragment {
        let fragment = document.createDocumentFragment();
		this.div_0 = document.createElement("div");
		let div_0_class = document.createAttribute("class");
		div_0_class.value = "mdc-tab-bar";
		this.div_0.setAttributeNode(div_0_class);

		let div_0_role = document.createAttribute("role");
		div_0_role.value = "tablist";
		this.div_0.setAttributeNode(div_0_role);

		let div_1 = document.createElement("div");
		let div_1_class = document.createAttribute("class");
		div_1_class.value = "mdc-tab-scroller";
		div_1.setAttributeNode(div_1_class);

		let div_2 = document.createElement("div");
		let div_2_class = document.createAttribute("class");
		div_2_class.value = "mdc-tab-scroller__scroll-area";
		div_2.setAttributeNode(div_2_class);

		let div_3 = document.createElement("div");
		let div_3_class = document.createAttribute("class");
		div_3_class.value = "mdc-tab-scroller__scroll-content";
		div_3.setAttributeNode(div_3_class);

		div_2.append(div_3);
		div_1.append(div_2);
		this.div_0.append(div_1);
		fragment.append(this.div_0);

        return fragment;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "none";

        let _tabChilds = Array.from(this.host.children) as unknown as Array<HTMLElement>;
        this._tabHeads = _tabChilds.filter((_tabHead) => _tabHead.localName == "arkeos-mdc-tab-head");
        this._tabPanels = _tabChilds.filter((_tabPanel) => _tabPanel.localName == "arkeos-mdc-tab-panel");

        this.host.replaceChildren(this.preRender());

        this.promise.then(() => {
            this._tabHeadPanelElement = this.host.querySelector(".mdc-tab-scroller__scroll-content");

            this._tabHeads.forEach((_tabHead) => {
                this._tabHeadPanelElement.append(_tabHead);
            });

            this._tabPanels.forEach((_tabPanel, index) => {
                this.host.append(_tabPanel);                
            });

            this["selectIndex"] = 0;
        }).then(() => {
            this._tabBar = new tabBar.MDCTabBar(this.div_0);
            this._tabBar["tabList"] = this._tabBar["tabList"].filter((tabItem: any) => tabItem.root.localName != "arkeos-mdc-tab-head"); 

            this._tabBar.listen<tabBar.MDCTabBarActivatedEvent>('MDCTabBar:activated', (event: tabBar.MDCTabBarActivatedEvent) => {
                // Show content for newly-activated tab
                this["selectIndex"] = event.detail.index;
            });    
        })
    }

    'resize::event'(e: DragEvent) {
        this.editor.layout();
    }
}