import { PokemonCard } from '.';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';

const props = {
  name: 'テスト',
  number: 1,
  imageUrl: '/path/to/image.png',
} satisfies ComponentProps<typeof PokemonCard>;

describe('PokemonCard', () => {
  it('正しく表示されること', () => {
    const { getByRole, asFragment } = render(<PokemonCard {...props} />);

    expect(
      getByRole('article', {
        name: 'テスト',
      })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
