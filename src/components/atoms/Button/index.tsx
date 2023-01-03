import { forwardRef } from 'react';
import type { ComponentPropsWithRef, ElementType } from 'react';

type Props = Omit<ComponentPropsWithRef<'button'>, 'className'> & {
  as?: ElementType;
};

const ButtonForwarded = ({ ref, type = 'button', ...props }: Props) => {
  return (
    <button
      ref={ref}
      type={type}
      className='rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors hover:bg-blue-400'
      {...props}
    />
  );
};

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => <ButtonForwarded ref={ref} {...props} />);

Button.displayName = 'Button';
