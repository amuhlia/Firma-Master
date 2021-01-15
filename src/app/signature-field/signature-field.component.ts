import { Component, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad }                            from 'angular2-signaturepad/signature-pad';

/*
  Generated class for the SignatureField component.
  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/

@Component({
  selector: 'signature-field',
  templateUrl: 'signature-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureFieldComponent),
      multi: true,
    },
  ],
})
export class SignatureFieldComponent {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  public options: Object = {};

  public _signature: any = null;

  public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }

  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    console.log('signature data :');
    console.log(this.signaturePad.toData());
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    this.signaturePad.fromDataURL(this.signature);
  }

  public ngAfterViewInit(): void {
    this.signaturePad.set('penColor', 'rgb(0, 0, 0)');
    this.signaturePad.set('backgroundColor', 'rgb(255, 255, 255)');
    this.signaturePad.set('canvasWidth', '1000');
    this.signaturePad.set('canvasHeight', '500');
    this.signaturePad.clear();
  }

  public drawBegin(): void {
    console.log('Begin Drawing');
  }

  public drawComplete(): void {
    this.signature = this.signaturePad.toDataURL('image/jpeg', 0.5);
  }

  public clear(): void {
    this.signaturePad.clear();
    this.signature = '';
  }
}
