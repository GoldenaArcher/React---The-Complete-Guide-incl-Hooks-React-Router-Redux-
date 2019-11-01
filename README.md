Course from Udemy: [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8090848#overview)

# Few Modifications I made

1. The `.Close` under `SideDrawer.module.css` was changed from `transform: translateX(-100);` to `transform: translateX(-100%);`, as without `%` the functionality does not work properly.

2. The `Modal` component was not visible on the page, yet when I try to click the `More` and `Less` button, it affects the button as it floats above the buttons. So I add `display: none` in the css, and use `className` to control it so it works better for me now.