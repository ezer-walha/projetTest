import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserJobComponent } from './browser-job.component';

describe('BrowserJobComponent', () => {
  let component: BrowserJobComponent;
  let fixture: ComponentFixture<BrowserJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
