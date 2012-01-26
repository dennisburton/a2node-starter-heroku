
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
    
Clone Meetup project

    git clone git://github.com/dennisburton/a2node-starter-heroku.git
    cd a2node-starter-heroku

Install Node modules required for project

    npm install

NPM installs dependencies for our project that are declared in
`package.json`. Each time we add a dependency
to `package.json` we will re-run `npm install`.

Run locally

    foreman start
    # 16:29:15 web.1     | started with pid 35445
    # 16:29:15 web.1     | Listening on 5000

Visit [http://localhost:5000/](http://localhost:5000/)

## 4. Review Node.js Project Structure

    a2node-starter-heroku
    ├── .git
    │   ├── ...
    ├── .gitignore
    ├── Procfile
    ├── README.markdown
    ├── package.json
    └── web.js

### Excercise

* Change "Hello World" to "Hello, {You}", e.g. "Hello, node monkey"
* Restart `foreman`, see your change locally
* Commit your changes
        git add web.js
        git ci -m 'personalized greeting'

## 5. Deploy!

Create new Heroku app in your account. You do this once per app.
**Important**: specifying Cedar is important. The original Heroku stack
was Ruby only.

    heroku create --stack cedar
    # optionaly: heroku create --stack cedar friendly_app_name
    # Creating sharp-rain-871... done, stack is cedar
    # http://sharp-rain-871.herokuapp.com/ |
git@heroku.com:sharp-rain-871.git
    # Git remote heroku added


Check out the placeholder app:

    heroku open

Deploy your code:

    git push heroku master
    # ...

Your app!

    heroku open
    
## 6. A little front-end

Add in `express.static(...)` for static file serving.

Exercise

* Change `Procfile` to point to `web.static.js`
* restart Foreman and test out locally
* Change the message displayed and test locally
* Deploy to heroku
* test remotely

