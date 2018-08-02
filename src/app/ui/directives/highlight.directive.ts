import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input()
  public highlightColor: string;

  @Input()
  public appHighlight: string;

  constructor(
    private _el: ElementRef
  ) {

  }

  public ngOnInit() {
    this._el.nativeElement.style.backgroundColor = this.highlightColor || 'red';
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this._highlight('yellow');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this._highlight(null);
  }

  private _highlight(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }

}
