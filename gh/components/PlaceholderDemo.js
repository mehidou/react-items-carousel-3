import React from 'react';
import styled from 'styled-components';
import { Button, Typography, Col } from 'antd';
import { RightOutlined, LeftOutlined, LoadingOutlined } from '@ant-design/icons'; // ✅ Import des icônes
import ItemsCarousel from '../../src/ItemsCarousel';
import { createImageChildren, PlaceholderItem } from './CarouselSlideItem';
import DemoHeader from './DemoHeader';
import EditorViewer from './EditorViewer';
import CenteredRow from './CenteredRow';

const Wrapper = styled.div``;

export class PlaceholderDemo extends React.Component {
  state = {
    activeItemIndex: 0,
    isLoading: true,
  };

  handleLoading = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading, activeItemIndex } = this.state;
    const noOfChildren = 8;
    const children = createImageChildren(noOfChildren);

    const componentProps = {
      enablePlaceholder: true,
      numberOfPlaceholderItems: 3,
      numberOfCards: 3, // ✅ Correction de "numberOfCars" -> "numberOfCards"
      gutter: 12,
      slidesToScroll: 2,
      chevronwidth: 60,
      outsidechevron: true,
      showSlither: false,
      firstAndLastGutter: false,
    };

    const wrapperStyle = {
      padding: '0 60px',
      maxWidth: 1000,
      margin: '0 auto'
    };

    return (
      <Wrapper>
        <DemoHeader
          title="With Placeholder"
          description="Useful when fetching carousel items from API"
        />
        <div style={wrapperStyle}>
          <ItemsCarousel
            {...componentProps}
            placeholderItem={<PlaceholderItem />}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={(value) => this.setState({ activeItemIndex: value })}
            rightChevron={
              <Button shape="circle">
                <RightOutlined /> {/* ✅ Icône corrigée */}
              </Button>
            }
            leftChevron={
              <Button shape="circle">
                <LeftOutlined /> {/* ✅ Icône corrigée */}
              </Button>
            }
          >
            {isLoading ? [] : children}
          </ItemsCarousel>
        </div>

        {isLoading && (
          <CenteredRow withMaxWidth justify="center" type="flex">
            <Col>
              <Button onClick={this.handleLoading}>
                <LoadingOutlined style={{ marginRight: 10 }} /> {/* ✅ Icône corrigée */}
                Click me to finish loading
              </Button>
            </Col>
          </CenteredRow>
        )}

        <CenteredRow withMaxWidth>
          <Col span={24}>
            <EditorViewer
              wrapperStyle={wrapperStyle}
              componentProps={componentProps}
              noOfChildren={noOfChildren}
            />
          </Col>
        </CenteredRow>
      </Wrapper>
    );
  }
}

export default PlaceholderDemo;
