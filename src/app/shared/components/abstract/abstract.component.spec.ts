import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractComponent } from './abstract.component';
import { WindowRef } from '@services/windowRef';

describe('AbstractComponent', () => {
  let component: AbstractComponent;
  let fixture: ComponentFixture<AbstractComponent>;
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
      imports: [AbstractComponent],
      providers: [{ provide: WindowRef, useValue: windowRefMock }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
