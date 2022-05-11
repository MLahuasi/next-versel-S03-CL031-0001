import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style:CSSProperties | undefined = {
    color: '#0070f3',
    textDecoration: 'underline'
};

interface Props {
    href: string;
    text: string;
}

export const ActiveLink:FC<Props> = ({text, href}:Props) => {
    const { asPath } = useRouter();
    // console.log(asPath);
  return (
      <Link href={href}>
          <a style={(href === asPath)?style:undefined}>{text}</a>
      </Link>
  )
}
