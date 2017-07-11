import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorModal from '../../components/ErrorModal';
import WelcomeHero from '../../components/WelcomeHero'
import CrushesOnMe from '../../components/CrushesOnMe'
import Card from 'material-ui/Card';
import MyCrushes from '../../components/MyCrushes'
import { connect } from 'react-redux';
import { fetchMyCrushes, fetchCrushesOnMe, addCrush, textInputChange } from '../../actions/crushes'
import { fetchSession } from '../../actions/user'

const ErrorModalContainer = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    // height: calc(100% - 180px);
    height: 100%;
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: fixed;
  `

  const HomepageErrorModal = styled(ErrorModal)`
    max-width: 500px;
    margin: auto 0;
  `

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    box-sizing-box;
    max-width: 1000px;
  `;

  const Paper = styled(Card)`
    width: 100%;
    & > div {
      width: 100%;
    }
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const WelcomeHeroWrapper = styled(WelcomeHero)`
    margin-bottom: 40px;
  `;

  const MyCrushesComponent = styled(MyCrushes)`
    @media (max-width: 850px){
      margin-bottom: 30px;
      padding-right: 0;
    }
    padding-right: 30px;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    & > div:first-child {
      margin-bottom: 0;
      margin-right: 20px;
    }
    @media (max-width: 850px){
      flex-direction: column;
      & > div:first-child {
        margin-bottom: 20px;
      }
    }
    flex-direction: row
  `;


class Homepage extends Component {

  componentWillMount() {
    localStorage.setItem('appUserID', '803192213163815')
    localStorage.setItem('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRoMCIsImFwcFVzZXJJRCI6IjgwMzE5MjIxMzE2MzgxNSJ9.e8EQ4VV7-8kC7pTxxwj6fhhtR_7MIs80kgKTElgGIeE')
    this.props.fetchSession()
    this.props.fetchMyCrushes();
    this.props.fetchCrushesOnMe();
    this.props.addCrush("sdkf");
  };

  onSubmitHandler = (values) => {
    // console.log('this', this);
    // console.log(values.crushUrl);
    this.props.addCrush(values.crushUrl);
  }

  render() {
    const {
      crush: {
        myCrushes = [],
        crushesOnMe = 0
      },
      user: {
        myInfo: myInfo = {}
      },
      // form: {
      //   addCrushForm: {
      //     values: {crushUrl: crushUrl = ''}
      //   }
      // }
    } = this.props;

    var crushes = myCrushes.map((myCrush)=>{
      return ({
        crushName: myCrush.crushDisplayName,
        crushImage: myCrush.crushPictureUrl
      })
    })

    return (
      <Wrapper>
        <Paper>
          <WelcomeHeroWrapper
            userName={myInfo.displayName}
            userImage={myInfo.pictureUrl}/>
          <ContentWrapper>
            <Paper>
              <MyCrushesComponent
                onSubmit={this.onSubmitHandler}
                crushes={crushes}/>
            </Paper>
            <Paper>
              <CrushesOnMe
                crushesNumber={crushesOnMe}/>
            </Paper>
          </ContentWrapper>
        </Paper>
      </Wrapper>
    );
  }
}
//
// function test(callback) {
//   console.log(callback());
// }
//
// const homePage = new Homepage();
// test(homePage.onSubmitHandler.bind(homePage));
//



// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    crush: state.crushReducer,
    user: state.userReducer,
    form: state.formReducer
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = {
  fetchMyCrushes: fetchMyCrushes,
  fetchCrushesOnMe: fetchCrushesOnMe,
  addCrush: addCrush,
  textInputChange: textInputChange,
  fetchSession: fetchSession
};
export default connect(mapStateToProps, matchDispatchToProps)(Homepage);
