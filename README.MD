## What is Event Delegation in JavaScript? Why is it Useful?
**Event Delegation** is when you put one event listener on a parent element to handle clicks (or other events) on its child elements.

**It is useful because** 
- reduce to use multiple event listener.
- work for dynamical added elements.
- code work efficiently


##  What is the difference between preventDefault() and stopPropagation() methods?
- **`preventDefault()`** prevents the browser's default action for an event and stops what the browser normally does.It controls browser behavior.
- **`stopPropagation()`**prevents the event from bubbling up to the parent elements. It controls event flow in the DOM.
