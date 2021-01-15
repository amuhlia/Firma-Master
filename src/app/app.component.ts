import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignatureFieldComponent } from './signature-field/signature-field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Firma';

  //public secondSig: SignatureFieldComponent;


  constructor() {

  }

  public ngAfterViewInit() {
    this.beResponsive();
    this.setOptions();
  }

  // set the dimensions of the signature pad canvas
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size');
  }

  public size(container: ElementRef, sig: SignatureFieldComponent) {
    sig.signaturePad.set('canvasWidth', container.nativeElement.clientWidth);
    sig.signaturePad.set('canvasHeight', container.nativeElement.clientHeight);
  }

  public setOptions() {

    //this.secondSig.signaturePad.clear(); // clearing is needed to set the background colour
  }

  public submit() {
    console.log('CAPTURED SIGS:');
    //console.log(this.secondSig.signature);
  }

  public clear() {
    //this.secondSig.clear();
  }
}
