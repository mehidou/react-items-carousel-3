import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Col } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ItemsCarousel from '../../src/ItemsCarousel';
import { createImageChildren } from './CarouselSlideItem';

const noOfItems = 7;
const noOfCards = 2;
const chevronwidth = 60;

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const carouselItems = createImageChildren(noOfItems);

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Wrapper>
      <ItemsCarousel
        infiniteLoop
        gutter={12}
        numberOfCards={noOfCards}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        rightChevron={
          <Button shape="circle">
            <RightOutlined />
          </Button>
        }
        leftChevron={
          <Button shape="circle">
            <LeftOutlined />
          </Button>
        }
        chevronwidth={chevronwidth}
        children={carouselItems}
      />
    </Wrapper>
  );
};
