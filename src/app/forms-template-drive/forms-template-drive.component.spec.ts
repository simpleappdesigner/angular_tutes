import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplateDriveComponent } from './forms-template-drive.component';

describe('FormsTemplateDriveComponent', () => {
  let component: FormsTemplateDriveComponent;
  let fixture: ComponentFixture<FormsTemplateDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTemplateDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTemplateDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
