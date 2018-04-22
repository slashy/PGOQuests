import { HasPokemonPipe } from './filter-pokemon.pipe';

describe('HasPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new HasPokemonPipe();
    expect(pipe).toBeTruthy();
  });
});
