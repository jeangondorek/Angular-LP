import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { NewsFormComponent } from '../news-form/news-form.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        NgOptimizedImage,
        BtnPrimaryComponent,
        NewsFormComponent        
    ]
})
export class HomeComponent {

}
