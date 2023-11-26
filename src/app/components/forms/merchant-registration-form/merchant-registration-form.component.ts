import { Component } from "@angular/core"
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { slideInOut, fadeInOut, slideLeft } from "src/app/animations"
import { MerchantData } from "src/app/interfaces/register-merchant"
import { SwalService } from "src/app/services/swal.service"

@Component({
  selector: "app-merchant-registration-form",
  templateUrl: "./merchant-registration-form.component.html",
  styleUrls: ["./merchant-registration-form.component.css"],
  animations: [slideInOut, fadeInOut, slideLeft],
})
export class MerchantRegistrationFormComponent {
  merchantRegistered: MerchantData[] = []
  numberOfMerchant: number = this.merchantRegistered.length
  isSubmitted: boolean = true
  previousFormValid: boolean = false
  filename: string = ""
  fileUploaded: boolean = false
  currentDate: Date = new Date()
  // Make the form group with validators
  registrationForm: FormGroup = this.formBuilder.group({
    merchantName: ["", Validators.required],
    merchantUsername: ["", Validators.required],
    merchantEmail: [
      "",
      [
        Validators.required,
        Validators.pattern(/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,10}$/),
      ],
    ],
    merchantPhone: [
      "",
      [Validators.required, Validators.pattern(/^[0-9()+-]+$/)],
    ],
    merchantDescription: ["", Validators.required],
  })

  ngOnInit() {
    // Retrieve merchantRegistered from localStorage on component initialization
    const storedMerchants = localStorage.getItem("merchantRegistered");
    if (storedMerchants) {
      this.merchantRegistered = JSON.parse(storedMerchants);
    }
  }

  isUsernameAvailable(username: string): boolean {
    const storedMerchants = localStorage.getItem("merchantRegistered");
    if(storedMerchants === null){
      return true
    }
    const existingUsers = JSON.parse(storedMerchants) || [];
    return !existingUsers.some((user: any) => user.merchantUsername === username);
  }

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private swal: SwalService,
  ) {}

  documents = new FormArray([this.documentFG])
  get documentFG(): FormGroup {
    return this.formBuilder.group({
      file: [null, Validators.required],
      filename: ["", Validators.required],
      description: ["", Validators.required],
    })
  }

  get documentsControls(): FormGroup[] {
    return this.documents.controls as FormGroup[]
  }

  addDocument() {
    this.documents.push(this.documentFG)
  }

  // Submit
  onSubmit() {
    if (this.previousFormValid) {
      const formData: MerchantData = {
        merchantID: (this.numberOfMerchant+1).toString(),
        merchantName: this.registrationForm.value.merchantName,
        merchantUsername: this.registrationForm.value.merchantUsername,
        merchantEmail: this.registrationForm.value.merchantEmail,
        merchantPhone: this.registrationForm.value.merchantPhone,
        merchantDescription: this.registrationForm.value.merchantDescription,
        merchantStatus: "pending",
        merchantDocument: this.documents.value.map((doc: any) => ({
          file: doc.file,
          filename: doc.filename,
          description: doc.description,
        })),
      }

      this.merchantRegistered.push(formData)
      
      // Save the updated array to localStorage
      localStorage.setItem(
        "merchantRegistered",
        JSON.stringify(this.merchantRegistered)
      );

      console.log(formData);

      this.swal.SwalNotifSuccess("Success", "Merchant registered! Approval will be done by ministry")
      this.router.navigate(["/"])
    }
  }

  onFileChange(event: any, index: number) {
    const fileInput = event.target
    // console.log(this.documents)
    // Check if any file is selected
    if (fileInput.files && fileInput.files.length > 0) {
      // Update the filename variable
      this.fileUploaded = true
      this.filename = fileInput.files[0].name
      this.documents
        .at(index)
        .get("filename")
        ?.setValue(fileInput.files[0].name)
      this.swal.SwalNotifSuccess(
        "Success",
        `File ${fileInput.files[0].name} uploaded successfully`,
      )
    } else {
      // Reset the filename if no file is selected
      this.filename = ""
    }

    // Trigger form validation on file change
    this.registrationForm.get("documents")?.updateValueAndValidity()
  }

  nextForm() {
    if (this.registrationForm.valid) {
      this.previousFormValid = true
      this.swal.SwalNotifSuccess(
        "Success",
        "Register Success, please provide your related documents",
      )
    } else {
      this.swal.SwalNotifFailed("Error", "Please check your form input")
    }
  }
}
