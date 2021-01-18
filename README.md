# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  Lord of the Rings Exercise

Let's build something small to reinforce what you've learned so far. We're going
to practice creating components and passing information into them.

We'll build a simple website that shows title and runtime information about the
original Lord of the Rings Trilogy.

Specifically, at the end of this lab, your solution will look like this:
![Lord of the Rings movie info](https://github.com/WDI-SEA/react_intro_global/blob/master/images/lotr.png)

### Setup
Create a new react app called `lord-of-the-rings`:

### Create A Simple Movie Component
Inside of `./src` folder, create a new React Component file called `Movie.js`.

Add some JSX to the render function so this component will be visible in
our application. Let's keep the JSX simple for now, and we'll make it more
complex once we're sure it works.

Remember, our goal is to display the movie title and
runtime information. Let's add one `<h1>` for the movie title, and a `<p>` for the runtime.


### Viewing the Component

Open `src/App.js`.

Add the `<Movie />` component just after the paragraph. Go back to the
app and see if it appears.

### Dealing with Errors
Uh oh. There's an error.

```
Failed to compile
./src/App.js
  Line 15:  'Movie' is not defined  react/jsx-no-undef
```

`'Movie'` is not defined? Ah.

One does not simply refer to components in React. In our `src/App.js`, we're saying "Display what's returned from the `Movie` component." However - we haven't told `src/Apps.js` where to find the `Movie` component! 

Add an import statement at the top of the `src/App.js` file.

Now you should see the page without the error message, and it should have the
JSX from the Movie component.


### Passing Information via Properties
We need to make the Movie component accept information so we can use it to
display different titles and runtimes. In the `src/App.js` file, add `title`, `hours`, and `minutes`
props to the `<Movie>` tag. 

We'll be able to read the value of these props from inside the component. You can name props pretty much
anything you want - but it's good practice to be descriptive!

Update the JSX in `src/Movie.js` to access and display the value of each prop we created.

Refresh the page and make sure everything works correctly.

### Reusing the Component
Once you've got props working for one component, then write two more!

In `src/App.js`, call the `<Movie />` component again with different values for the `title`, `hours` and `minutes`
properties. Display information for the complete trilogy! (If you don't know everything about Lord of the Rings off the top of your head, here it is).

title | hours | minutes
------|-------|--------
The Fellowship of the Ring | 2 | 58
The Two Towers | 2 | 59
The Return of the King | 3 | 21

# Solution
When you're finished, review the reflections below.

### Reflecting on Reusability
Components are great because they allow us to compartmentalize code and easily reuse parts we create. We simply set the value of props and the component defines how everything should be displayed.

In this instance, we factored out some redundancy of the
movie titles.
- All these movies start with `"Lord of the Rings:"`, so only the unique part is the prop.
- Similarly, we don't have to rewrite the format of the runtime information.

Building and reusing components becomes especially powerful the more complex components become.
- Imagine building a component for video search results inside YouTube.
  - The props list is huge:
    - ton of links
    - time information
    - preview images
    - options to add the result to a playlist
    - and all sorts of other things.

Building one component to rule all them all would save you a lot of time and headaches!


### Internet Dive Point
In case you want to nerd out, here are handy links to the IMDB page for each
movie:

* [Lord of the Rings: The Fellowship of the Ring](http://www.imdb.com/title/tt0120737/)
* [Lord of the Rings: The Two Towers](http://www.imdb.com/title/tt0167261/)
* [Lord of the Rings: The Return of the King](http://www.imdb.com/title/tt0167260/)

_edited from [global code-along](https://github.com/WDI-SEA/react_intro_global/blob/master/11-lotr-codealong.md)_
