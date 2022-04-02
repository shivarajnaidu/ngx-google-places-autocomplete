import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGooglePlacesAutocompleteComponent } from './ngx-google-places-autocomplete.component';

describe('NgxGooglePlacesAutocompleteComponent', () => {
  let component: NgxGooglePlacesAutocompleteComponent;
  let fixture: ComponentFixture<NgxGooglePlacesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGooglePlacesAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGooglePlacesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
