# Yelp Camp Europe

## THIS PROJECT IS STILL IN DEVELOPMENT

## THIS README IS A DRAFT

Yelp Camp Europe is a web application built with the MERN stack (MongoDB, Express, React, Node). It is now feature-complete with geo-restriction, user roles, user panels, sorting, pagination and a complete booking system. The original Bootstrap UI was completely replaced with React.

Yelp Camp was originally created for Colt Steele's The Web Developer Bootcamp on Udemy.

## Features

- Authentication system: register, login, logout. Use a valid e-mail address or a Google-account.
- Create, edit or remove your campgrounds. Review other's campgrounds, edit or remove your reviews.
- Cannot create a campground without an image. A campground cannot have more than 5 images.
- User roles: hosts can create campgrounds, guests can book and review them.
- You can see your campgrounds, reviews, previous or upcoming bookings, change your password and even delete your account anytime with all related information.
- Booking system. Hosts and guests also get e-mails about the bookings.
- Geo-restriction: all campgrounds are in Europe.
- Sort campgrounds by reviews, price or location. Find campgrounds on a cluster map.
- Cloudflare Turnstile is used as a Google reCaptcha alternative.

## Technologies

- Node.js: an open-source and cross-platform JavaScript runtime environment.
- Express.js: fast, unopinionated, minimalist back-end framework for Node.js.
- MongoDB: general-purpose document-based NoSQL database.
- Mongoose: a MongoDB object modeling tool designed to work in an asynchronous environment.
- EJS: embedded JavaScript templating.
- Passport.js: simple, unobtrusive authentication for Node.js.
- rate-limiter-flexible: counts and limits number of actions by key and protects from DDoS and brute force attacks at any scale.
- Cloudflare Turnstile: a free tool to replace CAPTCHAs.
- Cloudinary: used as cloud-based storage for images.
- Mapbox: Google Maps-alternative map-provider.
- React: the library for web and native user interfaces.
- Vercel: hosting provider.P

## Run it locally

1. Install [MongoDB](https://www.mongodb.com/). <em>Give more precise instructions for getting the MONGO_URL.</em>
2. Create a [Cloudinary](https://cloudinary.com/) account to get an API key and secret code.
3. Create a [Mapbox](https://www.mapbox.com/) account to get an API key.

```sh
git clone https://github.com/mihaczimartin/yelp-camp-europe.git
cd yelp-camp-europe
npm install
```

1. Create a .env file in the root of the project and add the following:

```md
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
MAPBOX_TOKEN=
MONGO_URL=
```

Run `node app.js` in the terminal within the project directory.

Then go to [localhost:8060](http://localhost:8060/).
