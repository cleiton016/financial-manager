import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { WindowRef } from '@services/windowRef';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
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
      imports: [HeaderComponent],
      providers: [ { provide: WindowRef, useValue: windowRefMock } ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
