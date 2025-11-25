import { Routes } from '@angular/router';

import { HomePage } from './home/components/ui/home-page/home-page';
import { ListContactsPage } from './contacts/components/smart/list-contacts-page/list-contacts-page';
import { ContactComponent } from './contacts/components/ui/contact-component/contact-component';
import { AddContactsPage } from './contacts/components/smart/add-contacts-page/add-contacts-page';
import { CategoriesPage } from './categories/components/smart/categories-page/categories-page';
import { AddCategoriesPage } from './categories/components/smart/add-categories-page/add-categories-page';
import { FavoritesPage } from './favorites/components/ui/favorites-page/favorites-page';
import { CategorieComponent } from './categories/components/ui/categorie-component/categorie-component';
import { EditContactsPage } from './contacts/components/smart/edit-contacts-page/edit-contacts-page';


export const routes: Routes = [
    //  ------------------------ CHANGE THE ROUTES COMPONENTS
    {path: "", component: HomePage},
    
    {path: "contacts", component: ListContactsPage},
    {path: "contacts/new", component: AddContactsPage},
    {path: "contacts/:id", component: ContactComponent},
    {path: "contacts/:id/edit", component: EditContactsPage},

    {path: "categories", component: CategoriesPage},
    {path: "categories/new", component: AddCategoriesPage},
    {path: "categories/:id", component: CategorieComponent},
    
    {path: "favorites", component: FavoritesPage},
    
    {path: "", redirectTo: "/", pathMatch: "full"}

];
