import { ArkeosMdcDataTableColumn } from './components/mdc-data-table/arkeos-mdc-datatable-column.xtag';
import { ArkeosMdcDataTable } from './components/mdc-data-table/arkeos-mdc-datatable.xtag';
import { ArkeosMdcCheckBox } from './components/mdc-form/arkeos-mdc-form-checkbox.xtag';
import { ArkeosMdcTextField } from './components/mdc-form/arkeos-mdc-form-text-field.xtag';
import { ArkeosMdcAppBar } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-app-bar.xtag';
import { ArkeosMdcAppBarContent } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-app-content.xtag';
import { ArkeosMdcIcon } from './components/mdc-layouts/mdc-app-bar/arkeos-mdc-icon.xtag';
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

function registerComponent(webComponent: string, newComponent: any) {
    let component: any = customElements.get(webComponent);
    if(component) {
        if(component.version < newComponent.version) {
            xtag.create(webComponent, newComponent);
        }
    } else {
        xtag.create(webComponent, newComponent);
    }   
}

//Forms Input
registerComponent('arkeos-mdc-text-field', ArkeosMdcTextField);
registerComponent('arkeos-mdc-checkbox', ArkeosMdcCheckBox);

registerComponent('arkeos-mdc-datatable-column', ArkeosMdcDataTableColumn);
registerComponent('arkeos-mdc-datatable', ArkeosMdcDataTable);

//Layout
registerComponent('arkeos-mdc-app-content', ArkeosMdcAppBarContent);
registerComponent('arkeos-mdc-app', ArkeosMdcAppBar);
registerComponent('arkeos-mdc-icon', ArkeosMdcIcon);
registerComponent('arkeos-mdc-toolbar-row', ArkeosMdcToolbarRow);

registerComponent('arkeos-mdc-tabs', ArkeosMdcTabs);
registerComponent('arkeos-mdc-tab-head', ArkeosMdcTabHead);
registerComponent('arkeos-mdc-tab-panel', ArkeosMdcTabPanel);

registerComponent('arkeos-mdc-list-item', ArkeosMdcListItem);
registerComponent('arkeos-mdc-list-group', ArkeosMdcListGroup);
registerComponent('arkeos-mdc-list', ArkeosMdcList);

