import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup!:FormGroup;
  signin!:FormGroup;
   user:any={}

   user2:any={}

   message:any;

   mymail : String ='';

   types = [
    { id: 1, name: "candidat" },
    { id: 2, name: "recruteur" }
  ];

  constructor(private formBuilder:FormBuilder,
              private RegisterService:UserRegistrationService,
              private router: Router) { }

  ngOnInit(): void {
    this.signup=this.formBuilder.group({
      email:[''],
      password:[''],
      pwd:[''],
      role:['']
    })
    this.signin=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  Onsignup(){
    console.log('user',this.user);
    //console.log(this.signup.value);
    let resp=this.RegisterService.doRegistration(this.user);
    resp.subscribe( (data)=> { 
        this.message=data ;
       this.router.navigate(['']) 
      });   

    //this.router.navigate(['']);

    // this.RegisterService.getUserByEmail(this.signup.get('email')!.value).subscribe((user7 : any ) => {
    //     this.mymail = user7. ;
    //   });
    //   console.log(this.mymail);
    // if (this.mymail != '') {
    //   this.router.navigate(['']);
    // }


  }

  message2:any;
  messageverif : string ='' ;
  //varmessageverif : boolean=true ;
  doLogin() {
    this.user2 = this.signin.value;
    let resp = this.RegisterService.login(this.user2);
    
    resp.subscribe(data => {
      this.message2 = data;    
      console.log(this.message2); 
      if (this.message2 == 'login succes'){
        //this.varmessageverif = true ;
        //this.messageverif = 'login succes' ;
        this.router.navigate([""]);
      }
      if (this.message2 == 'admin'){
        //this.varmessageverif = true ;
        //this.messageverif = 'admin' ;
        this.router.navigate(["admin"]);
      }
      // if (this.message2 != 'admin' &&  this.message2 != 'login succes'){
      //   this.varmessageverif = false ;
      //   //this.messageverif = 'admin' ;
      //   //this.router.navigate(["admin"]);
      // }
    });
  }
}

//{
    // console.log(this.RegisterService.getUsers());
    // this.RegisterService.getUsers().subscribe(( us : any ) => {
    //   this.user3 = us;
    //   console.log('hoiiii');
    //   console.log(this.user3);
    // });
//}


  // login(){
  //   //console.log('login',this.signin.value);
  //   this.user2 = this.signin.value;
  //   console.log('user2',this.user2);

  //   let email = this.signin.get('email')!.value;
  //   let password = this.signin.get('password')!.value;

  //   console.log(this.RegisterService.getUserByEmail(email).subscribe(( us : any ) => {
  //     this.user3 = us;
  //     console.log('hoiiii');
  //     console.log(this.user3); 
  //     if ( this.user3 && password === 'your value'){
  //       //this.router.navigate(['/']);
  //     }
  //     })      
  //   );

  //   if ( this.user3 && password === 'your value'){
  //     //this.router.navigate(['/']);
  //   }
    
  // }