## Introduction
- Explained in video shared on email

## Workflow
- fork the repository
- clone your repository
- switch to a new branch
- complete the challenge
- create a PR for changes on your repository (!!do not open PR against this repository)
- add `@upforce4` as reviewer to your PR

## Preferred
- Do not use class components
- Build your finder algorithm even it's simple instead of using a library
- Do not manipulate existing DOM for highlight. Use separate component responsible for highlighting
- Consider `PlaygroundComponent` as a 3rd party code
- Do not use hardcoded selectors
- Do not over-use event listeners

## Test Plan
### Build Environment
- run application via `yarn start` or `npm start`
- open selector [page](http://localhost:3000/selector)
- on another new tab open highlight [page](http://localhost:3000)

### Expected Behavior
- [selector page] click on "Select" button
  - highlight the element which mouse is over at any time
- [selector page] click to an element while selection active
  -	disable highlighting and find a way to remember clicked element
- [highlight page] click on "Highlight" button
  - highlight last selected element
  - scroll down to this element / try to center it