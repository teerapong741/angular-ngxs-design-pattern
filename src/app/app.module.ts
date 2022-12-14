import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { RouterModule } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { routes } from './app.routing';
import { states } from './shared/stores';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

    // Ngxs
    NgxsModule.forRoot(states),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
