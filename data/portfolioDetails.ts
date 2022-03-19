export const portfolioDetails = [
    {
        "Timestamp": "29/06/2021 15:23:38",
        "Project name": "Pixel Shop",
        "Summary": "This is a photo editing application mostly built with Python libraries such as OpenCV, PIL Front built with Jinja is a web template engine. Features include Rotate, Crop Image, Image Effects, etc",
        "Lesson Learned": "I learnt a lot working with Python and using the OpenCV for image manipulation and Jinja for template rendering ",
        "Tech Stack": "Flask, Jinja2, Python, Heroku",
        "How to Run": "Visit the website",
        "Sample Login Details": "",
        "Project Purpose and Goal": "I built this project to enable me have my own personal photo editor. ",
        "Web Stack and Explanation": "Python was the choice I made to build this project based on the fact that the language already had excellent libraries for image manipulation such as opencv-python and Pillow. ",
        "Problems and Thought Process": "I started the project by making a breakdown of how I wanted the pages to be divided and what I wanted each page to contain. Then I did my research on using OpenCV and its limitations in relation to image manipulation and using filters. I also had to figure out had to create the resizable and draggable text components that would be added to the image. Simplicity,  quick responsiveness to user interactions and good UI were the most important components for me throughout the process",
        "Project Link": "https://pixelshop-app.herokuapp.com/",
        "GitHub Link": "https://github.com/udabasili/pixelshop",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/110267663-aaa9aa80-7f96-11eb-888f-eacbd0be524f.png,https://user-images.githubusercontent.com/33573587/110267661-aa111400-7f96-11eb-9877-0200d6c88777.png,https://user-images.githubusercontent.com/33573587/110267664-ab424100-7f96-11eb-8018-a798370a96c3.png"
    },
    {
        "Timestamp": "29/06/2021 15:33:07",
        "Project name": "Devine Store",
        "Summary": "This is the blueprint of a clothing store I built for a client. The data used for this application is obviously a sample to demonstrate the structural format of the application, and it simulates everything up to the point of actually making credit card payments",
        "Lesson Learned": "The most important part of the project that I learned from was the integration of Stripe payment. I had to handle the communication with Stripe customer service on behalf of the client and master the integration of the Stripe API to my application",
        "Tech Stack": "React(NextJS), styled-component, CSS Module, Mongoose",
        "How to Run": "Visit the website",
        "Sample Login Details": "Email: james@yahoo.com , Password: 1234567",
        "Project Purpose and Goal": "The client wanted to create a website for their business. It was meant to be simple without the need to have an administration section",
        "Web Stack and Explanation": "I used React JS was used for the Frontend, Express.js for the backend and Mongoose for the database. I chose to use React because of its ease of use and its great state management when incorporated with Redux. Express.js and MongoDB were chosen due to their ease of usage, security and easy incorporation with the React Frontend",
        "Problems and Thought Process": "I started off using  Writemaps and Webflow  for sitemapping and wireframing. Since the format was straightforward, I didn't spend much time on the actual design before transferring it to code. The process from authentication to final checkout is very straightforward, and you don't even need to authenticate to be able to see the list of products. I made use of Next Js due to the benefit of SSR to help SEO and the fact I could write the  backend and frontend under one umbrella",
        "Project Link": "https://devine-store.vercel.app",
        "GitHub Link": "https://github.com/udabasili/devine-store",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/106401457-93f1c000-63fa-11eb-940c-ec5d316d8348.png,https://user-images.githubusercontent.com/33573587/106401472-a53acc80-63fa-11eb-8287-19b5ec04cdfa.png,https://user-images.githubusercontent.com/33573587/106401485-ba176000-63fa-11eb-9399-4f9ce60ea006.png"
    },
    
    
    
    {
        "Timestamp": "29/06/2021 15:13:44",
        "Project name": "Invoicify",
        "Summary": "Invoicify is  the non production ready blueprint of a CMRS i built . It can used to handle invoices, manage project timelines with gantt chart, handle payment of services amongst other things        ",
        "Lesson Learned": "This project helped solidify my full stack knowledge in relation to optimizing website performance, using tailwind css and styled-component for styling,  handling states and getting real time state updates with swr, route protection, and general application management.",
        "Tech Stack": "React, Tailwind CSS, Express Js, Postgres, Sequelize, styled-component",
        "How to Run": "Visit the website",
        "Sample Login Details": "Email: james@yahoo.com, Password: 1234567",
        "Project Purpose and Goal": "The goal of this project was to build a CMRS that would be used for handling clients , projects and creating reusable invoices. This is still a project in progress so I would be integrating more features to make it more inclined to web developers. The upcoming features would be the ability to send invoices to client, improve the response time of the application, link the app with github to see code samples of the project etc",
        "Web Stack and Explanation": "React was the clear choice for this project, because of its ease of state management and the number of packages available. I made use of Firebase and Redux simultaneously, using the react-redux-firebase package to manage the application state and add listeners throughout the app",
        "Problems and Thought Process": "",
        "Project Link": "https://invoicify-app.netlify.app",
        "GitHub Link": "https://github.com/udabasili/invoicify",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/159110238-ff564830-98ca-478a-bb7c-34f6df64fc98.png,https://user-images.githubusercontent.com/33573587/159110242-ce55bdf7-8d2b-43bb-8df1-9089f1903246.png,https://user-images.githubusercontent.com/33573587/159110245-89eed196-ad28-4dc5-a700-99bdfe9332a4.png"
    },
    {
        "Timestamp": "29/06/2021 15:19:26",
        "Project name": "Cyber Groceries",
        "Summary": "This is the blueprint of an online store I built for a client. It contains both the administrator role section and public section. It simulates everything from making a purchase down to choosing between delivery and pickup",
        "Lesson Learned": "I  learned  the importance of implementing 0Auth authentication properly, making sure there were no leaks, and implementing role based security by assigning roles based on an algorithm that reads through the user's registration credentials.",
        "Tech Stack": "React, SCSS, Firebase, Node, Redux",
        "How to Run": "Visit the website",
        "Sample Login Details": "Email: user@administrator.ca, Password 123456789",
        "Project Purpose and Goal": "The client wanted to create a website for their online sales business. The general idea was for users to be able to make purchases and then get to pick between pickup and delivery, with payments made in person instead of online. Moreover, the client wanted  to have an admin section.",
        "Web Stack and Explanation": "I used React for the Front End, Express.js library for the backend and Firebase for authentication and storage. Firebase handled the authentication and storage, but I still made use of OAuth2 and JWT for authentication using Access and Refresh Token. React was important for state management and Express was great for handling conditional routing amongst other things",
        "Problems and Thought Process": "The most important part of the project was the Authentication and Authorization Flow, since there were only certain parts of the project meant for the general public. I also had to consider updating products inventory when purchases were made to notify users in case of product unavailability.",
        "Project Link": "https://cyber-groceries.herokuapp.com/",
        "GitHub Link": "https://github.com/udabasili/cyber-groceries/",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/104382903-5be71380-5505-11eb-99fe-17696b197499.png,https://user-images.githubusercontent.com/33573587/104382904-5c7faa00-5505-11eb-8fa0-5836eb2d91c2.png,https://user-images.githubusercontent.com/33573587/104382893-5a1d5000-5505-11eb-8d0c-1d7a813cb03b.png"
    },
    {
        "Timestamp": "29/06/2021 15:00:01",
        "Project name": "Web Craftmaster",
        "Summary": "Web craftmaster is a website builder that allows non-developers to customize pre-made templates that they can use to build their own websites that fall under the category of e-Commerce, blogs",
        "Lesson Learned": "This project solidified my React knowledge in relation to handling state management and updating props adequately,  using Context API  to manage global application states, and most importantly making HTML manipulation as user-friendly as possible. I spend a good amount of time making sure I have followed the best practices of state management and data manipulation",
        "Tech Stack": "React, SCSS, Firebase, Context API",
        "How to Run": "You can visit the website",
        "Project Purpose and Goal": "I have always been interested in creating a website builder that would be simple and easy to use. I would keep updating this project to add more customizable options for the users and add more website categories",
        "Web Stack and Explanation": "For this project, I used React because of its ease of use and the ability to smoothly manipulate states without needing to re-render the components each time.  I made use of Context API  to manage global application states and Firebase for storage and authentication due to the ease with which they could be used with React.",
        "Problems and Thought Process": "The main issue that I encountered was how to make elements in the templates editable, and how to download certain components of my app as HTML with the CSS and JavaScript attached. This required complex state management to display the proper HTML and CSS when exporting. I also had to design the templates would be customized as Single page apps to make them easy to use and customize",
        "Project Link": "https://web-craftmaster.netlify.app",
        "GitHub Link": "https://github.com/udabasili/web-craftmaster",
        "Screenshots or animated GIFs": "https://user-images.githubusercontent.com/33573587/123635358-f99f7800-d7f1-11eb-9b0e-43e7d60c3ddf.png,https://user-images.githubusercontent.com/33573587/123635355-f906e180-d7f1-11eb-9a4b-20043161fbc0.png"
    },
    
    
    
]