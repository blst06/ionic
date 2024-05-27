import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportePage } from './transporte.page';

describe('TransportePage', () => {
  let component: TransportePage;
  let fixture: ComponentFixture<TransportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
