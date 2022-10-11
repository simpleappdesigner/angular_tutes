import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracttweetsComponent } from './extracttweets.component';

describe('ExtracttweetsComponent', () => {
  let component: ExtracttweetsComponent;
  let fixture: ComponentFixture<ExtracttweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtracttweetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtracttweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
