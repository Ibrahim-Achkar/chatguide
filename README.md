## What?

### Concept

An app for the giving and receiving of anonymous advice.

### Tech stack

- [x] nextJS <br />
- [x] data storage with PostgreSQL<br />
- [x] ORM with prisma<br />
- [x] API built with GraphQL/Apollo/Nexus (to learn about graphql) <br />
- [ ] AuthO - for easy authentication (can be replaced later) <br />
- [ ] Deploy to Heroku <br />

### Basic functionality

- [ ] sign up - username, password, email only <br />
- [ ] text only - no pictures, no links <br />
- [ ] you get to ask one question a day <br />
- [ ] you get to respond to one question a day <br />
- [ ] server gathers questions and randomly selects a user to answer <br />
- [ ] responding to a question opens up a temporary real time chat between asker and answerer <br />
- [ ] chat closes after a total of 5000 characters sent <br />
- [ ] chat can be closed at any time by either party <br />

### Extending functionality

- [ ] rate advice <br />
- [ ] ratings invisible but stored on server <br />
- [ ] those with higher ratings more likley to get a question served to them <br />

## Getting Started (Development)

### Install dependencies

If you have just pulled from GitHub, run yarn add

### NextJS

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Apollo & GraphQL API

An apollo server will start running on yarn dev.

To access the apollo query builder, go to [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql). This will connect to the apollo server with an up to date schema.

Because we are using Prisma as the ORM, the queries built using nexus will use the prisma connection to access the data needed for a particular request.

### GitHub

If you are working on a new feature start a new branch. Pull requests must be reviewed by one other member of the team before being merged into main.
