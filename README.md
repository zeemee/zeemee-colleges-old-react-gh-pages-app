# colleges.zeemee.com

## Setup

TODO: idiot proof this

* install Node.js
* install npm
* install create-react-app

## Environment variables

There are multiple env files:

* `.env` This is for production variables
* `.env.development` This is for local dev vars (not currently used)
* `.env.development.local` Is for your specific local dev vars and overrides `.env.development`
* `.env.test` For specs (not currently used)

Example:

`.env`

```
REACT_APP_BASE_URL=http://www.zaptack.com
```

`.env.development`

```
PORT=3001
REACT_APP_BASE_URL=http://zeemee-dev.com:3000
```

Note that `PORT` is for `npm start` but any ENV variable used in the actual React app MUST start with `REACT_APP_` 

When you run `npm start` node will know to use `.env.development.local` first then `.env.development` then `.env`. In `production` it will only use `.env`. Note that we don't have `staging` at this time. 

You can use this in the app by doing things like `<p>%REACT_APP_BASE_URL%</p>` or - in JSX:

```
var url = `${process.env.REACT_APP_BASE_URL}/bob.json`;
```

[More on this here](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## Development process

TODO: clean up

1. do work
2. test locally: `npm start` test on [http://localhost:3000/](http://localhost:3000/)
3. `git add .`
4. `git commit -m 'some meaningful message about the work'`
5. `git push origin master`
6. `npm run deploy`
7. Go to [http://colleges-test.zeemee.com/](http://colleges-test.zeemee.com/)

## Custom domain

Set up CNAME in [cloudflare](https://www.cloudflare.com/)

* colleges-test.zeemee.com -> zeemee.github.io
* change [package.json](https://github.com/zeemee/zeemee-colleges/blob/master/package.json)'s `homepage` to be `https://colleges-test.zeemee.com`
* add [public/CNAME](https://github.com/zeemee/zeemee-colleges/blob/master/public/CNAME)
* `npm run deploy`

## Links

* [react-gh-pages](https://github.com/gitname/react-gh-pages) (couldn't get this working without a custom domain)
* [react-routing](https://reactrouter.com/web/guides/quick-start) `npm install react-router-dom`
* Custom domains (see seperate section in this doc)
* [react-foundation](https://github.com/digiaonline/react-foundation) this comes with [useful components](https://github.com/digiaonline/react-foundation/tree/master/src/components) as well
