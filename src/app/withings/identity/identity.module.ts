import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentityPageRoutingModule } from './identity-routing.module';

import { IdentityPage } from './identity.page';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentityPageRoutingModule,


    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
              allowedUrls: ['https://sleepexpert.voxte.ch/'],
              sendAccessToken: true
              }
            })],

  declarations: [IdentityPage]
})
export class IdentityPageModule {}
