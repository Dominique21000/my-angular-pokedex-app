import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true
})
export class PokemonBorderDirective {
  //pokemonType: input.required<string>();
  //@Input() pokemonType = '';
  pokemonType = input.required<String>();

  private initialColor: String;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
   }

   @HostListener('mouseenter') OnMouseEnter(){
    const color=this.getBorderColor();
    this.setBorder(color);
    console.log(this.pokemonType)
   }

   @HostListener('mouseleave') OnMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
   }


   private setBorder(color:String){
    this.el.nativeElement.style.borderColor = color;
   }

   private getBorderColor(){
    switch (this.pokemonType()){
      case 'Feu':
        return '#EF5350';
      case 'Eau':
        return '#42E5F5';
      case 'Plante':
        return '#66BB6A';
      case 'Insecte':
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poisson':
        return '#b38ff';
      case 'Fée':
        return '#f8bbd0';
      case 'Electrik':
        return '#f4ff81';
      default:
        return '#303030';
    }
   }
}
