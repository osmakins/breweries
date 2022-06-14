import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import Details from './Details';

const Breweries = ({ breweries }) => {

  const [filter, setFilter] = useState("");
  const handleSearch = (e) => setFilter(e.target.value);

  const displayBreweries = filter ? breweries.filter(brewery => new RegExp(filter, "i").test(brewery.name)) : breweries

  return (
    <>
      <input className="input" name="query" placeholder="Search brewery name" onChange={handleSearch} />
      <div className="container">
        <div className='row p-3'>
          {displayBreweries.map(brewery => <Card key={brewery.id} style={{ width: '18rem', margin: '.5em' }}>
            <Card.Body>
              <Card.Title><h1>{brewery.name}</h1></Card.Title>
              <Card.Text>
                <strong>Brewery Type:</strong> {brewery.brewery_type}
              </Card.Text>
              <Card.Text>
                <strong> Brewery City:</strong> {brewery.city}
              </Card.Text>

              <Details brewery={brewery} />
            </Card.Body>
          </Card>)}
        </div>
      </div>
    </>
  );
}

export default Breweries;