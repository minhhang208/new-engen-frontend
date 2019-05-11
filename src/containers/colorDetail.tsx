import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ColorElement, getRandomInt, opacities } from "../utils";
import { Button, Grid, Segment, Table, Tab } from "semantic-ui-react";
import "./colorDetail.css";

type Props = RouteComponentProps<{color: string}>;
export default function ColorDetail(props :Props) {    
    
    const [selectOpacity, setSelectedOpacity] = useState<number>(0.2);
    const color = props.match.params.color;

    const handleBackButton = () => {
        location.assign(window.location.origin + "/#/");
    }
    const handClickColor = (opacity: number) => {
        setSelectedOpacity(opacity);
    }
    return <>        
   <Table>

        <Table.Body>
            <Table.Row>
                <Table.Cell colSpan={5} className="cell-detail">
                  <div
                    className="color-segment-detail"
                    style={{ backgroundColor: '#' + color,
                opacity: selectOpacity }}
                  />
        </Table.Cell>
        </Table.Row>
        <Table.Row>
        {opacities.map(opacity => {
          return (
              <Table.Cell key={`${getRandomInt(1, 1024)}${color}${opacity}`}
              onClick={() => handClickColor(opacity)}>
                <Segment className="color-block">
                  <Segment
                    className="color-segment"
                    style={{ backgroundColor: '#' + color,
                opacity: opacity }}
                  />
                  <Segment className="color-detail">#{color}</Segment>
                </Segment>            
            </Table.Cell>
          );
        })}
        </Table.Row>
        <Table.Row>
            <Table.Cell colSpan={5}><div>
        <Button onClick={() => handleBackButton()}>Back</Button>
        </div>
        </Table.Cell>
        </Table.Row>
        </Table.Body>
        </Table>
    </>
}