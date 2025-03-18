import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMethodesComponent } from './liste-methodes.component';

describe('ListeMethodesComponent', () => {
  let component: ListeMethodesComponent;
  let fixture: ComponentFixture<ListeMethodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMethodesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMethodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
