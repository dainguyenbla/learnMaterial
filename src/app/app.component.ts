import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
@HostListener('window:resize', ['$event.target']) 
onResize() { 
  this.resizeWorks();
}

constructor(private el:ElementRef){}
elHeight:number;

private resizeWorks(): void {
  this.elHeight = this.el.nativeElement.width;
}

  title = 'learnMaterial';
  bool:boolean=false;
  onClick(){
    this.bool=true;
    console.log(this.el.nativeElement.width)
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.elHeight)
    this.onResize()
    console.log(this.elHeight)
  }
  width:any;
  height:any;
  offsetLeft:number;
  changeActiveLink(value){
    // this.height=value.srcElement.parentElement.attributes['height'].value;
    // this.width=value.srcElement.parentElement.attributes['width'].value;
    // this.offsetLeft=value.srcElement.parentElement.offsetLeft;
    console.log(value);
    // console.log(this.height); 
  }
}
