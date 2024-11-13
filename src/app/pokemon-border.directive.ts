import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { getPokemonColor } from './pokemon.model';

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
      const color = getPokemonColor(this.pokemonType());

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
}