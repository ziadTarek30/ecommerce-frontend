import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Auth } from './auth/auth';
import { Shop } from './shop/shop';
import { Cart } from './cart/cart';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Faq } from './faq/faq';
import { Testimonials } from './testimonials/testimonials';
import { Checkout } from './checkout/checkout';
import { Account } from './account/account';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'auth', component: Auth},
    {path: 'shop', component: Shop},
    {path: 'cart', component: Cart},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'faq', component: Faq},
    {path: 'checkout', component: Checkout, canActivate: [authGuard]},
    // {path: 'shop/product', component: Product},
    {path: 'testimonials', component: Testimonials},
    {path: 'account', component: Account, canActivate: [authGuard]}
];

