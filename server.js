const express = require('express');
require('dotenv').config();
const next = require('next');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const uid = require('uid-safe');

const authRoutes = require('./server/auth-routes');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    const sessionConfig = {
      secret: uid.sync(18),
      cookie: {
        maxAge: 86400 * 1000,
      },
      resave: false,
      saveUninitialized: true,
    };
    server.use(session(sessionConfig));

    const auth0Strategy = new Auth0Strategy(
      {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL,
      },
      ((accessToken, refreshToken, extraParams, profile, done) => done(null, profile)),
    );

    passport.use(auth0Strategy);
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    server.use(passport.initialize());
    server.use(passport.session());
    server.use(authRoutes);

    const restrictAccess = (req, res, then) => {
      if (!req.isAuthenticated()) return res.redirect('/login');
      then();
    };

    server.use('/', restrictAccess);

    server.get('*', handle);

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
