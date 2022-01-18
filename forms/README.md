## Multiple Inputs in Form

There are two types of form, one is uncontrolled form and another one is controlled form. In uncontrolled form values of the input field stored in DOM and whenever values used, DOM has to be reached and pulled out teh values of each input field.

In control, values are not stored in DOM, but stored as a state of react component and updated dynamically with user interaction.The event handler onChange used and executed a callback that updates the state values. If the input fields are multiple then multiple handleChange callbacks should be created to update the state of each input field. However, JS provides modern syntax to execute complicated work in a simpler manner.

![alt text](https://firebasestorage.googleapis.com/v0/b/birthday-react-6eca4.appspot.com/o/form_screen.jpg?alt=media&token=d3fb2437-bc67-46fc-a31e-1716c69bd3ad)
