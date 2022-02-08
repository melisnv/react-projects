# useContext

The React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

The React Context API is stateless by default and doesn't provide a dedicated method to update the context value from consumer components.

But this can be easily implemented by integrating a state management mechanism (like useState() or useReducer() hooks), and providing an update function right in the context next to the value itself.

Using the context requires 3 steps: creating, providing, and consuming the context.
