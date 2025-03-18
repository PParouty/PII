import { ComponentFixture, TestBed } from '@angular/core/testing';

//import { AccueilComponent } from './accueil.component'; // ici on reutilise bien le nom utilisé lors de l'exportation !

import { AccueilComponent } from './accueil.component';


describe('Accueil', () => {  // et on reutilise le nom d'export / import ici aussi ou on detail un peu le component
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
