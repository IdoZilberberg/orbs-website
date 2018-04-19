import React from 'react';
import favicon from './icon.ico';

export default class HTML extends React.Component {
  render() {
    return (

      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Orbs | Blockchain Infrastructure Built for Established Consumer Brands</title>
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Oswald:400,700,300,200,500" rel="stylesheet" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}