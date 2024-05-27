import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NubankDetailsPage } from './nubank.details.page';

describe('NubankDetailsPage', () => {
  let component: NubankDetailsPage;
  let fixture: ComponentFixture<NubankDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NubankDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
