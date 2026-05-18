# netxjs-fsa

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Instuctions

### Quick setup

- `npm i`
- `npm i -g vercel` (ina)
- `vercel login`
- `vercel link` (don't pull environment variables now)
- `vercel env pull .env` (pull as `.env` instead of `.env.local`)
- `npm run dev`

### Other useful commands

- `npx drizzle-kit studio`

### Database migration

-

## Auth mental model (dumb)

- There is a `db` instance in `db.ts` (<https://orm.drizzle.team/docs/tutorials/drizzle-with-neon>)
- `auth.ts` uses this instance to create and export the `auth` thing, which we can use outside

## Docs

- <https://orm.drizzle.team/docs/get-started/neon-new>
