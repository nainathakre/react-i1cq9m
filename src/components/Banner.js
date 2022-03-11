import React from 'react';

function Banner(props) {
  // console.log(props.data);
  const { heading, subHeading, url, btnUrl, btnText } = props.data;
  const { index } = props;
  console.log(props);
  return (
    <div className={'banner-section ' + (index % 2 !== 0 ? 'reverse' : '')}>
      <div className="banner-img-section">
        <img src={url} alt={heading} className="banner-img" />
      </div>
      <ul className="banner-info">
        <h3>{heading}</h3>
        <p>{subHeading}</p>
        <button>{btnText}</button>
      </ul>
    </div>
  );
}

export default Banner;
