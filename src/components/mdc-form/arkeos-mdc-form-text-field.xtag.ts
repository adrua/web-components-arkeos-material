import { MDCTextField, MDCTextFieldHelperText } from '@material/textfield';

declare var XTagElement: any;

declare type InputType = "text" | "number" | "email" | "url" | "date" | "datetime-local" | "color"   
                        | "checkbox" | "month" | "tel" | "time" | "week"  ;

declare type ModeType = "filled" | "outlined";
export class ArkeosMdcTextField extends XTagElement  {
    public host: HTMLElement;

    public promise: Promise<void>;

    private _field: MDCTextField;
    private _helper: MDCTextFieldHelperText;

    //Attributes
    private _captionElement: HTMLElement = null;
    private _caption: string;
    set 'caption::attr'(val: string) {
        this._caption = val;
        this.promise.then(() => this._captionElement.replaceChildren(val));
    }

    get 'caption::attr'() {
        return this._captionElement?.textContent;
    }

    private _inputElement: HTMLElement = null;
    private _type: InputType;
    get 'type::attr'() {
        return this._inputElement.getAttribute("type") as InputType;
    }

    set 'type::attr'(val: InputType) {
        this._type = val;
        this.promise.then(() => this._inputElement.setAttribute("type", val));
    }

    private _value: string;
    get 'data-value::attr'() {
        this._value = this._field.value;
        return this._field.value;
    }

    set 'data-value::attr'(val: string) {
        this._value = val;
        this.promise.then(() => this._field.value = val);
    }

    private _mode: ModeType;
    set 'mode::attr'(val: ModeType) {
        this._mode = val;
        this.promise.then(() => this.render(val));
    }

    get 'mode::attr'(): ModeType {
        return this._mode;
    }

    private _required: boolean;
    set 'validate::attr'(val: string) {
        this._required = (val.toLowerCase() === "true");
        this.promise.then(() => { 
            if(val) {
                this._inputElement?.setAttribute("required", "");
            } else {
                this._inputElement?.removeAttribute("required");
            }

            this._field.required = this._required;
        });
    }

    get 'validate::attr'(): string {
        return this._field.required.toString();
    }

    set 'validate-message::attr'(val: string) {
        this.promise.then(() => this._field.helperTextContent = val);
    }

    get 'validate-message::attr'(): string {
        return this._field.required.toString();
    }

    private _disabled: boolean;
    set 'disabled::attr'(val: string) {
        this._disabled = (val.toLowerCase() === "true") ;
        this.promise.then(() => { 
            if(this._disabled) {
                this._inputElement.setAttribute("disabled", "");
                this._inputElement.classList.add("mdc-text-field--disabled");    
            } else {
                this._inputElement.removeAttribute("disabled");
                this._inputElement.classList.remove("mdc-text-field--disabled");    
            }
            this._field.disabled = this._disabled;
        });
    }

    get 'disabled::attr'(): string {
        return this._field.disabled.toString();
    }

    'filled::template'() {
        return `<label class="mdc-text-field mdc-text-field--filled" style="width: 100%">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label">Label</span>
    <input type="text" class="mdc-text-field__input" aria-labelledby="my-label">
    <span class="mdc-line-ripple"></span>
</label>
<div class="mdc-text-field-helper-line">
  <div class="mdc-text-field-helper-text" aria-hidden="true"></div>
</div>` 
    }

    'outlined::template'() {
        return `<label class="mdc-text-field mdc-text-field--outlined" style="width: 100%">
    <span class="mdc-notched-outline">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
            <span class="mdc-floating-label" id="my-label-id">Your Name</span>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
        </span>
    <input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id">
</label>
<div class="mdc-text-field-helper-line">
  <div class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true"></div>
</div>` 
    }

    constructor() {
        super();

        this._mode = this._mode || 'outlined';
        this.host = this as unknown as HTMLElement;
        this.host.setAttribute("style", "width; 100%; overflow: none;");

        let childs = Array.from(this.host.children);

        this.promise = this.render(this._mode).then(() => {
            let _field = this.host.firstElementChild;
            this._field = new MDCTextField(_field);
            this._helper = new MDCTextFieldHelperText(_field.nextElementSibling);

            this._captionElement = _field.querySelector('.mdc-floating-label');
            this._captionElement.replaceChildren(this._caption);

            this._inputElement = _field.querySelector('.mdc-text-field__input');
            this._inputElement.setAttribute("type", this._type);
        }).then(() => {
            childs.forEach((child) => this.host.appendChild(child));
        })
    }
}