# Hoover-Foster Black Liberation Walking Tour

This is a walking tour application developed in partnership
with [Friends of Hoover Durant Public Library](https://www.fohdpl.org/).

The content from this tour was developed by a variety of contributors,
and is mostly mirrored on/copied from [walk.ouroakland.net](https://walk.ouroakland.net/tour/black-liberation/),
a flexible walking tour creator.

This application was created with [Next.js](https://next.js.org/) and [TailwindCSS](https://tailwindcss.com/).
## Getting Started

If this is your first time running the app, [get npm](https://www.npmjs.com/get-npm) and then install dependencies with:

```bash
npm install
```

To get started developing, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.


## Code Organization

Pages can be found in the `pages` directory.

Each tour stop has a page in `pages/tour` and corresponding images and audio in the `public/places`
and `public/audio` directories, respectively.

### Mapping

Map code can be found in `components/ClientSideMap.jsx` but you may also be interested in the code
that lazily loads this client-side-only code, which lives in `components/Map.jsx`

The map code depends on two `<script>` tags in `pages/_app.jsx` - if you remove them, the app will break.
## Deployment

This app is deployed on the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
