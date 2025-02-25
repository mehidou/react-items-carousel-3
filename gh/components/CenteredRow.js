import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

const StyledRow = styled(Row).withConfig({
  shouldForwardProp: (prop) =>
    !['withMaxWidth', 'noTopPadding', 'noBottomPadding', 'noLeftPadding', 'noRightPadding'].includes(prop),
})`
  ${(props) => props.withMaxWidth && `
    max-width: 1000px;
    margin: 0 auto;
  `}
  ${(props) => !props.noTopPadding && `padding-top: 20px;`}
  ${(props) => !props.noBottomPadding && `padding-bottom: 20px;`}
  ${(props) => !props.noLeftPadding && `padding-left: 20px;`}
  ${(props) => !props.noRightPadding && `padding-right: 20px;`}
`;

export default StyledRow;
