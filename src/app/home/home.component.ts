import { AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirective } from '../placeholder/placeholder.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit,OnDestroy  {
   loadAlert=false;
  @ViewChild(PlaceholderDirective, { static: true }) alertHost: PlaceholderDirective;
   //  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
   
  private closeSub:Subscription;
  constructor(private router:Router,private compFactoryResolver:ComponentFactoryResolver ) {
    // hostViewContainerRef.createComponent<AlertComponent>(AlertComponent)
   
   }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
   
  }

  ngOnDestroy(): void {
    if (this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

  onLoadServers(){
    this.router.navigate(['/servers']);
  }

  showAlertMessage(){
    this.loadAlert=true;
  }

  closeAlertbox(){
    this.loadAlert=false;
  }

   showAlertPGM(message:string){
    //const alertcmpFactory=this.compFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    //hostViewContainerRef.createComponent(alertcmpFactory);
    const compRef=hostViewContainerRef.createComponent<AlertComponent>(AlertComponent)
    compRef.instance.message="this is program message";
    this.closeSub= compRef.instance.close.subscribe(()=>{ 
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();

    });
      

  }

  

}
