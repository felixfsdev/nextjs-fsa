# netxjs-fsa

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Instuctions

`npm i`, `npm run dev`, visit <http://localhost:3000/>.

## Mental model (dumb)

- There is a `db` instance in `db.ts` (<https://orm.drizzle.team/docs/tutorials/drizzle-with-neon>)
- `auth.ts` uses this instance to create and export the `auth` thing, which we can use outside
