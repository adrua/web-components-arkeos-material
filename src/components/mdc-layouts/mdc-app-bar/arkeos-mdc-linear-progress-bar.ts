import { MDCLinearProgress } from '@material/linear-progress';

declare var XTagElement: any;

export class ArkeosMdcLinearProgressBar extends XTagElement {
  static version = "2022.1002.1116";
  public host: HTMLElement;
    private _element: HTMLElement;
    public component: MDCLinearProgress;

    public promise: Promise<void>;

    set 'determinate::attr(boolean)'(val: boolean) {
      this.promise?.then(() => {
        this.component.determinate = val;
        if(val) {
            this._element.classList.add('mdc-linear-progress--indeterminate');
        }
        else {
            this._element.classList.remove('mdc-linear-progress--indeterminate');
        }
      });
    }

    get 'determinate::attr(boolean)'() : boolean {
        return this.component.determinate;
    }

    constructor() {
        super();

        this.host = this as unknown as HTMLElement;
        this.host.style.width = "100%";
        this.host.style.height = "100%";
        this.host.style.overflow = "hidden";

        this.promise = this.render().then(() => {
            this._element = this.host.firstElementChild as HTMLElement; 
            this.component = new MDCLinearProgress(this._element);
        });
    }

    '::template'() {   
        return `<div role="progressbar" class="mdc-linear-progress">
        <div class="mdc-linear-progress__buffer">
          <div class="mdc-linear-progress__buffer-bar"></div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
`;
    }
}

//registerComponent("arkeos-mdc-linear-progress-bar", ArkeosMdcLinearProgressBar, { extends: "HTMLDivElement" });




