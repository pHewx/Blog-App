var GoogleStrategy = require("passport-google-oauth20").Strategy;
const { use } = require("passport");
const passport = require("passport");
const { Model, DataTypes } = require("sequelize");
const db = require("./models");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const user = await db.User.findOrCreate({
          where: {
            id: profile?.id,
          },
          defaults: {
            id: profile?.id,
            firstName: profile?.name.familyName,
            lastName: profile?.name.givenName,
            email: profile?.emails[0].value,
            typeLogin: profile?.provider,
          },
          raw: true,
        });

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
