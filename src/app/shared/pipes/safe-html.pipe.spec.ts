import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

// Mock do DomSanitizer
class MockDomSanitizer {
  bypassSecurityTrustHtml(value: string): SafeHtml {
    return `SafeHtml(${value})` as SafeHtml;
  }
}

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SafeHtmlPipe,
        { provide: DomSanitizer, useClass: MockDomSanitizer }
      ]
    });

    pipe = TestBed.inject(SafeHtmlPipe);
  });

  // Teste para verificar se o pipe é criado com sucesso
  it('deve criar uma instância do SafeHtmlPipe', () => {
    expect(pipe).toBeTruthy();
  });

  // Teste para verificar se o método transform chama o bypassSecurityTrustHtml do DomSanitizer
  it('deve chamar bypassSecurityTrustHtml do DomSanitizer com o valor correto', () => {
    const value = '<div>Test</div>';
    const safeHtml = pipe.transform(value);
    expect(safeHtml).toBe(`SafeHtml(${value})`);
  });

  // Teste para verificar se o método transform retorna o valor seguro
  it('deve retornar o valor seguro do DomSanitizer', () => {
    const value = '<div>Test</div>';
    const safeHtml = pipe.transform(value);
    expect(safeHtml).toBe(`SafeHtml(${value})`);
  });
});