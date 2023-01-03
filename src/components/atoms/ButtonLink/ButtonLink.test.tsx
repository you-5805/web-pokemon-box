import { ButtonLink } from '.';
import { render } from '@testing-library/react';

describe('ButtonLink', () => {
  it('正しく表示されること', () => {
    const { getByRole, asFragment } = render(<ButtonLink href='/'>to Top</ButtonLink>);

    expect(getByRole('link', { name: 'to Top' })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
