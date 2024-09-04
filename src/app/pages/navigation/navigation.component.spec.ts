import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { WindowRef } from '@services/windowRef';
import { IconService } from '@services/icon.service';
import { of } from 'rxjs';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let windowRefMock: any;
  let iconServiceMock: any;

  beforeEach(async () => {
    iconServiceMock = {
      getIcon: jest.fn().mockImplementation(() => of('')),
    };
    
    windowRefMock = {
      nativeWindow: {
        matchMedia: jest.fn().mockReturnValue({
          matches: false
        })
      }
    };

    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [ { provide: WindowRef, useValue: windowRefMock },{ provide: IconService, useValue: iconServiceMock } ]
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
