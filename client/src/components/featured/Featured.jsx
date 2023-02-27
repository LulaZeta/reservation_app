import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=Tokyo,Berlin,Lisbon'
  );

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://xx.bstatic.com/xdata/images/xphoto/1182x887/191447725.jpg?k=9ef3b3f75c8f34ae1c13cd18831cfe69af91c2664c909b0bc6de05ef6b9c1dc9&o=?size=M"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Japon</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://bstatic.com/data/xphoto/1182x887/232/23282594.jpg?size=S"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Suiza</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://bstatic.com/xdata/images/xphoto/1182x887/144809298.jpg?k=48815307d2c2a45fb4873442db235dfb2a2332502c077d5bbaa999b644562c8b&o=?size=S"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rumania</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
