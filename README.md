# Use xstate with Svelte

Code for blog post on [dev.to](https://dev.to). Code examples on how to use [xstate](https://xstate.js.org/)
with [Svelte](https://svelte.dev/).

## First simple example
Use xstate as a readable Svelte store and use it with the fetch example on [xtate viz](https://xstate.js.org/viz).
Just as in the visualiser, only events that are allowed within a given state drives the transitions. It does not matter
if all the buttons are clickable in the UI.

All buttons are active for demonstration purposes, and if we click `FETCH` when in the `loading` state
nothing will happen, same if we try to click `RETRY` if we're not in the `failure` state. Of course we should show cues 
of what's possible in the UI for usability, but here we didn't use any. But it would not be unthinkable that someone 
could miss disabling a button in the UI. 

## How to start

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

