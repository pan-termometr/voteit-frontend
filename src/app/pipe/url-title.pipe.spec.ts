import { UrlTitlePipe } from './url-title.pipe';

describe('UrlTitlePipe', () => {

  let pipe: UrlTitlePipe;

  beforeEach(() => {
    pipe = new UrlTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('replace polish characters', () => {
    const stringToTransform: string = "ąęćłóżźĄĘĆŁÓŻŹ"
    const expectedString: string = "aeclozzAECLOZZ"
    expect(pipe.transform(stringToTransform)).toEqual(expectedString);
  });

  it('replace whitespaces', () => {
    const stringToTransform: string = " -   ---"
    const expectedString: string = "-"
    expect(pipe.transform(stringToTransform)).toEqual(expectedString);
  });
});
