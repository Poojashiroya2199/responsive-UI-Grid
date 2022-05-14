import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Row, StyleWrapper } from './styleFormat-style';

const StyleFormat = ({bold, italic, underLine, fontSize, color, handleClick}) => {
    return (
        <StyleWrapper>
            <Row>
                <Button onClick={() => handleClick('bold', !bold)} >Bold</Button>
                <Button onClick={() => handleClick('italic', !italic)} >Italic</Button>
                <Button onClick={() => handleClick('underLine', !underLine)} >Underline</Button>
            </Row>
            <Row>
                <Input type="number" placeholder="Enter Font Size" value={fontSize} onChange={(e) => handleClick('fontSize', e.target.value)} />
                <Input placeholder="Enter color (#000000)" value={color} onChange={(e) => handleClick('color', e.target.value)} />
            </Row>
        </StyleWrapper>
    )
};

StyleFormat.propTypes = {
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underLine: PropTypes.bool,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

StyleFormat.defaultProps = {
    bold: false,
    italic: false,
    underLine: false,
    fontSize: 16,
    color: '#000000'
}

export default StyleFormat;