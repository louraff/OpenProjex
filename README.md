# OpenProjex

## Table of Contents

---

- [Description](#description)
- [Deployment Link](#deployment-link)
- [Code Installation Guide](#code-installation-guide)
- [Timeframe & Working Team](#timeframe--working-team)
- [Technologies Used](#technologies-used)
- [Brief](#brief)
- [Planning](#planning)
- [Challenges](#challenges)
- [Wins](#wins)
- [Key Learnings & Takeaways](#key-learnings--takeaways)
- [Bugs](#bugs)
- [Future Improvements](#future-improvements)

  ## Description

---

Open Projex is your one-stop platform for developers to connect, share, and find open-source projects! This is the second project I embarked on as part of my Software Engineering course at General Assembly, completed around the sixth week of our journey together.

As a community-driven web application, Open Projex leverages the MEN (MongoDB, Express.js, and Node.js) stack, implementing full CRUD (Create, Read, Update, Delete) operations. This project allowed me to apply the concepts we've been learning in a real-world context, resulting in this platform where developers can not only grow but also contribute to the expansive universe of open-source software.

![Dashboard](/public/images/readme/hero.png)
![Gateway](/public/images/readme/gateway.png)
![Dashboard scroll](/public/images/readme/scroll.gif)

## Deployment Link

---

https://open-projex.fly.dev/

## Code Installation Guide

---

To access and use the Open Projex codebase, follow these steps:

**Step 1: Clone the Repository**

Open your terminal and use the git clone command to download the repository.

```bash
git clone https://github.com/louraff/OpenProjex.git
```

**Step 2: Navigate to the Directory**

Change your current directory to the cloned repository.

```bash
cd OpenProjex
```

**Step 3: Install Dependencies**

Use the Node Package Manager (npm) to install necessary dependencies. You can do this by running the following command in your terminal:

```bash
npm install
```

**Step 4: Run the Application**

Now you're all set to run Open Projex on your local machine! Start the server using:

```bash
npm start
```

By default, the application should be running on localhost:3000 in your browser.

And that's it! You're all set up to explore the Open Projex codebase. If you have any issues or questions, please feel free to reach out. Happy coding!

## Timeframe & Working Team

---

This full-stack web application was developed over the course of a week as part of my Software Engineering coursework at General Assembly. I worked independently on this project, wearing all the hats - from database design to front-end development. While it was a solo endeavour, the knowledge and insights gained from my instructors and classmates were invaluable in the creation of this platform.

## Technologies Used

---

Open Projex was developed using a variety of technologies, libraries, and tools, which are split into categories below for a better overview.

**Backend:**

- MongoDB: The database used to store all the user and open source project data.
- Express.js: The server-side web application framework.
- Node.js: The runtime environment that executed server-side code.

**Frontend:**

- HTML: Structured the content on the platform.
- CSS: Applied custom styles for a personalised and user-friendly design.
- JavaScript (JS): Provided interactivity and created a dynamic experience on the client-side.

**Authentication:**

- OAuth 2.0: An authorisation framework that enabled this application to obtain limited access to user accounts on an HTTP service.
- JSON Web Tokens (JWT): A compact, URL-safe means of representing claims to be transferred between two parties, used in this project for securely handling user authentication.

**Development Tools:**

- VS Code: The code editor of choice for this project.
- Trello: Was a really excellent tool for project management, keeping track of tasks, and organising workflow.
- Excalidraw: Brought my ideas to life when designing the initial wireframes.
- draw.io: Helped create the Entity Relationship Diagram (ERD) for the database design.

  ## Brief

---

As part of the Software Engineering course at General Assembly, I was presented with the following brief for the development of Open Projex:

The application needed to:

- Feature at least two data entities, in addition to the User Model. This included one central functional entity and another entity connected through a One:Many or Many:Many relationships.
- Implement OAuth authentication to secure user data and sessions.
- Incorporate basic user authorisation, safeguard features that require a logged-in user (primarily data operations like Create, Update, Delete), and ensure the operations on data resources can only be performed by the user who created them.
- Deliver full CRUD (Create, Read, Update, Delete) functionality somewhere within the app's features.
- Exhibit a polished and consistent user interface that is on par with everyday apps for a familiar user experience.
- Be deployed online, in this case, we used Heroku for web hosting.

Optionally, we were also allowed to:

- Consume data from a third-party API, considering how the data from the API integrates into our database.
- Expose our own API, providing data resources in the form of JSON.

  ## Planning

---

The planning of Open Projex was a really important phase, laying the foundation for the coding and design elements to follow. One learning I took from my first project was the importance of planning and not rushing this step. Before diving into the code, I took several steps to tackle the development process.

**Sketches and Wireframes**

I started by sketching out basic UI wireframes on paper. This gave me an initial visualisation of how the different elements of the site would interact with each other and how users would navigate the platform. After sketching, I transferred my wireframe sketches into digital form using Excalidraw, which provided a more polished guide to the development process.

![Gateway wireframe](/public/images/readme/signinwireframe.png)
![Dashboard wireframe](/public/images/readme/dashwireframe.png)
![Create post wireframe](/public/images/readme/createpostwireframe.png)
![Projects wireframe](/public/images/readme/yourbookmarks.png)
![Bookmarks wireframe](/public/images/readme/yourprojects.png)

**Entity Relationship Diagram (ERD)**

To understand the relationships between the different data entities, I used draw.io to create an ERD. This diagram helped me understand how data would flow within the application, particularly in the implementation of CRUD operations.

![ERD](/public/images/readme/projexerd.png)

After speaking with my course teacher, I decided to add a one-to-many relationship between the User and Comment entities. I also didn’t need to link bookmarkedProjects in the user entity.

**Project Management and User Stories**

Trello was the hero of the planning stage, it was a really brilliant tool for organising tasks and tracking my progress. It felt very dynamic and adaptable which is something I really value in a planning tool. I mapped out user stories, represented by cards, and sorted them into categories called 'Icebox', 'MVP', and 'Completed'. This gave me a really clear overview of my project's current state, remaining tasks, and overall timeline. With each task I completed, the corresponding card was shuffled into its new home in the 'Completed' category and I enjoyed the satisfying ritual of a victory dance which wasn’t shy on the air punching.

I also maintained a 'Challenges' column in my Trello board. This helped me keep track of obstacles I encountered during the development process. Not only did it aid in problem-solving, but it also served as a learning log, documenting the difficulties I faced and how I overcame them.

![trello](/public/images/readme/trello.png)

## Challenges

---

The development of Open Projex wasn't just a walk in the park, there were a few "oh no" gasps, a couple of "why on earth" situations, and of course, the classic "aha" moments. So, here are some of these challenges that helped me grow as an engineer.

**Creating and Submitting a Post via Pop-Up Modal**

One significant technical challenge was to enable a user to create and share a post via a pop-up modal on the 'Explore' page. The approach we were taught in class was to redirect the user to a new page that would have a form, but I wanted to provide a smoother user experience so I coded a pop-up modal for the post creation.

![Post modal](/public/images/readme/postmodal.gif)

After some googling I decided to add a jQuery script to my index.ejs to hide and show the modal, submitting the form using AJAX.

Here's a look at the code:

![Jquery code](/public/images/readme/ajaxjquery.png)

However, after some guidance from my teacher, I was pointed in the direction of fetch instead of jQuery as it would yield a cleaner and more modern result.

The next day, I managed to refactor my code from jQuery/AJAX to fetch() and json.

Here's a look at the refactored code:

![fetch/json](/public/images/readme/fetchjson.png)

However, I faced a new challenge when the newly saved project would disappear after refreshing the page. After a good old game of 'find the bug,' I cracked the case - I needed to add the populate() method to the index function in my project controller.

![populate](/public/images/readme/populatemethod.png)

**Posting Form Data to the Index Page**

One of the first hurdles that gave me a bit of a runaround was an issue with posting form data to the index page. Instead of a proud presentation of the expected output, all I was getting was the user name and the underwhelming display of 'undefined'. My instinct told me to dive into detective mode to start tracing the steps of this mystery.

```javascript
async function create(req, res) {
  //...
  console.log(user);
  console.log(req.params._id);
  //...
  console.log(req.body);
  console.log(project);
  //...
}
```

Here, in the create function, I thought I'd get a little chatty with my code. Armed with console.log statements to communicate, I waited for its response. And there it was... req.params.\_id showing up as undefined and req.body appearing as just an empty object!

![terminal](/public/images/readme/terminalbefore.png)

Feeling like Sherlock Holmes in my world of code, I set out to solve the enigma. After a few minutes of pouring over my code (and some judicious searching on Stack Overflow), I discovered that the culprit was my FormData API.

```javascript
async function addNewPost(e) {
  //...
  let formData = new FormData(this);
  let object = {};

  formData.forEach(function (value, key) {
    object[key] = value;
  });

  let json = JSON.stringify(object);

  //...
}
```

In my excitement to get my form data to my Express.js app, I forgot one important thing. FormData is great for sending multipart form data, but Express.js requires a JSON object for it to parse correctly using the express.json() middleware. So, I needed to convert my FormData into a JSON object. My 'undefined' problem was solved!

```javascript

    async function addNewPost(e) {
      let formData = new FormData(this);

      let object = {};

      formData.forEach(function(value, key){
        object[key] = value;
      });

      let json = JSON.stringify(object);

      try {
        const response = await fetch('/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: json
        });
```

Lesson learned - always remember to speak in a language your app understands.

This particular hurdle was a great learning experience. It taught me that when things don't seem to go your way, it's time to sit down, have a good chat with your code, and maybe do a little detective work. After all, it's all elementary, my dear Watson!

**Deleting a Post**

The delete functionality led me straight into a 404 error page nightmare. To troubleshoot, I added console logs and discovered that the route was not being hit as expected.

![Delete post](/public/images/readme/deletepost.gif)

**Time Management and Workflow**

On the project management side, I faced challenges with time management. I wanted to incorporate the API and GitHub login that I coded into the web app, but time constraints and the need to style the page didn't allow for it. I've learned the importance of implementing a code freeze and testing period at the end of the project to avoid last-minute rushing.

Working on this project also underscored the importance of maintaining a working project on the main branch and developing new features on separate branches.

In the grand scheme of things, each challenge was just another stepping stone towards becoming a seasoned coder. Bring on the next coding adventure!

## Wins

---

**Tech Tool Triumphs**

The MEN (MongoDB, Express.js, and Node.js) stack and I have become quite the companions. I learned how to structure a robust backend, manage data with MongoDB, and use Express.js for seamless routing. Not to mention getting comfortable with Google OAuth and handling form submissions with fetch. Each function I coded, each bug I squashed, and each feature I implemented made our bond even stronger.

![Login/logout](/public/images/readme/login:logout.gif)

**Visuals**
One of the biggest wins for me in this project is just how dashing it turned out. The vision from the start was a lovechild of LinkedIn and Facebook, only swaddled in the plush blankets of open-source goodness.

Admittedly, achieving the desired look was about as straightforward as assembling flat-pack furniture with nothing but chopsticks. Think a digital 'Great British Bake Off' with less sponge and more CSS. There were layers upon layers (upon layers) of code, and there were moments when it looked about as promising as a half-baked Victoria sponge. Thankfully, the detailed wireframes were my Mary Berry, keeping me on track.

Last-minute touches like the punchy 'Open Projex' side-banner on the dashboard page were the icing on this carefully-baked digital cake, resulting in a platform that feels visually distinct and impactful.

![Dashboard scroll](/public/images/readme/scroll.gif)

## Key Learnings & Takeaways

---

**Process Power**

One significant revelation was the value of a strong planning phase. I relied heavily on Trello for organising my user stories, and that was a game-changer when it came to keeping track of all the moving parts of this project. It also allowed for the satisfaction of moving a task card to the 'Completed' category, giving me just motivation I needed to tackle the next challenge head-on.

Wireframing with Excalidraw and ERDs with draw.io added a tangible layer to my planning process. It was like having a blueprint for constructing a skyscraper. Every element had its place, every functionality its path.

**Workflow Wonders**

Working solo on this project taught me the importance of good time management and task prioritisation. I had to wear multiple hats - the coder, the debugger, the designer, and the tester. Balancing these roles was a delicate dance, but it taught me the importance of a well-structured workflow.

One hard-learned lesson was the significance of implementing a code freeze and allocating time for extensive testing.

Lastly, the golden rule of Git: always keep the main branch clean. It's like maintaining a zen garden amidst a bustling city. This experience reinforced the importance of using separate branches for developing new features.

## Bugs

---

I've listed current bugs in the app below, and I'm always open to suggestions and contributions to help iron out these issues.

- The "Create Post" functionality seems to have taken the saying "two is better than one" a bit too literally. Currently, when creating a post, the application generates two instances of the same post. It's an unexpected BOGO (Buy One Get One) deal that I'm looking into resolving.

- The "Like" functionality has a bit of a preference issue. At the moment, it only works on the very first post, and that too, only after a page reload. Definitely, something on my to-fix list.

- Open Projex was envisioned to allow GitHub login, but due to time constraints, I wasn't able to fully integrate this functionality. The app is currently more of a GitHub login ghost town, but I'm planning on breathing life into it in the future.

- The user profile page is currently under construction. Like an artist's unfinished masterpiece, it's waiting for its final few strokes. My plan is to continue working on it to provide a complete user experience.

I appreciate your understanding and patience as I continue to work on these improvements.

## Future Improvements

---

There's always room to improve and innovate, so here are a few exciting improvements and features I'm looking to incorporate down the road:

**Mobile Friendliness:** In this age of smartphones, making Open Projex mobile-friendly is a no-brainer.

**CSS Refinements:** I'll be further tightening up the CSS to ensure every element lands in just the right spot, regardless of screen size.

**Profile Page Overhaul:** I intend to roll up my sleeves and get the profile page looking up to scratch with the rest of the web app.

**GitHub API Integration:** Unleashing the full power of the GitHub API to enhance user login and populate user information would be really exciting as the app was made for developers and having your git info at your fingertips within the app would take Open Projex to the next level.

**Advanced Search & Filtering:** I am planning to create a search functionality, allowing users to filter projects by required skills and used languages.

**Project Contributions:** There will be a contributions section to a user profile which will list the projects they have contributed to because good work deserves to be showcased!

**Seamless Navigation:** I want to be able to click on a user's '@' and be taken directly to their GitHub profile. Similarly, clicking on a user's name on a post in the explore page will whisk you away to their profile.

**Personalised Profile Overview:** I aim to enhance profiles with a complete overview, including projects posted by the user and their bookmarked projects.

Every day brings new lessons and ideas, and I'm excited to see where this journey takes Open Projex. I appreciate the continued support while I make this app more beneficial and user-friendly for the open-source community.
