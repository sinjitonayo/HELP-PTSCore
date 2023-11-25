import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { slideInOut, fadeInOut, slideLeft } from "src/app/animations"

@Component({
  selector: "app-merchant-registration-form",
  templateUrl: "./merchant-registration-form.component.html",
  styleUrls: ["./merchant-registration-form.component.css"],
  animations: [slideInOut, fadeInOut, slideLeft],
})
export class MerchantRegistrationFormComponent {
  registrationForm: FormGroup
  isSubmitted: boolean = true
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      merchantName: ["", Validators.required],
      merchantUsername: ["", Validators.required],
      merchantEmail: [
        "",
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
      merchantPhone: [
        "",
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
      merchantDescription: ["", Validators.required],
      file: [null],
      filename: [""],
      documentDescription: [""],
    })
  }

  onSubmit() {}
}
