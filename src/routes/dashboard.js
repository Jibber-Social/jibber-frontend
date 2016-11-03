import React from 'react';

import {
  Row,
  Tab,
  Col,
  Nav,
  Icon,
  Grid,
  Form,
  Table,
  Label,
  Panel,
  Button,
  NavItem,
  Checkbox,
  Progress,
  PanelBody,
  FormGroup,
  PanelLeft,
  isBrowser,
  InputGroup,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  FormControl,
  PanelContainer,
  PanelTabContainer,
} from '@sketchpixy/rubix';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col sm={12}>
            <PanelTabContainer id='dashboard-main' defaultActiveKey="demographics">
              <Panel>
                  <PanelLeft className='bg-red fg-white panel-sm-1'>
                    <Nav bsStyle="tabs" className='plain'>
                      <NavItem eventKey="demographics">
                        <Icon bundle='fontello' glyph='chart-bar-5'/>
                      </NavItem>
                      <NavItem eventKey="social">
                        <Icon glyph='icon-feather-toggle'/>
                      </NavItem>
                      <NavItem eventKey="notes">
                        <Icon glyph='icon-fontello-note-1'/>
                      </NavItem>
                    </Nav>
                  </PanelLeft>
                  <PanelBody className='panel-sm-4' style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} collapseLeft collapseRight>
                          <Tab.Content>
                            <Tab.Pane eventKey="demographics">
                                <div> stuff1 </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="social">
                                <div> stuff2 </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="notes">
                                <div> stuff3 </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
              </Panel>
            </PanelTabContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
