import { SortproductPipe } from './sortproduct.pipe';
import { Product } from '../model/product';

describe('SortproductPipe', () => {
  it('create an instance', () => {
    const pipe = new SortproductPipe();
    expect(pipe).toBeTruthy();
  });
});

it('should sort objects by property in argument', () => {
  const pipe = new SortproductPipe();
  const data = [
    new Product('zyxw', '', '', 0, 0),
    new Product('1234', '', '', 0, 0),
    new Product('abcd', '', '', 0, 0)
  ];
  const expected = [
    new Product('1234', '', '', 0, 0),
    new Product('abcd', '', '', 0, 0),
    new Product('zyxw', '', '', 0, 0)
  ];
  expect(pipe.transform(data, 'title')).toEqual(expected);
});
