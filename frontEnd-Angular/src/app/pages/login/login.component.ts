import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
    ) {}

  form!:FormGroup;
  loginFailMessage:string[] = new Array;
  rememberMe!:boolean;

  ngOnInit():void{
    this.form = this.formBuilder.group({
      email:'',
      password:'',
      // remember:false
    })
  }

  submit():void{
    this.http
      .post('https://192.168.1.77:7092/api/User', this.form.getRawValue(), {withCredentials:true})
      .subscribe({
        next: () => this.router.navigate(['']),
        error: (response) => {this.postFailedMessage([response.status, response.error])}
      })
  }

  postFailedMessage(message:string[]){
    console.log(message)

    if (message[0] == '200'){
      this.router.navigate([''])
    }
    else{
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      alertPlaceholder!.innerHTML = ''

      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>${message[1]}. Try again.</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
      
      alertPlaceholder!.append(wrapper)
    }
  }

}
