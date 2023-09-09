import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogRegistroPage } from './log-registro.page';

describe('LogRegistroPage', () => {
  let component: LogRegistroPage;
  let fixture: ComponentFixture<LogRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
