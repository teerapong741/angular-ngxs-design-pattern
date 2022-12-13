import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { states } from './shared/stores';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { CustomRouterStateSerializer } from './shared/stores/router/router.serializer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

    // Ngxs
    NgxsModule.forRoot(states),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
