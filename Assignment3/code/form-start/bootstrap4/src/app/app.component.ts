import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap4';
  msg: string;
  submitted: boolean = false;
  public user: User = {
    mailAddress:null,
    subscription:"Advanced",
    password:null,
  };



  onSubmit(myform: NgForm){
    this.submitted = true;
    if (myform.valid){
      console.log('mailaddress: ' + this.user.mailAddress)
      console.log('subscpition: ' + this.user.subscription)
      console.log('password: '+ this.user.password);
      this.submitted = false;
      myform.reset();
    }
    else{
      this.msg = "Entry is not completed!";
    }

  }




}
