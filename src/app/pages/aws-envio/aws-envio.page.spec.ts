import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwsEnvioPage } from './aws-envio.page';

describe('AwsEnvioPage', () => {
  let component: AwsEnvioPage;
  let fixture: ComponentFixture<AwsEnvioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AwsEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
