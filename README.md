## What?

### Concept

An app for the giving and receiving of anonymous advice.

### Tech stack

- [x] nextJS <br />
- [x] PostgreSQL<br />
- [x] prisma (to learn about an ORM for SQL)<br />
- [ ] GraphQL/Apollo (to learn about graphql) <br />
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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
