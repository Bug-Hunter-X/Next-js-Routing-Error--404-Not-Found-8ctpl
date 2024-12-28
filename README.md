# Next.js Routing Bug
This repository demonstrates a common routing error in Next.js applications and its solution.

## Description
The bug is caused by an incorrect path specified in the `router.push()` method within the `pages/about.js` component.  Attempting to navigate to a non-existent route results in a 404 error.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Click the "Go to Contact Page" button.  You will receive a 404 error because `/contact` is not defined.

## Solution
The solution involves verifying the existence and correctness of the target route before attempting to navigate.

## Files
* `about.js`:  The component demonstrating the buggy code.
* `aboutSolution.js`: The corrected component with the solution.
