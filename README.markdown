
# Getting set up with node.js and Heroku

[Source Tim Taylor](https://github.com/toolbear/easy-breezy-node-heroku)

## Resources
* [GitHub](https://github.com/)
* [NVM (Node Version Manager)](https://github.com/creationix/nvm#readme)
* [NPM (Node Package Manager)](http://npmjs.org/)
* [Node](http://nodejs.org/)
* [Getting Started with Node.js on
  Heroku/Cedar](http://devcenter.heroku.com/articles/node-js)
* [Express - node web framework](http://expressjs.com/)

## 1. Install NVM
NVM - Node version manager
* nvm will allow for switching versions of node and the packages
  installed with that version.
* Heroku pins the version of node at 0.4.7.
* Current version is 0.6.8

Pre-requisites

* git
* bash
* Xcode, gcc, or other C++ compiler

Install NVM https://github.com/creationix/nvm#readme

    git clone git://github.com/creationix/nvm.git ~/.nvm
    
Add this line to `~/.bashrc` or `~/.profile` or `~/.bash_profile`

    . ~/.nvm/nvm.sh

## 2. Install Node v0.4.7

    nvm install v0.4.7
    # downloads and compiles Node
    nvm alias default v0.4.7
    nvm use v0.4.7
    node --version
    # v0.4.7

Install NPM

    curl http://npmjs.org/install.sh | sh

I needed to sudu the sh in order to write to usr/bin 

    curl http://npmjs.org/install.sh | sudo sh
    
## 2. Install Heroku CLI

Pre-requisites:

* Heroku account - https://api.heroku.com/signup
* Ruby

Download Heroku CLI

* http://devcenter.heroku.com/articles/node-js#local_workstation_setup

Login to Heroku. You only have to do this once.

    heroku login


