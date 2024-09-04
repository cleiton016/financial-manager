import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IconService } from './icon.service';

describe('IconService', () => {
  let service: IconService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IconService]
    });

    service = TestBed.inject(IconService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Teste para verificar se o serviço é criado corretamente
  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  // Teste para verificar se o método getIcon faz uma requisição HTTP GET e retorna o ícone correto
  it('deve fazer uma requisição HTTP GET e retornar o ícone correto', () => {
    const iconName = 'test-icon';
    const mockResponse = '<svg>...</svg>';

    service.getIcon(iconName).subscribe((icon) => {
      expect(icon).toBe(mockResponse);
    });

    const req = httpMock.expectOne(`assets/icons/${iconName}.svg`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  // Teste para verificar se o método getIcon lida corretamente com erros HTTP
  it('deve lidar corretamente com erros HTTP', () => {
    const iconName = 'test-icon';
    const mockError = '404 error';

    service.getIcon(iconName).subscribe(
      () => fail('deveria ter falhado com o erro 404'),
      (error) => {
        expect(error).toBe(mockError);
      }
    );

    const req = httpMock.expectOne(`assets/icons/${iconName}.svg`);
    expect(req.request.method).toBe('GET');
    req.flush(mockError, { status: 404, statusText: 'Not Found' });
  });
});