import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'articles', component: ArticleComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
];

