import { ArkeosMdcDataTableColumn } from './components/mdc-data-table/arkeos-mdc-datatable-column.xtag';
import { ArkeosMdcDataTable } from './components/mdc-data-table/arkeos-mdc-datatable.xtag';
import { ArkeosMdcCheckBox } from './components/mdc-form/arkeos-mdc-form-checkbox.xtag';
import { ArkeosMdcSelectItem } from './components/mdc-form/arkeos-mdc-form-select-item.xtag';
import { ArkeosMdcSelect } from './components/mdc-form/arkeos-mdc-form-select.xtag';
import { ArkeosMdcTextField } from './components/mdc-form/arkeos-mdc-form-text-field.xtag';
import { ArkeosMdcAppBar } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-app-bar.xtag';
import { ArkeosMdcAppBarContent } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-app-content.xtag';
import { ArkeosMdcIcon } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-icon.xtag';
import { ArkeosMdcCircularProgressBar } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-circular-progress-bar';
import { ArkeosMdcLinearProgressBar } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-linear-progress-bar';
import { ArkeosMdcToolbarRow } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-toolbar-row.xtag';
import { ArkeosMdcList } from './components/mdc-layouts/mdc-list/arkeos-mdc-list';
import { ArkeosMdcListGroup } from './components/mdc-layouts/mdc-list/arkeos-mdc-list-groups';
import { ArkeosMdcListItem } from './components/mdc-layouts/mdc-list/arkeos-mdc-list-item';
import { ArkeosMdcTabHead } from './components/mdc-layouts/mdc-tabs/arkeos-mdc-tab-head.xtag';
import { ArkeosMdcTabPanel } from './components/mdc-layouts/mdc-tabs/arkeos-mdc-tab-panel.xtag';
import { ArkeosMdcTabs } from './components/mdc-layouts/mdc-tabs/arkeos-mdc-tabs.xtag';

export { ArkeosMdcDataTableColumn } from './components/mdc-data-table/arkeos-mdc-datatable-column.xtag';
export { ArkeosMdcDataTable } from './components/mdc-data-table/arkeos-mdc-datatable.xtag';
export { ArkeosMdcCheckBox } from './components/mdc-form/arkeos-mdc-form-checkbox.xtag';
export { ArkeosMdcSelectItem } from './components/mdc-form/arkeos-mdc-form-select-item.xtag';
export { ArkeosMdcSelect } from './components/mdc-form/arkeos-mdc-form-select.xtag';
export { ArkeosMdcTextField } from './components/mdc-form/arkeos-mdc-form-text-field.xtag';
export { ArkeosMdcAppBar } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-app-bar.xtag';
export { ArkeosMdcAppBarContent } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-app-content.xtag';
export { ArkeosMdcIcon } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-icon.xtag';
export { ArkeosMdcToolbarRow } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-toolbar-row.xtag';
export { ArkeosMdcList } from './components/mdc-layouts/mdc-list/arkeos-mdc-list';
export { ArkeosMdcListGroup } from './components/mdc-layouts/mdc-list/arkeos-mdc-list-groups';
export { ArkeosMdcListItem } from './components/mdc-layouts/mdc-list/arkeos-mdc-list-item';
export { ArkeosMdcTabHead } from './components/mdc-layouts/mdc-tabs/arkeos-mdc-tab-head.xtag';
export { ArkeosMdcTabPanel } from './components/mdc-layouts/mdc-tabs/arkeos-mdc-tab-panel.xtag';
export { ArkeosMdcTabs } from './components/mdc-layouts/mdc-tabs/arkeos-mdc-tabs.xtag';

declare var xtag: any;

import './index.scss';

function XtagRegisterComponent(webComponent: string, newComponent: any) {
    let component: any = customElements.get(webComponent);
    if(component) {
        if(component.version < newComponent.version) {
            xtag.create(webComponent, newComponent);
        }
    } else {
        xtag.create(webComponent, newComponent);
    }   
}

function registerComponent(webComponent: string, newComponent: any, options?: any) {
    let component: any = customElements.get(webComponent);
    if(component) {
        if(component.version < newComponent.version) {
            customElements.define(webComponent, newComponent, options);        
        }
    } else {
        customElements.define(webComponent, newComponent, options);        
    }   
}

//Forms Input
XtagRegisterComponent('arkeos-mdc-text-field', ArkeosMdcTextField);
XtagRegisterComponent('arkeos-mdc-checkbox', ArkeosMdcCheckBox);
XtagRegisterComponent('arkeos-mdc-select-item', ArkeosMdcSelectItem);
XtagRegisterComponent('arkeos-mdc-select', ArkeosMdcSelect);

XtagRegisterComponent('arkeos-mdc-datatable-column', ArkeosMdcDataTableColumn);
XtagRegisterComponent('arkeos-mdc-datatable', ArkeosMdcDataTable);

//Layout
XtagRegisterComponent('arkeos-mdc-app-content', ArkeosMdcAppBarContent);
XtagRegisterComponent('arkeos-mdc-app', ArkeosMdcAppBar);
XtagRegisterComponent('arkeos-mdc-icon', ArkeosMdcIcon);
XtagRegisterComponent('arkeos-mdc-toolbar-row', ArkeosMdcToolbarRow);
XtagRegisterComponent("arkeos-mdc-linear-progress-bar", ArkeosMdcLinearProgressBar);
XtagRegisterComponent("arkeos-mdc-circular-progress-bar", ArkeosMdcCircularProgressBar);

XtagRegisterComponent('arkeos-mdc-tabs', ArkeosMdcTabs);
XtagRegisterComponent('arkeos-mdc-tab-head', ArkeosMdcTabHead);
XtagRegisterComponent("arkeos-mdc-tab-panel", ArkeosMdcTabPanel);

XtagRegisterComponent('arkeos-mdc-list-item', ArkeosMdcListItem);
XtagRegisterComponent('arkeos-mdc-list-group', ArkeosMdcListGroup);
XtagRegisterComponent('arkeos-mdc-list', ArkeosMdcList);

