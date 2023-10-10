import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePanelComponent } from './toggle-panel.component';

describe('TogglePanelComponent', () => {
  let component: TogglePanelComponent;
  let fixture: ComponentFixture<TogglePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TogglePanelComponent]
    });
    fixture = TestBed.createComponent(TogglePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
