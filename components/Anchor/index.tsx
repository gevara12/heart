import Link from 'next/link';
import { ReactNode } from 'react';

type TAnchorProps = {
  href: string;
  children: ReactNode;
  passHref?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export function Anchor({ href, passHref, target, children }: TAnchorProps) {
  return (
    <Link href={href} passHref={passHref}>
      <S.Anchor href={href} target={target}>
        {children}
      </S.Anchor>
    </Link>
  );
}
