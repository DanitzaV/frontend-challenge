import React, { Component } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


class FetchFlickr extends Component {
  constructor() {
    super();
    this.state = {
      img: []
    };
  }
  componentWillMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a99004d1160f9ade6b7ad71077813a4d&tags=lady&per_page=32&page=1&format=json&nojsoncallback=1"
    )
      .then(res => res.json())
      .then(e => {
        console.log(e);

        this.setState({ img: e.photos.photo });
      });
  }
  render() {
    return (
      <div className="App">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {this.state.img.map((e, i) => {
              return (
                <div style={{ padding: "7px" }}>
                  <img
                    key={i}
                    src={`https://c${e.farm}.staticflickr.com/${e.server}/${e.id}_${
                      e.secret
                      }_n.jpg`}
                    style={{
                      width: "100%",
                      display: "block",
                      marginBottom: "5px",
                      borderRadius: "0px"
                    }}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    )
  }
}
export default FetchFlickr;