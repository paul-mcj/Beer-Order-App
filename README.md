# Beer Order App

<<<<<<< HEAD

## About

Many modern web sites and applications allow users to interact with items for
sale and add them to a cart, which is exactly what this
[Beer Order App](https://beer-order-app-real.vercel.app/about) imitates by:

-    Leveraging several React technologies (such as custom hooks, the context
     API, useReducer functions and React portals)
-    Importing external libraries (ie. TailwindCSS for styling, framer motion
     for animation and react-router-dom for routing)
-    Adhering to general best practices (like responsive design) in order to
     produce a realistic UX for a variety of users on a variety of screen types

It does not however connect directly to a backend database (it is purely a
front-end project that incorporates HTTP fetch requests that gather data for the
application). So, because online shopping is so prevalent in todays
technologically fueled society, I decided that I wanted to make my own version
of an online checkout. I decided to use the
[Punk API](https://punkapi.com/documentation/v2) to gather data and make the
purpose of the application about users buying craft beers, as this particular
API is always running and its documentation is straight-forward.

## Challenges and Solutions

This is by far my most complex and rewarding project to date! And while it was a
lot of fun to build I did have a lot of complications along the way, which
required some researching and tinkering with to figure out the exact logic
required.

### The Problem with CSS

In the past, I have used only pure CSS to style my front-end projects, which
ends up usually making the CSS quite cumbersome and complicated. But, I decided
I wanted to learn a modern framework that would help streamline the
implementation of CSS so I went with the very popular TailwindCSS framework
(along with DaisyUI, an additional plugin).

It took a little while to get used to the idea of styling with pure utility
classes but, now that I am comfortable with the framework I'm happy to
acknowledge that I love TailwindCSS!! Not only is the documentation in-depth and
the library easy to install with npm but, it compliments React in an efficient
manner!

Instead of having odd syntax implementations (say, with Styled Components), or
flooding each folder with a complimentary CSS module for every component (or
even worse, a single global style sheet that will produce inevitable problems),
TailwindCSS allows all component logic **and** styles to be centralized, meaning
each component takes care of itself in totality -- an amazing aspect not
possible without the ability to add utility classes directly within JSX! For me,
this means any problem with a component (whether logical or aesthetic) can be
found in one file only, allowing component issues to be easily pinpointed.

Additionally, TailwindCSS comes with some interesting out-of-the-box features
such as animations, which this project utilizes. It also allows for
customizations to its config file -- this project takes advantage of this by
implementing custom keyframe animations, screen sizes (for responsive design
considerations) and even scaling.

### React Router v6

First, I think its important to acknowledge that it is certainly possible to
alter the way data is fetched in order for the application to not encounter
errors due to repetitious data returned from the external API. However, I wanted
to showcase more react routing capabilities, so I make an effort to include the
possibility of an error occurring when fetching data upon app initialization.

That being said, one of the first complications I had came from not being able
to redirect from different component pages within the application. After
inspecting code in a context Provider component to ensure async data was not
interrupting setting legitimate values of the context state, I ended up simply
researching the issue of React router navigation and finding out that its as
simple as importing the proper component from react-router-dom and using it
directly as a conditional element. When the context condition is met,
react-router-dom takes care of the rest easily:

```javascript
 if (error) {
        return <Navigate to="/error" />;
    } else {
        return (
```

### Cart Context

I also found some more troubles with the context API specifically when trying to
update a certain property of the context object. I was updating an amount
directly in the context and not within an internal item component first, which
was causing a lot of issues keeping track of the proper quantity of items for
each item itself.

What I needed to do was update an amount outside of the context through props
before updating with the context state (by way of useReducer logic). In essence,
my logic for adding just one item at a time changed drastically when taking into
consideration props as state for each item, going from this:

```javascript
dispatch({
	type: "UPDATE_BEER_ITEM_AMOUNT",
	payload: { id: id, amount: 1 }
});
```

to this (where **currentItemAmount** is passed in as props):

```javascript
dispatch({
	type: "UPDATE_BEER_ITEM_AMOUNT",
	payload: { id: id, amount: currentItemAmount + 1 }
});
```

### Notification Component

The Notification component also gave me some difficulties with respect to
styling. This is because the component changes appearance based on props passed
in, as some props change the look out entirely (all the while needing to adhere
to responsive limitations). The most challenging part was how to deal with too
much margin for mobile displays, while simultaneously not having enough
scrolling when more room was needed.

The fix was for me to add **overflow-auto** on the surrounding div element and
dynamically check the responsive sizes to add a fixed amount of bottom margin
should props need to alter the components' look:

```javascript
<div
                className={`animate-fadeIn grid z-20 bg-neutral rounded top-24 mx-12 fixed overflow-auto ${
                    extraDataToDisplay &&
                    "bottom-24 xsm:left-10 xsm:right-10 sm:left-16 sm:right-16 tablet:left-20 tablet:right-20 lg:left-32 lg:right-32"
                } ${!extraDataToDisplay && "bottom-[384]"}
                `}
            >
```

## Improvements and Optimization

Before finalizing this application and deploying it live, I felt it was best to
review some internal logic for bug fixes or simply to optimize code.

### Code Reduction

In this review I identified a few components that were more cluttered than
necessary, and this optimized some javascript code in order to condense code
repetition. A perfect example was the main logic change from the
PaginationButton component, which was able to condense logic from this:

```javascript
const PaginationButton = ({ children, active, setCurrentPage }) => {
	if (active)
		return (
			<button
				className="btn-active btn-disabled btn btn-sm tablet:btn-lg"
				onClick={setCurrentPage.bind(null, +children)}>
				<span className="text-xs xsm:text-sm sm:text-base">
					{children}
				</span>
			</button>
		);
	else
		return (
			<button
				className="btn-ghost hover:text-primary btn btn-sm tablet:btn-lg"
				onClick={setCurrentPage.bind(null, +children)}>
				<span className="text-xs xsm:text-sm sm:text-base">
					{children}
				</span>
			</button>
		);
};
```

to this:

```javascript
const PaginationButton = ({ children, active, setCurrentPage }) => {
	let btnState;
	if (active) btnState = "btn-active btn-disabled";
	else btnState = "btn-ghost hover:text-primary";

	return (
		<button
			className={`${btnState} btn btn-sm tablet:btn-lg`}
			onClick={setCurrentPage.bind(null, +children)}>
			<span className="text-xs xsm:text-sm sm:text-base">
				{children}
			</span>
		</button>
	);
};
```

### Custom Hooks

Before I introduced the use-animation custom hook, each component that had any
element with animation requirements was individually controlled. After realizing
this is inefficient, I decided to outsource the logic to something easily
exportable via the custom hook, which internally controls its own state:

```javascript
const useAnimation = () => {
	// local state
	const [shouldAnimate, setShouldAnimate] = useState(false);

	// after 3 artificial seconds have passed, change state to allow for animation
	useEffect(() => {
		const animationTimer = setTimeout(() => {
			if (!shouldAnimate) setShouldAnimate(() => !shouldAnimate);
		}, 3000);
		return () => {
			clearTimeout(animationTimer);
		};
	}, [shouldAnimate]);

	return { shouldAnimate };
};

export default useAnimation;
```

## Conclusions and Future Implementations

I think this project is very polished, fluid, and looks professional on several
types of devices. A lot of this is due to React's amazing ecosystem which has
several fascinating technologies that help with building more complex UI
components and overall application state management.

But, this application also looks and feels smooth and sleek because it uses
additional 3rd party libraries such as TailwindCSS and framer motion. I feel
like with these modern solutions, this application truly does a nice job of
imitating real-world buy-apps.

One thing that this application does not have that I think would be a nice
addition in the future is local storage. As it stands, anything the user adds to
their cart will disappear when the page reloads. Being able to have users save
session data to persist reloads would be a nice addition, and would also be
another excuse to use another custom hooks for such storage management.

## Author

-    LinkedIn: [Paul McJannet](https://www.linkedin.com/in/paul-mcjannet)
-    # Github: [paul-mcj](https://github.com/paul-mcj)
     React app that allows users to add items to a cart

Make sure to include in app description that is potential manufacturing of an
error is part of showcasing additional react-routing skills (though obviously
logically altering fetched data in the array would suffice as well)

adding custom hooks for animation and error logic tailwindcss +cusomtization of
animations, screens, etc. portals general functional build techniques
(useEffect, state, context, etc)

in the future, adding local storage to save user session data would be a nice
addition

how i imporoved it over time: condensing code repetition (custom hooks,
<Paginatino /> component, <TextButton /> component, etc) -- show exaples with
code!
