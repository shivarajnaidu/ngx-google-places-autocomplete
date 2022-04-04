# ngx-google-places-autocomplete
This module is a wrapper for Google Places Autocomplete js library.

[![NPM](https://nodei.co/npm/@yuvarajv/ngx-google-places-autocomplete.png)](https://nodei.co/npm/@yuvarajv/ngx-google-places-autocomplete/)


## Note
This project code inherited from https://github.com/skynet2/ngx-google-places-autocomplete to make it work better with angular 13.x


# Installation
#### npm
```
npm i @yuvarajv/ngx-google-places-autocomplete
```
#### yarn
```
yarn add @yuvarajv/ngx-google-places-autocomplete
```
# Integration
1. Add google library in your index.html file : 
```
    <script src="https://maps.googleapis.com/maps/api/js?key=<Your API KEY>&libraries=places&language=en"></script>
```
2. Replace <You API KEY> with google places api key. Ref - https://developers.google.com/places/web-service/get-api-key

# Usage
1. Add a module into your application (as a rule app.module.ts)
```ts
import { GooglePlaceModule } from "@yuvarajv/ngx-google-places-autocomplete";

@NgModule({
    imports: [GooglePlaceModule, BrowserModule, FormsModule, ...],
        ....
        })
```
2. Add directive ngx-google-places-autocomplete to your input field (options is an optional parammeter)
```
<input ngx-google-places-autocomplete [options]='options' #placesRef="ngx-places" (onAddressChange)="handleAddressChange($event)"/>
```
3. Additionally you can reference directive in your component
```ts
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
        public handleAddressChange(address: Address) {
        // Do some stuff
    }
```


## Options
Refer to original google maps api - https://developers.google.com/maps/documentation/javascript/places-autocomplete
Options object - https://github.com/skynet2/ngx-google-places-autocomplete/blob/master/src/objects/options/options.ts
Google doc for Options : https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions
Example : 
```html  
[options]="{
    types: [],
    componentRestrictions: { country: 'UA' }
    }"
```

# GitHub
Please feel free to declare issues or contribute: https://github.com/shivarajnaidu/ngx-google-places-autocomplete



## Development
# NgxGooglePlacesAutocomplete

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-google-places-autocomplete` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-google-places-autocomplete`.
> Note: Don't forget to add `--project ngx-google-places-autocomplete` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-google-places-autocomplete` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-google-places-autocomplete`, go to the dist folder `cd dist/ngx-google-places-autocomplete` and run `npm publish`.

## Running unit tests

Run `ng test ngx-google-places-autocomplete` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
