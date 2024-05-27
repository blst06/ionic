import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarCartaoPage } from './adicionar-cartao.page';

describe('AdicionarCartaoPage', () => {
  let component: AdicionarCartaoPage;
  let fixture: ComponentFixture<AdicionarCartaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCartaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
