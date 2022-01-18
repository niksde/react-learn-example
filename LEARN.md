what is imperative and declarative?
//Declarative For Searching element from an array
```
  array.find(item => item === key)
```
```
class Artist extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>)
  }
}
```
---
```
function addArtistNameToBody() {
  const bodyTag = document.querySelector('body')
  const divTag = document.createElement('div')
  let h1Tag = document.createElement('h1')
  h1Tag.innerText = "Mitski"
  divTag.append(h1Tag)
  bodyTag.append(divTag)
}
```
```
def imperative_search(array, item)
  for i in array do
    if i == item
      return item
    end
  end
  return false
end
```


DOM manipulation without react

React - 
Example TODO - 

- what is state?
 state is data required by the UI component. 
 local or props passed from parent

- what are life cycle methods? -> 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
These functions are used to perform UI modification. 
Functional components has hooks and not life cycle methods. Relate method with hooks

- what is component mounting/unmounting? - 
 * "mounting" (adding nodes to the DOM),
 * "unmounting" (removing them from the DOM), 
 * "updating" (making changes to nodes already in the DOM).

- what is event handling?  - on each html tag there are event handlers like onClick, onChange, onMouseEnter, etc. Event handler is call function which is getting called by html element whenever the event is emited.

- what is state lifting? - taking state from child to parent so it can be given as a prop to another child component of the parent. 
Also state is not lost when child componet unmounts.

- what is props? - passing data or a function from parent component to child component. You can pass another component as a prop.
children prop is like this -
```
<PComponent>
<CComponent/>
</PComponent>
```

--x-- completed

- what is controlled/uncontrolled components?
* controlled - All props from parent - input
* uncontrolled - component maintance its own state and parent cannot directly modify that state. 

- why key is needed?
Keys help React identify which items have changed, are added, or are removed. 
Keys should be given to the elements inside the array to give the elements a stable identity:

- react pattern? - HOC (with), custom hooks (use)

- what is real DOM and virtual DOM?
virtual DOM is js object use to modify Real DOM if there is any change. it uses Diffing algorithm to check the change

react hooks -
- useState - call set function after timeout or promise and unmount the component.
solution isMounted
- useEffect - write event handler -
useEffect not allowed inside condition. 
Sequence is disturbed. 
React always searches hooks sequenctially.

https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component

Clean up -> 
- useRef -  it can be attached to html element or else you need to use ForwardRef
- passing data and event handlers through components

example - react focus is lost.
https://stackoverflow.com/questions/22573494/react-js-input-losing-focus-when-rerendering