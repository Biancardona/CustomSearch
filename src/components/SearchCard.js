import React, { useState } from "react";
import { Button, Card, Dropdown, Grid, Input } from "semantic-ui-react";
import { search } from "../services/search-engine";

const SearchCard = () => {
  const options = [
    { key: "angular", text: "Angular", value: "angular" },
    { key: "css", text: "CSS", value: "css" },
  ];

  const [query, setQuery] = useState("");

  const onSearchHandler = () => {
    search(query).then(console.log);
  };

  return (
    <Card fluid>
      <Card.Content>
        <Grid columns={1}>
          <Grid.Column>
            <Input
              type="text"
              placeholder="Type the desired query..."
              fluid
              icon="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Grid.Column>
        </Grid>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Dropdown
                placeholder="Limits to URLs"
                fluid
                multiple
                selection
                options={options}
              ></Dropdown>
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                fluid
                search
                selection
                multiple
                allowAdditions
                options={options}
              />
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                fluid
                search
                selection
                multiple
                allowAdditions
                options={options}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="red">Delete</Button>
              <Button>Reset</Button>
              <Button>Save</Button>
              <Button primary onClick={onSearchHandler}>
                Search
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};
export default SearchCard;
