import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvataresPage } from './avatares.page';

describe('AvataresPage', () => {
  let component: AvataresPage;
  let fixture: ComponentFixture<AvataresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvataresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
