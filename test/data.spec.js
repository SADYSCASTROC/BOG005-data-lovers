import data from "../src/data/athletes/athletes.js";
import { dataFilter } from '../src/data.js';


describe('dataFilter', () => {
  it('is a function', () => {
    expect(typeof dataFilter).toBe('function');
  });

  it('returns `dataFilter`', () => {
    expect(dataFilter()).toBe('dataFilter');
  });
});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
