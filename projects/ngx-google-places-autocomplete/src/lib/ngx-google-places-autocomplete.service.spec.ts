import { TestBed } from '@angular/core/testing';

import { NgxGooglePlacesAutocompleteService } from './ngx-google-places-autocomplete.service';

describe('NgxGooglePlacesAutocompleteService', () => {
  let service: NgxGooglePlacesAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGooglePlacesAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
