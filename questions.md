# What is the difference between Component and PureComponent? give an example where it might break my app.
PureComponent by default will call shouldComponentUpdate and run a shallow comparison of props and state determining whether or not render should be invoked, but PureComponent will only do a very shallow check. It returns true if the shallow comparison for props or state fails and therefore the component should update.
The shallow check itself is a comparison for equality and when comparing objects, it does not compare their attributes - only their references are compared.

# Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
If ShouldComponentUpdate on parent returns false, this will cause any context update to be no longer propagated to child components.


# Describe 3 ways to pass information from a component to its PARENT.
1. Create a function that lets you update the parent state, then pass it on to child as a props attribute
2. Create a custom hook and use it to update the parent
3. Use React.Context

# Give 2 ways to prevent components from re-rendering.
1. For class component use the shouldComponentUpdate method or a React.PureComponent
2. For function components use React.memo() or useMemo()

# What is a fragment and why do we need it? Give an example where it might break my app.
The Fragment let us group a list of children without adding extra nodes to the DOM. For this reason it could break the styles.

# Give 3 examples of the HOC pattern.
Higher-order component is a function that takes a component and returns a new component.
1. connect(mapStateToProps, mapDispatchToProps)(Component) - react-redux
2. withRouter(Component) - react-router
3. withStyles(Component) - material-ui

# What's the difference in handling exceptions in promises, callbacks and async...await.
The difference between promises and async/await is that the callback for catch() has it's own execution contex. Await eliminates the use of callbacks in . then() and . catch(). The error handling is achieved by using the try catch block.


# How many arguments does setState take and why is it async.
It takes up to 2 arguments and is async because creates a pending state transaction


# List the steps needed to migrate a Class to Function Component.
Step 1 — Change the class with function
Step 2 - Change methods with functions
Step 3 — Adding Hooks to Classes with State
Step 4 - Adding Hooks to Classes with lifecycle methods
Step 5 - Converting PureComponent to React memo

# List a few ways styles can be used with components.
    - inline CSS
    - normal CSS
    - CSS in JS libraries
    - CSS Modules
    - Sass & SCSS

# How to render an HTML string coming from the server.

option 1

```
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
```

option 2
using third part libraries as react-render-html