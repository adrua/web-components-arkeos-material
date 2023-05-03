import { MDCCircularProgress } from '@material/circular-progress';

declare var XTagElement: any;

export class ArkeosMdcCircularProgressBar extends XTagElement {
  static version = "2023.0502.0452";
  public host: HTMLElement;
    private _element: HTMLElement;
    public component: MDCCircularProgress;

    public promise: Promise<void>;

    private _determinate: string = "";
    set 'determinate::attr'(_val: string) {
      this._determinate = _val;
      this.promise?.then(() => {
        this.component.determinate = JSON.parse(_val);
      })
    }

    get 'determinate::attr'() : string {
        return this._determinate;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width ||= "100%";
        this.host.style.height ||= "100%";
        this.host.style.overflow = "hidden";

        let val = JSON.parse(this.getAttribute('determinate'));
        this.promise = this.render().then(() => {
            this._element = this.host.firstElementChild as HTMLElement;
            this.component = new MDCCircularProgress(this._element);
            this.component.determinate = val;
        });
    }

    '::template'() {   
        return `<div class="mdc-circular-progress" style="width:48px;height:48px;" role="progressbar" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">
        <div class="mdc-circular-progress__determinate-container">
          <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"/>
            <circle class="mdc-circular-progress__determinate-circle" cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="113.097" stroke-width="4"/>
          </svg>
        </div>
        <div class="mdc-circular-progress__indeterminate-container">
          <div class="mdc-circular-progress__spinner-layer">
            <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
              <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>
              </svg>
            </div>
            <div class="mdc-circular-progress__gap-patch">
              <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"/>
              </svg>
            </div>
            <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
              <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
`;
    }
}

//registerComponent("arkeos-mdc-circular-progress-bar", ArkeosMdcCircularProgressBar, { extends: "HTMLDivElement" });




