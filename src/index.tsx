import * as React from "react";
import { render } from "react-dom";
import { createStore } from "react-hookstore";
import { Header, Segment, Grid, GridColumn } from "semantic-ui-react";
import ColorMenu from "./containers/colorMenu";
import ColorSearch from "./containers/colorSearch";
import Routes from "./containers/routes";
import { colorList } from "./utils";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

createStore("colorList", [colorList]);
function App() {
  return (
    <>
      <div className="App">
        <Segment>
          <Grid columns={1}>
            <Grid.Column>
              <Header as="h4" inverted color="grey" attached="top">
                <Grid>
                  <GridColumn textAlign="center" width="12">
                    NEW ENGEN
                  </GridColumn>
                  <GridColumn floated="right" width="4">
                    
                      <ColorSearch />
                    
                  </GridColumn>
                </Grid>
              </Header>
            </Grid.Column>
          </Grid>
          <Grid columns={2}>
            <Grid.Column className="menu-column">
              <ColorMenu />
            </Grid.Column>
            <Grid.Column className="content-column">
              <Routes/>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
