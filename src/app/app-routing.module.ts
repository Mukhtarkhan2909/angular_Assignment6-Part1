import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Parent1Component} from './parent1/parent1.component';
import {Parent2Component} from './parent2/parent2.component';
import {Child1Component} from './parent1/child1/child1.component';
import {Child2Component} from './parent1/child2/child2.component';
import {Child3Component} from './parent2/child3/child3.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'parent1', component: Parent1Component,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  },
  { path: 'parent2', component: Parent2Component,
    children: [
      { path: 'child3', component: Child3Component }
    ]
  },
];

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
