## 2️⃣ How to Create and Insert a New Element into the DOM
To add a new element to a web site, first **create it** using `document.createElement()` and **insert it** into a parent element using methods like `appendChild()`.

** Example**
```javascript
// 1. Create a new div
let newDiv = document.createElement("div");

// 2. Add text to the div
newDiv.innerText = "Hello, I am new here!";

// 3. Insert the div into the body
document.body.appendChild(newDiv);


## 3️⃣ What is Event Bubbling? How Does It Work?
**Event Bubbling** is when an event starts on a **child element** and then **moves up** to its parents elements, all the way to the documents. It means the event "bubbles up" through the DOM.

**How it Works**
- User trigger an event on a child element (like a click)
- The event run on the child first
- Then it moves up to the parents, the container and so on.



## What is Event Delegation in JavaScript? Why is it Useful?
**Event Delegation** is when you put one event listener on a parent element to handle clicks (or other events) on its child elements.

**It is useful because** 
- reduce to use multiple event listener.
- work for dynamical added elements.
- code work efficiently



## What is the difference between preventDefault() and stopPropagation() methods?
- **`preventDefault()`** prevents the browser's default action for an event and stops what the browser normally does.It controls browser behavior.
- **`stopPropagation()`**prevents the event from bubbling up to the parent elements. It controls event flow in the DOM.
