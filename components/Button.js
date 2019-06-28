import { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  colors, hoverColors, spacing, fontSize, fontWeight,
} from '~/theme';

const Button = ({
  backgroundColor, color, spaceLetters, borderOnHover, onClick, children,
}) => (
  <Fragment>
    <button type="button" onClick={onClick}>
      {children}
    </button>
    <style jsx>
      {`
        button {
            border: 2px solid transparent;
            padding: ${spacing.medium};
            margin: ${spacing.small};
            background-color: ${colors[backgroundColor]};
            color: ${colors[color]};
            font-weight: ${fontWeight.bold};
            font-size: ${fontSize.medium};
            letter-spacing: ${spaceLetters && '0.1em'};
            text-transform: uppercase;
            cursor: pointer;
            outline: none;
        }

        button:hover {
            background-color: ${!borderOnHover && hoverColors[backgroundColor]};
            border-bottom: ${borderOnHover && `2px solid ${colors.primary}`};
        }
      `}
    </style>
  </Fragment>
);

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(['primary', 'secondary', 'white']),
  color: PropTypes.oneOf(['black', 'white', 'primary', 'secondary']),
  spaceLetters: PropTypes.bool,
  borderOnHover: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  backgroundColor: 'primary',
  color: 'black',
  spaceLetters: false,
  borderOnHover: false,
};

export default Button;
