import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { AlertComponentComponent } from "../alert-component/alert-component.component";

@Component({
    selector: 'app-news-form',
    standalone: true,
    providers: [
        NewsletterService
    ],
    templateUrl: './news-form.component.html',
    styleUrl: './news-form.component.scss',
    imports: [
        BtnPrimaryComponent,
        ReactiveFormsModule,
        AlertComponentComponent
    ]
})
export class NewsFormComponent {
  newsForm!: FormGroup;
  loading = signal(false);
  alertVisible: boolean = false;
  alertMessage: string = '';

  constructor(private service: NewsletterService){
    this.newsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newsForm.valid) {
      this.service.sendData(this.newsForm.value.nome, this.newsForm.value.email).subscribe({
        next: () => {
          this.newsForm.reset();
          this.loading.set(false);
          this.showAlert("Sucesso!", false);
        },
        error: () => {
          this.loading.set(false);
          this.showAlert("Erro ao enviar. Tente novamente.", true);
        }
      });
    }
  }

  showAlert(message: string, isError: boolean) {
    this.alertMessage = message;
    this.alertVisible = true;

    if (!isError) {
      setTimeout(() => {
        this.alertVisible = false;
      }, 5000);
    } else {
      setTimeout(() => {
        this.alertVisible = false;
      }, 5000);
    }
  }
}
