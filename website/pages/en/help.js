/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        content:'... em breve',
        title: 'Acesso as pastas',
      },
      {
        content: '...em breve',
        title: 'Acesso ao Docs',
      },
      {
        content: "...em breve",
        title: 'Junte-se a comunidade !',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Precisa de Ajuda?</h2>
            </header>
            
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
