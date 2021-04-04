import styled, { css } from 'styled-components';

export const sizeHelper = (size, usePixels, multiply, customSize) => {
  const units = usePixels ? 'px' : 'rem';

  if (customSize) {
    return customSize * multiply + units;
  }

  switch (size) {
    case '1':
      return (usePixels ? 2 : 0.125) * multiply + units;
    case '2':
      return (usePixels ? 4 : 0.25) * multiply + units;
    case '3':
      return (usePixels ? 8 : 0.5) * multiply + units;
    case '4':
      return (usePixels ? 10 : 0.625) * multiply + units;
    case '5':
      return (usePixels ? 20 : 1.25) * multiply + units;
    case '6':
      return (usePixels ? 30 : 1.875) * multiply + units;
    case '7':
      return (usePixels ? 32 : 2) * multiply + units;
    case '8':
      return (usePixels ? 40 : 2.5) * multiply + units;
    case '9':
      return (usePixels ? 48 : 3) * multiply + units;
    case '10':
      return (usePixels ? 60 : 3.75) * multiply + units;
    case '11':
      return (usePixels ? 96 : 6) * multiply + units;
    default:
      return (usePixels ? 120 : 7.5) * multiply + units;
  }
};

export const SpaceContainer = styled.div<{
  debug?: boolean;
  mobileOnly?: boolean;
  usePixels?: boolean;
  multiply?: boolean;
  size?: string;
  customSize?: string;
}>`
  .space {
    ${(props) =>
      !props.mobileOnly &&
      css`
        width: ${sizeHelper(props.size, props.usePixels, props.multiply, props.customSize)};
        height: ${sizeHelper(props.size, props.usePixels, props.multiply, props.customSize)};
      `}
    ${(props) =>
      props.mobileOnly &&
      css`
        ${props.theme.media.phone`
      width: ${sizeHelper(props.size, props.usePixels, props.multiply, props.customSize)};
      height: ${sizeHelper(props.size, props.usePixels, props.multiply, props.customSize)};
    `}
      `}
   ${(props) =>
      props.debug &&
      css`
        background-color: magenta;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 15px;
        &:hover {
          .debug-size {
            display: block;
          }
          .debug-size-exact {
            display: block;
          }
        }
        .debug-size {
          color: red;
          display: none;
          background-color: black;
          width: 100px;
          height: 16px;
        }
        .debug-size-exact {
          color: white;
          font-size: 12px;
          display: none;
          background-color: black;
          width: 100px;
          height: 16px;
        }
      `}
  }
`;
