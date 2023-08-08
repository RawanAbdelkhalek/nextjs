 -------- HOW TO OPEN THE PROJECT -----------------
 1. Extract the zip file using your operating system's file explorer or a command-line tool.
 2. Run the following command to install the required packages
 (npm install)
 3. make sure you have React Icons and Styled Components by running 
npm install react-icons --save

a. After installing the packages, you can start the Next.js development server by running:
npm install styled-components
npm install react-icons 

NOTE: if you are using yarn replace each "npm install" with "yarn add"


 -------- HOW TO VIEW THE PROJECT -----------------
1. intiate your local server npm run dev
2. open your favourite on browerser: http://localhost:3000.


 -------- HOW THE PROJECT IS DONE-----------------

- It is a Nextjs Project with TypeScript

- in the app folder you can find the two pages (page.tsx => the home page) (fav/page.tsx => liked page)

- there are five components each have a styled component file and a logic/main component file

- the data used are in public/data.json

- routing by (useRouter hook)

- caching data is done via browser local storage

- components major functionality:
    1. Feed: retrieving data and view it as form of posts
    2. Navbar: Container of the navbar navigation
    3. NavbarButton: routing between pages (the routing is implemented by useRouter hook)
    4. PostCard: represents each post content and view it in the screen accordingly
    5. LikeButton: like or unlike the posts, intialize the local storage as empty array, adding the post to   the array or removing it from the array by (useEffect hook, useState hook, localStorage.setItem).

- fav/page.tsx : retrieving data from local storage (useEffect hook, useState hook, localStorage.getItem)., and display it on the liked page
