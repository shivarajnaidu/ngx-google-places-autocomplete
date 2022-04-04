import { NgModule } from '@angular/core';
import { NgxGooglePlacesAutocompleteDirective } from './ngx-google-places-autocomplete.directive';



@NgModule({
  declarations: [
    NgxGooglePlacesAutocompleteDirective
  ],
  exports: [
    NgxGooglePlacesAutocompleteDirective
  ]
})
export class GooglePlaceModule { }
