import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecargaPage } from './recarga.page';

describe('RecargaPage', () => {
  let component: RecargaPage;
  let fixture: ComponentFixture<RecargaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
