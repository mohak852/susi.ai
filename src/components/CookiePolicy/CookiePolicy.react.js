import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import appActions from '../../redux/actions/app';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: rgba(1, 16, 38);
  color: white;
  padding: 1rem;
  z-index: 101;
  pading-left: '40px';
`;

const Button = styled(_Button)`
  width: 7rem;
  margin: 4px;
`;

const ButtonContainer = styled.div`
  justify-content: flex-end;
  margin-top: 1rem;
  display: inline-block;
  margin-left: 30px;
`;

const CookiePolicy = ({ actions }) => {
  const hideCookiePolicy = () => {
    cookies.set('showCookiePolicy', false, { path: '/' });
    actions.hideCookiePolicy();
  };
  return (
    <Container>
      Our website uses cookies to deliver the best possible user experience, to
      help our site work, to understand how it is used. By clicking
      &quot;Accept&quot; you agree to us doing so. To know more about our
      policies click on &quot;More Info&quot; button
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={hideCookiePolicy}>
          <Link style={{ color: 'white' }} to="/privacy">
            More Info
          </Link>
        </Button>
        <Button onClick={hideCookiePolicy} variant="contained" color="primary">
          Accept
        </Button>
      </ButtonContainer>
    </Container>
  );
};

CookiePolicy.propTypes = {
  actions: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CookiePolicy);
