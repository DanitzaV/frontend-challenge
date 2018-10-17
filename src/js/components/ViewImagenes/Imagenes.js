import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './Imagenes.css'



class FetchFlickr extends Component {
  constructor() {
    super();
    this.state = {
      img: [],
      hasMoreItems: false,
      page: 1,
    };
    this.loadImgs();
  }

  loadImgs() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a99004d1160f9ade6b7ad71077813a4d&tags=lady&per_page=32&page=${this.state.page}&format=json&nojsoncallback=1`
    )
      .then(res => res.json())
      .then(e => {
        console.log(e);
        let stateImg = this.state.img;
        e.photos.photo.map((track) => {
          stateImg.push(track);
        });
        this.setState({ hasMoreItems: true, page: this.state.page + 1 });
      });
  }

  render() {
    const loader = <h2>Cargando...</h2>;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadImgs.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={loader}>
        <ResponsiveMasonry>
          <Masonry>
            {this.state.img.map((e, i) => {
              return (
                <div style={{ padding: "7px" }}>
                  <img
                    key={i}
                    style={{
                      width: "100%",
                      display: "block",
                      marginBottom: "5px",
                    }}
                    src={`https://c${e.farm}.staticflickr.com/${e.server}/${e.id}_${
                      e.secret
                      }_n.jpg`}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>

    )
  }
}
export default FetchFlickr;