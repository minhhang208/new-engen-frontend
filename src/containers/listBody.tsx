import React, { useState, useEffect } from "react";
import { useStore } from "react-hookstore";
import { Grid, Segment, Button } from "semantic-ui-react";
import { ColorElement, getRandomInt } from "../utils";
import "./listBody.css";

export default function ListBody() {
  const [colorList] = useStore("colorList");
  const [colors, setColors] = useState<Array<ColorElement>>([colorList]);
  const [page, setPage] = useState<number>(0);
  const [list, setDisplayList] = useState<Array<ColorElement>>(
    colors.slice(0, 10)
  );
  useEffect(() => {
      console.log(colorList);
    setColors(colorList);
    if (page * 10 >= colorList.length) {
      setPage(0);
      setDisplayList(colorList.slice(0, 10));
    } else {
      setDisplayList(colorList.slice(page * 10, (page + 1) * 10));
    }
  }, [colorList]);
  
  const pageCount = Math.ceil(colorList.length / 10);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i);
  }
  const handleChangePage = (page: number) => {
    setPage(page);
    setDisplayList(colorList.slice(page * 10, (page + 1) * 10));
  };
  const handClickColor = (color: ColorElement) => {
    location.assign(
      `${window.location.origin}/#/detail/${color.value.substring(1)}`
    );
  };
  return (
    <>
      <Grid columns={5} padded>
        {list.map(color => {
          return (
            <div
                className="color-block"
              key={`${getRandomInt(1, 1024)}${color.value}`}
              onClick={() => handClickColor(color)}
            >
              <Grid.Column stretched={true} columns="equal">
                <Segment className="color-block">
                  <Segment
                    className="color-segment"
                    style={{ backgroundColor: color.value }}
                  />
                  <Segment className="color-detail">{color.value}</Segment>
                </Segment>
              </Grid.Column>
            </div>
          );
        })}
      </Grid>
      <Grid columns={1}>
        <Button.Group className="page-button-group">
          {pages.map(i => {
            return (
              <Button
                active={i === page}
                key={`page${i}`}
                onClick={() => handleChangePage(i)}
              >
                {i + 1}
              </Button>
            );
          })}
        </Button.Group>
      </Grid>
    </>
  );
}
