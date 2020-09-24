This is a starter kit application using Next.Js framework.

## Technologies Used:

- Next JS bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- Material UI for Component Library
- Styled Components for styling.

## Folder Structure

Inside the src Folder

- components -> resides all the presentational/dumb components
- pages -> resides the features/module for the application
  - index.js -> home page route as '/'.
- public -> where all the static files resides.
- styles
  - globalStyles -> Global reset styles for styled components.
  - theme.js -> theme files where color properties can be accessed from.
- seo.config.js -> file where seo details are updated as Js object. (Used via next-seo package)

## Available Scripts

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
