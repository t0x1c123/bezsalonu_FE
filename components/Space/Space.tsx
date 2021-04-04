import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Space.styles';

export const Space = (props) => (
  <S.SpaceContainer {...props}>
    <div className={'space'}>
      {props.debug && <div className={'debug-size'}>{props.customSize ? 'Custom' : props.size}</div>}
      {props.debug && <div className={'debug-size-exact'}>{(S.sizeHelper(props.size, props.usePixels, props.multiply, props.customSize))}</div>}
    </div>
  </S.SpaceContainer>
);

Space.propTypes = {
  size: PropTypes.oneOf([
    '1', // 0.125rem (2px)
    '2', // 0.25rem (4px)
    '3', // 0.5rem (8px)
    '4', // 0.625 (10px) -- lowest for wizards
    '5', // 1.25rem (20px)
    '6', // 1.875rem (30px)
    '7', // 2rem (32px)
    '8', // 2.5rem (40px)
    '9', // 3rem (48px)
    '10', // 3.75rem (60px)
    '11', // 6rem (96px)
    '12', // 7.5rem (120px)
  ]),
  customSize: PropTypes.number,
  debug: PropTypes.bool,
  usePixels: PropTypes.bool,
  multiply: PropTypes.number,
  mobileOnly: PropTypes.bool,
};

Space.defaultProps = {
  debug: false,
  usePixels: false,
  multiply: 1,
  customSize: null,
  mobileOnly: false,
};
