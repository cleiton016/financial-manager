import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { WindowRef } from '@services/windowRef';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let windowRefMock: any;

  beforeEach(async () => {
    windowRefMock = {
      nativeWindow: {
        matchMedia: jest.fn().mockReturnValue({
          matches: false
        })
      }
    };

    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [ { provide: WindowRef, useValue: windowRefMock } ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
