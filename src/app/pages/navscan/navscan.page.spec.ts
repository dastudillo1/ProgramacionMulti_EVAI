import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavscanPage } from './navscan.page';

describe('NavscanPage', () => {
  let component: NavscanPage;
  let fixture: ComponentFixture<NavscanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
