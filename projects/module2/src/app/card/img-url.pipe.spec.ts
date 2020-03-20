import { ImgUrlPipe } from './img-url.pipe';
import { product } from 'projects/module1/src/mocks/products';

describe('[Moдуль 2] Пайпы', () => {
  let pipe: ImgUrlPipe;
  beforeEach(() => {
    pipe = new ImgUrlPipe();
  });
  it('существование метода transform', () => {
    expect((pipe as any).transform).toBeTruthy();
  });
  it('transform должен правильно преобразовывать изображение в ссылку', () => {
    expect((pipe as any).transform((product as any).images)).toBe((product as any).images[0]?.url);
  });
});
