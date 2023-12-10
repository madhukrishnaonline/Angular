import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
 
  public frmRegister = new FormGroup({
    Name:new FormControl(""),
    Password:new FormControl,
    frmRegister2: new FormGroup({
      Email:new FormControl(''),
      PAN : new FormControl('')
      }),
    Mobile:new FormControl("")
  })

  get frmRegister2()
  {
    return this.frmRegister.get("frmRegister2");
  }

  get Email()
  {
    return this.frmRegister.get("Email");
  }

  get PAN()
  {
    return this.frmRegister.get("PAN");
  }

  SubmitClick()
  {
    alert(JSON.stringify(this.frmRegister.value));
    this.frmRegister.reset();
  }

  SaveDetails()
  {
    alert(JSON.stringify(this.frmRegister2?.value))
    // this.frmRegister2?.reset();
  }
}
