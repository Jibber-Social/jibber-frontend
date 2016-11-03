import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

import Footer from './common/footer';
import Header from './common/header';
import Sidebar from './common/sidebar';

import Accounts from './routes/accounts';
import Dashboard from './routes/dashboard';
import InstallCode from './routes/install_code';
import Settings from './routes/settings';
import TicketHistory from './routes/ticket_history';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="historik" component={TicketHistory} />
    <Route path="konton" component={Accounts} />
    <Route path="installationskod" component={InstallCode} />
    <Route path="installningar" component={Settings} />
  </Route>
);
