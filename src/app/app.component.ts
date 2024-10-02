import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AccordionComponent, HlmButtonDirective],
  host: {
    class: 'block'
  },
  template: `
    <router-outlet />
  `
})
export class AppComponent {
  title = 'rotomold18';

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTags() {
    this.titleService.setTitle('RotomoldMexico - Home');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call' });
    this.meta.addTag({ name: 'keywords', content: 'Rotational Molding, Rotomold Mexico, Mold Making, Foam Insulation, Shipping, Stocking, Compression Molding, Extrusion, Rapid Prototyping, Quality Manufacturing' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'RotomoldMexico - Home' });
    this.meta.addTag({ property: 'og:description', content: 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call' });
    this.meta.addTag({ property: 'og:image', content: '/assets/logoHeader.png' });
  }
}
