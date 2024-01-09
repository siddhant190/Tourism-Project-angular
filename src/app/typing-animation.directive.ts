import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]'
})
export class TypingAnimationDirective {

  @Input('appTypingAnimation') text: string = '';
  private intervalId: any;
  private currentIndex: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.el.nativeElement.textContent = ''; // Clear the content initially
    this.startTyping();
  }

  private startTyping() {
    const speed = 100; // Adjust the speed as needed
    const textArray = this.text.split('');

    this.intervalId = setInterval(() => {
      if (this.currentIndex < textArray.length) {
        const letter = this.renderer.createText(textArray[this.currentIndex]);
        this.renderer.appendChild(this.el.nativeElement, letter);
        this.currentIndex++;
      } else {
        clearInterval(this.intervalId);
      }
    }, 100);
  }
}
