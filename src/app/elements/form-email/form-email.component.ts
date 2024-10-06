import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-form-email',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-email.component.html',
  styleUrl: './form-email.component.sass',
})
export class FormEmailComponent {
  emailForm: FormGroup;
  messageSerwer: string = '';

  emailPath: string = 'https://mailer.fora-poligrafia.pl/send-mail';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public media: MediaService,
  ) {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required],
      phone: [''],
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.http.post(this.emailPath, this.emailForm.value).subscribe(
        (res) => {
          if (res) {
            this.messageSerwer = 'Wiadomość wysłana';
          }
          this.emailForm.reset();
        },
        (err) => {
          console.error('Błąd', err);
        },
      );
    } else {
      this.messageSerwer = 'Niewłaściwy formularz';
    }
  }
}
