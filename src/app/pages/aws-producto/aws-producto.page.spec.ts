import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwsProductoPage } from './aws-producto.page';

describe('AwsProductoPage', () => {
  let component: AwsProductoPage;
  let fixture: ComponentFixture<AwsProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AwsProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
