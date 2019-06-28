import PropTypes from 'prop-types';

import Header from './Header';

import { colors } from '~/theme';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    {children}
    <style jsx>
      {`
        .container {
            display: flex;
            flex-direction: column;
            background-color: ${colors.light};
            height: 100vh;
        }
      `}
    </style>
    <style jsx global>
      {`
        body {
            margin: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif; 
            border-box: box-sizing;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
