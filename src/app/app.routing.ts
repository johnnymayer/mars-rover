import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
