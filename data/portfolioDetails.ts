export const portfolioDetails = [{
        "Timestamp": "29/06/2021 15:00:01",
        "Project name": "Web Craftmaster",
        "Summary": "Web craftmaster is a website builder that allows non developers to customize pre-made templates that they can use to built their own websites that fall under the category of e-Commerce, blogs",
        "Lesson Learned": "This project  solidified my React knowledge in relation to handling state managements and updating props adequately,  using Context API  to manage global application states and mostly importantly making HTML manipulation as user-friendly as possible. I spend a good amount of time making sure I was followed the best practices of state management and data manipulation",
        "Tech Stack": "React, SCSS, Firebase, Context API",
        "How to Run": "You can visit the website",
        "Sample Login Details": "Email: john@yahoo.com, password: 111111",
        "Project Purpose and Goal": "I have always been interested in building my own builder that would be simple and easy to use. I would keep updating this project to add more customizable options for the users and add more website categories",
        "Web Stack and Explanation": "For this project, I used React  because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages.  I made  use of Context API  to manage global application states and Firebase for storage and authentication due to the ease with which they could be incorporated into React.",
        "Problems and Thought Process": "The main issue that I had to tackle was making elements in the templates editable by the user, and also being able to download certain components of my app as HTML with its CSS and JavaScript attached. This required complex state management in order to display the proper HTML and CSS when exporting. I also had to design the templates would be customized as Single page apps to make them easy to use and customize",
        "Project Link": "https://web-craftmaster.netlify.app",
        "GitHub Link": "https://github.com/udabasili/web-craftmaster",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/123635362-fa380e80-d7f1-11eb-9a9f-86319fd42e33.png,https://user-images.githubusercontent.com/33573587/123635358-f99f7800-d7f1-11eb-9b0e-43e7d60c3ddf.png,https://user-images.githubusercontent.com/33573587/123635355-f906e180-d7f1-11eb-9a4b-20043161fbc0.png"
    },
    {
        "Timestamp": "29/06/2021 15:13:44",
        "Project name": "Social Bunch",
        "Summary": "Social Bunch is the blueprint of a  social media application I built for a client. Since this was just the blueprint,  several changes were made to the final product and tests were run, but this app still contains the main functionalities of the final one.",
        "Lesson Learned": "This project helped to solidify my React knowledge in relation to handling states, route protection and general application management. This was a large code base to manage and incorporate react-redux-firebase into, so it was a great experience for me",
        "Tech Stack": "React, SCSS, Firebase",
        "How to Run": "Visit the website",
        "Sample Login Details": "Email: user@yahoo.com, Password: Type 1 9 times; Email: test@yahoo.com, Password: Type 1 9 times",
        "Project Purpose and Goal": "The Client required a social media application that would be used within a niche group of local natives. The application was to mimic a real social media application with real time notifications and updates when new users join, posts are added or modified amongst other things",
        "Web Stack and Explanation": "React was the clear choice for this project, because of its ease of state management and the amount of packages available. I made use of Firebase and Redux simultaneously, using the react-redux-firebase package to manage the application state and add listeners throughout the app",
        "Problems and Thought Process": "Incorporating the  react-redux-firebase package to listen for real time changes and handle users online status was the most complex part of this process, I needed to update the states for all users when there were changes made to the groups, users, posts, messages etc. This required complex state management to only make the right modifications and handle online status for login, logouts and browser focus",
        "Project Link": "https://socialbunch.netlify.app/",
        "GitHub Link": "https://github.com/udabasili/social-bunch",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/113302683-b4dd7100-92d6-11eb-9846-bf9d19cfd632.png,https://user-images.githubusercontent.com/33573587/113302681-b4dd7100-92d6-11eb-8eef-d611b994cbd6.png,https://user-images.githubusercontent.com/33573587/113302678-b3ac4400-92d6-11eb-99bd-afeb96af633d.png"
    },
    {
        "Timestamp": "29/06/2021 15:19:26",
        "Project name": "Cyber Groceries",
        "Summary": "This is the blueprint of an online store I built for a client. It contains both the administrator role section and public section. It simulates everything from making a purchase down to choosing between delivery and pickup",
        "Lesson Learned": "I  learned  the importance of implementing 0Auth authentication properly, making sure there were no leaks, and implementing role based security by assigning roles based on an algorithm that reads through the user's registration credentials.",
        "Tech Stack": "React, SCSS, Firebase, Node, Redux",
        "How to Run": "Visit the website",
        "Sample Login Details": "Email: user@administrator.ca, Password 123456789",
        "Project Purpose and Goal": "The client wanted to create a website for their marijuana business. The general idea was for users to be able to make purchases and then get to pick between pickup and delivery, with payments made in person instead of online. Moreover, the client wanted  to have an admin section.",
        "Web Stack and Explanation": "I used React for the Front End, Express.js library for the backend and Firebase for authentication and storage. Firebase handled the authentication and storage, but I still made use of OAuth2 and JWT for authentication using Access and Refresh Token. React was important for state management and Express was great for handling conditional routing amongst other things",
        "Problems and Thought Process": "The most important part of the project was the Authentication and Authorization Flow, since there were only certain parts of the project meant for the general public. I also had to consider updating products inventory when purchases were made to notify users in case of product unavailability.",
        "Project Link": "https://cyber-groceries.herokuapp.com/",
        "GitHub Link": "https://github.com/udabasili/cyber-groceries/",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/104382903-5be71380-5505-11eb-99fe-17696b197499.png,https://user-images.githubusercontent.com/33573587/104382904-5c7faa00-5505-11eb-8fa0-5836eb2d91c2.png,https://user-images.githubusercontent.com/33573587/104382893-5a1d5000-5505-11eb-8d0c-1d7a813cb03b.png"
    },
    {
        "Timestamp": "29/06/2021 15:23:38",
        "Project name": "Flight Finder",
        "Summary": "This was a personal project template I made that is used for making reservations for flights, hotels, cars and places",
        "Lesson Learned": "This was  an interesting experience in understanding the general format that booking services use. This project has no backend, storage nor payment method attached, so it is just the User Interface that I was concerned about. I plan on making more updates the future to incorporate storage and a backend",
        "Tech Stack": "React, SCSS, Redux",
        "How to Run": "Visit the website",
        "Sample Login Details": "",
        "Project Purpose and Goal": "This was just a project I built in my free time with the goal of selling the template",
        "Web Stack and Explanation": "React was the choice of the JavaScript library here because I wanted to incorporate Redux to handle state throughout the application and React works so well",
        "Problems and Thought Process": "I wanted to capture the complete flow of information for the project, so I had to consider both the type of reservation the user would be making and filter values the user would be picking within each criterion. I used Webflow and Writemaps to create the sitemapping and wireframing before committing anything to code",
        "Project Link": "https://flight-finder.netlify.app/",
        "GitHub Link": "https://github.com/udabasili/flight-finder",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/107160335-fce1b680-696b-11eb-9114-744c6cca6f0f.png,https://user-images.githubusercontent.com/33573587/107160627-c6a53680-696d-11eb-8563-7006fc4bb60b.png,https://user-images.githubusercontent.com/33573587/107160702-3ddaca80-696e-11eb-8efd-f4ec13313e48.png"
    },
    {
        "Timestamp": "29/06/2021 15:33:07",
        "Project name": "Top Fashion",
        "Summary": "This is the blueprint of a clothing store I built for a client. The data used for this application is obviously a sample to demonstrate the structural format of the application, and it simulates everything up to the point of actually making credit card payments",
        "Lesson Learned": "The most important part of the project that I learned from was the integration of Stripe payment. I had to handle the communication with Stripe customer service on behalf of the client and master the integration of the Stripe API to my application",
        "Tech Stack": "React, SCSS, Node, Redux",
        "How to Run": "Visit the website",
        "Sample Login Details": "Email: test@yahoo.com, Password: Typing 1 8 times",
        "Project Purpose and Goal": "The client wanted to create a website for their business. It was meant to be simple without the need to have an administration section",
        "Web Stack and Explanation": "I used React JS was used for the Frontend, Express.js for the backend and Mongoose for the database. I chose to use React because of its ease of use and its great state management when incorporated with Redux. Express.js and MongoDB were chosen due to their ease of usage, security and easy incorporation with the React Frontend",
        "Problems and Thought Process": "I started off using  Writemaps and Webflow  for sitemapping and wireframing. Since the format was straightforward, I didn't spend much time on the actual design before transferring it to code. The process from authentication to final checkout is very straightforward, and you don't even need to authenticate to be able to see the list of products.",
        "Project Link": "https://top-fashion.herokuapp.com/",
        "GitHub Link": "https://github.com/udabasili/topfashion",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/106401457-93f1c000-63fa-11eb-940c-ec5d316d8348.png,https://user-images.githubusercontent.com/33573587/106401472-a53acc80-63fa-11eb-8287-19b5ec04cdfa.png,https://user-images.githubusercontent.com/33573587/106401485-ba176000-63fa-11eb-9399-4f9ce60ea006.png"
    }
]