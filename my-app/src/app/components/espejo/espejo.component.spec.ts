import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspejoComponent } from './espejo.component';

describe('EspejoComponent', () => {
  let component: EspejoComponent;
  let fixture: ComponentFixture<EspejoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspejoComponent]
    });
    fixture = TestBed.createComponent(EspejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
