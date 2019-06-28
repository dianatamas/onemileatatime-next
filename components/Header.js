import Link from 'next/link';

import Button from '~components/Button';

import { colors, spacing } from '~/theme';

const Header = () => (
  <div className="header">
    <div className="logo" />
    <div className="title">ONE MILE AT A TIME</div>
    <Link href="/">
      <Button backgroundColor="white" spaceLetters borderOnHover>
        Travels
      </Button>
    </Link>
    <Link href="/login">
      <Button backgroundColor="white" color="primary" spaceLetters borderOnHover>
        Sign In
      </Button>
    </Link>
    <Link href="/logout">
      <Button backgroundColor="white" color="primary" spaceLetters borderOnHover>
        Sign Out
      </Button>
    </Link>
    <style jsx>
      {`
        .header {
            position: sticky;
            top: 0;
            display: flex;
            align-items: center;
            background-color: ${colors.white};
        }

        .logo {
            background-color: ${colors.secondary};
            width: ${spacing.large};
            height: ${spacing.large};
            margin: ${spacing.small} ${spacing.large};
        }

        .title {
            flex-grow: 1;
        }
      `}
    </style>
  </div>
);

export default Header;
