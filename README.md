# Notes

### Install the entire thing with three lines of code in the terminal:

* `express --hbs optionalname` (middeware)(cd into folder)

* `npm install`

* `npm start` (starts server)(or nodemon)


### You should already have installed...

`npm init -y` (made a json)(-y = yes to everything)

(express generator already installed with
`npm install express-generator -g` you're good until you have a different computer. just type express from now on)

(gitignore)
`npm install gitignore -g`

// telling chrome to look here for this image
<img src="/images/chin.jpg">


### You should also already have node installed...
bad idea to click download straight from website
the package installs itself into user/local/lib/bin/node

 type node in terminal. node has a REPL, access by typing node then return. it will give you >

 type: process
 will give a huge object. includes node version. to exit it:
 process.exit() it exits the node repl

*to see version:
node --version

install node (you have to have exited node):
npm install -g nodemon

install node w brew:
brew install node (did this before, skipped this step)
brew update
brew upgrade

To install or update nvm, you can use the install script using cURL (without using homebrew):

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
(https://github.com/creationix/nvm)

nvm -h
gets all the commands you can run

if node command not found, node is not installed

*install latest node version
nvm install 6.4.0(the latest version) will install it into the home directory. homebrew and nvm do not require you to use sudo

nvm to manage your version of node
(nvm use 6.4.0)

to get all the versions of node:
nvm ls -remote (didn't work?)

to give you what node installed
npm list -g

node can only run js files.
you can use it like the chrome dev tools, just
node + filename and it will run the file right in terminal

diff running node v browser
scoping rules:
browser: shared global scopes.
node: file scoping

command in node. says we want this exposed to any files that require it
module.exports = dogs;

var songs = require('./main.js');
module.exports = songs
