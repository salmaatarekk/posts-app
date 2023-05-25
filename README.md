# Project Documentation: Posts App

1.Description:
The Posts App is a social media platform that allows users to view and like posts. It features a LandingPage component that displays a list of posts and a Favorites page that shows the user's liked posts. The app uses Next.js 13 features such as layout, loading, and error indicator pages to provide a seamless user experience.

2.Features:
- Display a list of posts with images, author information, description, tags, likes, and comments.
- Allow users to like or dislike a post by clicking a heart icon
- Use context and state management to ensure that the user's liked posts persist between page reloads.
- Enable infinite scrolling of the posts using the react-infinite-scroll-component library
- Use the next/image library to optimize image loading and display
- Use the react-icons/ai library to display a heart icon for liking and disliking posts.

3.Folder Structure:
The project follows a modular structure and includes the following components.

3.1 Pages:
- Landing page (posts page): Displays posts retrieved from local storage
- Favourites page: Displays the user's liked posts

3.2 Componenets:
- NavBar Component: Displays the navigation bar at the top of the application to navigate between the Landing page (Posts page) and the Favorite Posts page.
- PostCard Component: Represents an individual post and displays its details. It includes the heart icon for toggling the favorite status of a post.
- Loading Component: Displays a spinner while waiting for data to load

4.Technologies Used:
- Next.js: A React framework for server-side rendering and building web applications.
- React: A JavaScript library for building user interfaces.
- Typescript: A typed superset of JavaScript that provides static typing capabilities.
- SCSS: A CSS preprocessor that adds features such as variables and nesting to CSS.
- react-infinite-scroll-component
- react-icons: A library that provides a set of customizable icons for React applications.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
