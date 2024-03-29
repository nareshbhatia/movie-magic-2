# Movie Magic 2

A sample application to demonstrate the use of basic UI components such as
buttons, forms and lists.

Live demo: https://movie-magic-2-movie-magic-nextjs.vercel.app/

### Home Page

![Home Page](assets/home.png)

### Sign In Form

![Home Page](assets/signin.png)

### Top 10 Movies

![Top 10 Movies](assets/top-10-movies.png)

Here's the component hierarchy for the "Top 10 Movies" page. Note how the client
and server components are interleaved.

![Component Hierarchy](assets/top-10-movies-component-hierarchy.png)

## Building Movie Magic 2

### Development Build

```shell
# Run ci in the root directory to install dependencies
npm ci

# Run a full build to make sure libraries are available to the apps
npm run build

# Run the apps
npm run dev
```

Open a browser window at http://localhost:3000/ to see app.

1. Click `Sign In` on the home page to sign in.
2. Type in any email address and password on the sign-in page. The values don't
   matter. They are not checked. Click on the `Sign in` button.
3. You are redirected to the "Top 10 Movies" page. Click on the avatar in the
   header and select "Sign out" from the drop-down menu. You will be signed out
   and redirected to the home page.

Note that you can bypass the login flow to see the "Top 10 Movies" page
directly. Just point your browser to http://localhost:3000/top-10-movies.

> Note: Do not run `npm install` or `npm ci` in any of the subdirectories. It
> will break the build. There should be only one `package-lock.json` file in the
> entire repo (at the root).

### Static Build

This repo contains a slightly modified version of movie-magic-2 that is rendered
completely client-side (CSR). This version is located at
`apps/movie-magic-nextjs-static-build`. Here are the modifications:

1. Changed environment variable `API_URL` to `NEXT_PUBLIC_API_URL` so that it
   can be accessed from client-side.
2. Changed `Top10MoviesList` to be a client component.
3. Removed async function `getMovies()` (async/await can't be used in client
   components)
4. Replace with `useMovies` hook which runs on client side.
4. Changed `next.config.js` to create a static build (`output: 'export'`). This
   generates a static build in the `out` directory. For details see
   [Next.js docs](https://beta.nextjs.org/docs/configuring/static-export).

This version can be deployed and hosted on any web server that can serve
HTML/CSS/JS static assets. Here's how to build & deploy:

```shell
npm ci
npm run build
npx serve@latest apps/movie-magic-nextjs-static-build/out
```
