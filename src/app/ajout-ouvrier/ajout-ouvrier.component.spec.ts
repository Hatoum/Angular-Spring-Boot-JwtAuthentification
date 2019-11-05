import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOuvrierComponent } from './ajout-ouvrier.component';

describe('AjoutOuvrierComponent', () => {
  let component: AjoutOuvrierComponent;
  let fixture: ComponentFixture<AjoutOuvrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOuvrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
