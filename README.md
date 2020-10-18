[![Screenshot-2020-10-18-at-10-13-26.png](https://i.postimg.cc/Dwr2HVdr/Screenshot-2020-10-18-at-10-13-26.png)](https://postimg.cc/YvSKLsP0)
# Manipulating the DOM

### Learning Objectives

- Be able to attach event listeners to DOM elements to respond to events
- Be able to access data from the `event` object
- Be able to use the `document` object to add information to the page by manipulating the DOM

## Brief

Your task is to create a front-end JavaScript application that allows users to input items and see them displayed in a list. Users should be able to enter values for different properties relating to the theme, and see them displayed below.

### MVP

- Create a form in HTML with inputs for relevant data
- When the form is submitted, access the data from the form in the form's submit `event` object
- Create a list in HTML
- Append the submitted data to the list
- Add a "Delete All" `<button>` which clears all of the list items from the list


### Extensions

- Refactor your code, extracting helper functions with single responsibilites to keep each function small and readable
- Experiment with adding a new form input and experimenting with a new `<input>` `type` eg. Add a [radio button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) input
- Style your application with CSS
- Add any other extension functionality that you want!

### Considerations

When you want to display a new element on the page, you will need to:

1. Access an element that is already in the DOM (`querySelector`)
2. Create a new element in the JavaScript and populate it with values (`createElement`)
3. Append the new element you have created in the JavaScript, to the element that is already in the DOM (`appendChild`)
