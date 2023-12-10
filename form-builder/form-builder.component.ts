import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent 
{
  constructor(private fb:FormBuilder){

  }

  public frmRegister = this.fb.group({
    Name:this.fb.control('',[Validators.required]),
    Password:this.fb.control('',[Validators.required,Validators.pattern(/\[A-Z]{5,10}/)]),
    frmRegister2:this.fb.group({
      Email:this.fb.control('',[Validators.required]),
      PAN:this.fb.control('',[Validators.required])
    }),
    Mobile:this.fb.control(0,[Validators.required,Validators.pattern(/\+91\d{10}/)]),
    Photos:this.fb.array([this.fb.control('',[Validators.required])])
  });

  get Photos():FormArray
  {
    return this.frmRegister.get('Photos') as FormArray;
  }

  get Password()
  {
    return this.frmRegister.get("Password");
  }
  
  public AddMore()
  {
    this.Photos.push(this.fb.control(''));
  }

  public RemoveFile(id:number)
  {
    this.Photos.removeAt(id);
  }

  public SubmitClick()
  {
    alert(JSON.stringify(this.frmRegister.value));
  }
}
