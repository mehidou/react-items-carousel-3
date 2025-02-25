import React from 'react';
import styled from 'styled-components';
import { Button, Col, Tag, Typography } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'; // ✅ Import des icônes
import JSONEditor from './JSONEditor';
import EditorViewer from './EditorViewer';
import variations from './variations';
import { createImageChildren } from './CarouselSlideItem';
import ItemsCarousel from '../../src/ItemsCarousel';
import CenteredRow from './CenteredRow';
import DemoHeader from './DemoHeader';

const Wrapper = styled.div``;

const Variations = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 40px;
`;

const Variation = styled(Tag.CheckableTag)`
  cursor: pointer;
`;

export class ItemsCarouselPlayground extends React.Component {
  state = {
    activeItemIndex: 0,
    activeVariation: variations[0],
  };

  handleChangeVariation = (variation) => {
    this.setState({
      activeItemIndex: 0,
      activeVariation: variation
    });
  };

  handleJSONChange = ({ noOfChildren, wrapperStyle, componentProps }) => {
    this.setState((prevState) => ({
      activeVariation: {
        ...prevState.activeVariation,
        state: { noOfChildren, wrapperStyle, componentProps },
      },
    }));
  };

  render() {
    const { activeVariation, activeItemIndex } = this.state;
    const { noOfChildren, wrapperStyle, componentProps } = activeVariation.state;

    const children = createImageChildren(noOfChildren);

    return (
      <Wrapper>
        <DemoHeader
          title="Playground"
          description="Play around with props to see if this library suits your needs"
        />
        <div style={wrapperStyle}>
          <ItemsCarousel
            {...componentProps}
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
            {children}
          </ItemsCarousel>
        </div>
        <CenteredRow gutter={12}>
          <Col xs={24} md={12}>
            <Typography.Title level={3}>Change props here</Typography.Title>
            <Variations>
              {variations.map((variation, index) => (
                <Variation
                  checked={variation.name === activeVariation.name}
                  key={index}
                  onChange={() => this.handleChangeVariation(variation)}
                >
                  {variation.name}
                </Variation>
              ))}
            </Variations>
            <JSONEditor
              json={{ noOfChildren, wrapperStyle, componentProps }}
              onJSONChange={this.handleJSONChange}
            />
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={3}>
              Usage <Typography.Text type="secondary">(Read-Only)</Typography.Text>
            </Typography.Title>
            <Variations />
            <EditorViewer
              noOfChildren={noOfChildren}
              wrapperStyle={wrapperStyle}
              componentProps={componentProps}
            />
          </Col>
        </CenteredRow>
      </Wrapper>
    );
  }
}

export default ItemsCarouselPlayground;
