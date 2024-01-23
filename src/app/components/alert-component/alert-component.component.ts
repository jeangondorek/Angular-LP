import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.scss'
})
export class AlertComponentComponent {
  @Input() isVisible: boolean = false;
  @Input() message: string = '';
  @Input() isError: boolean = false;

  hideAlert() {
    this.isVisible = false;
  }
}
