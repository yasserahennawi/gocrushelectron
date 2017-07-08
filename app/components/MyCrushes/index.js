import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import CircularImage from '../CircularImage';
import PropTypes from 'prop-types';
import CrushListItem from '../CrushListItem';
import AddCrushField from '../AddCrushField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const ListTitle = styled.h4`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 15px;
`;

const CrushList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  & > div:last-child {
    margin: 0;
  }
  // margin-bottom: 20px;
`;

const CrushRow = styled(CrushListItem)`
  margin-bottom: 10px;
`;
//
// function onCrushSubmit(event){
//   event.preventDefault();
//   console.log("Homepage", event)
//   console.log('do something: ', event);
// }

function MyCrushes({onSubmit, crushes, ...props}) {

  const listItems = crushes.map((crush, index) =>
    <CrushRow
      key={index}
      crushName= {crush.crushName}
      crushImage= {crush.crushImage}
      onDeleteClick= {crush.onDeleteClick} />
  );

  return (
      <Wrapper {...props}>
        <ListTitle>
          You have crush on:
        </ListTitle>
        <CrushList>
          {listItems}
        </CrushList>
        <AddCrushField onSubmit={(e)=>onSubmit(e)}/>
      </Wrapper>
  );
}

MyCrushes.defaultProps = {
  crushes: [
    {
      crushName: 'Romain Hoogmoed',
      crushImage: 'https://images.alphacoders.com/475/475526.jpg',
    },
    {
      crushName: 'Santiago Bernabeu',
      crushImage: 'https://images.alphacoders.com/475/475526.jpg',
    },
    {
      crushName: 'Milo Michael',
      crushImage: 'https://images.alphacoders.com/475/475526.jpg',
    }
  ]
}

export default MyCrushes;
