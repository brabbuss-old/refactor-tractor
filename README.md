# Refactor-Tractor: FitLit

In this project we refactored an existing project with an emphasis on:
- Test Driven Development
- SCSS
- Fetch requests to GET and POST
- Dry, well organized javascript code

The details of the original FitLit project are outlined in the [Turing project page](https://frontend.turing.io/projects/fitlit.html).

## Project Manager
[Will Mitchell](https://github.com/wvmitchell)

## Developers
- [Bruce Gordon](https://github.com/bruce-gordon)
- [Estelle Staffieri](https://github.com/Estaffieri)
- [Scott Brabson](https://github.com/brabbuss)

## Set Up 
After cloning down the repo, run `npm start` in your terminal. Go to `http://localhost:8080/` to view the app.

## Goals & Objectives
- Build on top of pre-existing code that you did not write and navigate someone else’s codebase
- Develop processes for working remotely and submitting pull requests to perform effective code reviews that help ensure the code is accurate and that everyone understands it
- Make network requests to API endpoints to retrieve and manipulate data
- Refactor pre-existing code and use inheritance to DRY up repetitive logic
- Ensure the app is following best practices for accessibility
- Leverage Sass to DRY up the CSS
- Incorporate Webpack to streamline the workflow process
- Leverage Chai Spies to verify that DOM manipulation is happening

## A note on class architecture
The major challenge for the students was to step into a pre-existing codebase that needed major refactoring. Initial glance at the codebase revealed excessive amounts of code in the main scripts file. The decision was made as a team to pull functionality into classes as much as possible. This involved extensive restructuring and additions to class structure. 

In an effort to code as DRY as possible and employ object inheritance as dictated by the project rubric, the decision was made to implement two parent classes - one for 'data objects' and one for the 'data repositories'. Given the heavy 'cost' of a fetch call, the decision was made to make only one GET request upon page load. The information gathered in that request would then serve to instantiate all required classes and populate all necessary information.

The demand for object inheritance provided some high hurdles, though that may have been exacerbated by unintentional overengineering - a major piece of learning from this project. To that, we have provided a diagram below to help explain the class architecture settled on and employed on the site.

<img src="https://user-images.githubusercontent.com/66697338/97934647-7d709580-1d33-11eb-8177-5c7239adf3f3.png" width="800" />
The initial fetch call grabs the raw data that details our user profiles, as well as data for each user regarding their sleep, hydration, and activity information. Once the information is gathered, it is passed into an argument instantiating a new User Repository - essentially a class object that holds onto a database of users with their own properties and methods.

<img src="https://user-images.githubusercontent.com/66697338/97934649-81041c80-1d33-11eb-8d23-8af33f9ad307.png" width="800" />
Inside of each user class object, there are three different repositories that will hold onto the data for that user - data around sleep, hydration, and activity. The data is stored inside of three distinct repositories that are actually class objects with their own properties and methods to sort and access their own data for the user when needed. Each of the data inside of those repositories are also their own class object.

<img src="https://user-images.githubusercontent.com/66697338/97934648-806b8600-1d33-11eb-9329-137eebb4b53e.png" width="800" />
Both the data class objects (sleep, hydration, activity) and the repository class objects inherit properties and methods from parent classes - for the data, the parent class Data, and for the repositories, the parent class Parent Repository.

Below is the diagram in full.

## Future Iterations
We did not successfully implement DOM testing via chai spies, although our attempts are still documented in the project testing files.  This is an area for growth in future projects.

## Successes and Growth
This project successfully:
- Reorganized existing JS classes to refactor logic and methods
- Implemented fetch requests to GET data from the api and allow users to POST data through forms that we added
- Used scss to improve and reorganize our css file
- Utilized scss to improve UX/UI
- Achieved an accessibility score of 100%

<img src="https://user-images.githubusercontent.com/66697338/97934650-81041c80-1d33-11eb-8385-ae25fcb1a93d.png" width="800" />
