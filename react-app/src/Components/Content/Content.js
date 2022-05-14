import React, { useState } from 'react';
import StyleFormat from '../StyleFormat/styleFormat';
import { ContentWrapper, ContentTitle } from './Content-style';

const Content = ({content}) => {
   const [values, setValues] = useState({
       bold: false,
       italic: false,
       underLine: false,
       fontSize: 16,
       color: '#000000',
    });
  
   const handleClick = (property, value) => {
       const currentValues = {...values};
       currentValues[property] = value;
       setValues({...currentValues});
   };

   return (
       <ContentWrapper>
           <StyleFormat
              bold={values.bold}
              italic={values.italic}
              underLine={values.underLine}
              fontSize={parseInt(values.fontSize)}
              color={values.color}
              handleClick={handleClick}/>
           <ContentTitle
              bold={values.bold}
              italic={values.italic}
              underLine={values.underLine}
              fontSize={`${values.fontSize}px`}
              color={values.color}
            >{content || 'Hello'}</ContentTitle>
       </ContentWrapper>
   )
};

export default Content;