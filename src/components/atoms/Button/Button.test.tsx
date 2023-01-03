import { Button } from '.';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('正しく表示されること', () => {
    const { getByRole, asFragment } = render(<Button type='button'>click me</Button>);

    expect(getByRole('button', { name: 'click me' })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
