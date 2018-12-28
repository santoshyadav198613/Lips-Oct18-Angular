import { Directive, ElementRef, 
  OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseover') onmouseover() {
     console.log('on mouseover event'); 
    //  this.el.nativeElement.style.background = 'steelblue';
    this.renderer.setStyle(this.el.nativeElement, 'color','white');
    this.renderer.setStyle(this.el.nativeElement, 'background','steelblue');
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.el.nativeElement, 'color','black');
    this.renderer.setStyle(this.el.nativeElement, 'background','transparent');
  }

}
