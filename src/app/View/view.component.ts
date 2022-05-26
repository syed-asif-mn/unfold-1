import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  serverFrameworks = ['C#', 'Python', 'Java', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'JS'];
  languages = ['English', 'हिंदी', 'Français', 'Deutsch', '中文', '日本語']

  isSubmitted = false;

  constructor(public fb: FormBuilder, private translateService: TranslateService) {
    this.translateService.use('en');
    }
    
    changeLanguage(index: number) {
    let codes = ['en', 'hin', 'fr', 'de', 'zh', 'ja']
    this.translateService.use(codes[index]);
    }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    serverFramework: ['', [Validators.required]],
    clientFramework: ['', [Validators.required]]
  });

  // Getter method to access form control
  get myForm() {
    return this.registrationForm.get('serverFramework') || this.registrationForm.get('clientFramework');
  }

  // Submit Registration Form
  onSubmit() {
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value));
      this.registrationForm.reset();
    }
  }
}
