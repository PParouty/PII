import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeDetailComponent } from './methode-detail.component';

describe('MethodeDetailComponent', () => {
  let component: MethodeDetailComponent;
  let fixture: ComponentFixture<MethodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
