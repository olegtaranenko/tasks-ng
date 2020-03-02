import {
  ChangeDetectorRef,
  ContentChild,
  Directive, ElementRef,
  EmbeddedViewRef,
  HostListener, Input, Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input()
  public text = '';

  private embeddedViewRef: EmbeddedViewRef<any>;
  private tooltipContainer: HTMLElement;
  private tooltip: HTMLElement;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
  }

  @ContentChild('tooltipTemplate')
  private tooltipTemplateRef: TemplateRef<any>;
  @ContentChild('tooltipTemplate', {read: ViewContainerRef})
  private tooltipContainerRef: ViewContainerRef;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.tooltipContainer = this.elementRef.nativeElement;
    if (this.tooltipTemplateRef) {
      this.embeddedViewRef = this.tooltipContainerRef.createEmbeddedView(this.tooltipTemplateRef, {$implicit: this.text});
      [this.tooltip] = this.embeddedViewRef.rootNodes;
      this.cdr.detectChanges();
    } else {
      this.tooltip = this.renderer.createElement('div');
      this.renderer.addClass(this.tooltip, 'tooltip');
      this.tooltip.innerHTML = this.text;
      this.renderer.appendChild(this.tooltipContainer, this.tooltip);
    }
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    let {top, left} = this.tooltipContainer.getBoundingClientRect();
    console.log(top, left, this.tooltip.offsetHeight, this.tooltip.offsetWidth)
    top = top - this.tooltip.offsetHeight - 5;
    left = left - (this.tooltip.offsetWidth - this.tooltipContainer.offsetWidth) / 2;
    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = this.tooltipContainer.offsetHeight + this.tooltip.offsetHeight + 5;
    }
    console.log(top, left);
    this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.embeddedViewRef) {
      this.embeddedViewRef.destroy();
      return;
    }
    this.renderer.removeChild(this.tooltipContainer, this.tooltip);
  }

}
