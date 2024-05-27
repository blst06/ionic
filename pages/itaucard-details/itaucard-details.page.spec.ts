import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItaucardDetailsPage } from './itaucard-details.page';

describe('ItaucardDetailsPage', () => {
  let component: ItaucardDetailsPage;
  let fixture: ComponentFixture<ItaucardDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaucardDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
