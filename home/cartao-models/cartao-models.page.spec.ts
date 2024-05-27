import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoModelsPage } from './cartao-models.page';

describe('CartaoModelsPage', () => {
  let component: CartaoModelsPage;
  let fixture: ComponentFixture<CartaoModelsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
