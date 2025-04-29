import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantTestAngularComponent } from './enfant-test-angular.component';

describe('EnfantTestAngularComponent', () => {
  let component: EnfantTestAngularComponent;
  let fixture: ComponentFixture<EnfantTestAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfantTestAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantTestAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
