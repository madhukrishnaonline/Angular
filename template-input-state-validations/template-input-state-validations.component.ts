import { Component } from '@angular/core';

@Component({
  selector: 'app-template-input-state-validations',
  templateUrl: './template-input-state-validations.component.html',
  styleUrls: ['./template-input-state-validations.component.css']
})
export class TemplateInputStateValidationsComponent {

  public CityError: string = '';

  public ChangeCity(e:any) {
    if (e.target.value == "-1") {
      this.CityError = "Please select your city";
    }
  }
}
