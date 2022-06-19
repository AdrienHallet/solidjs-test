import type { Component } from 'solid-js';


const App: Component = () => {
  return (
    <div>
      <p>Hello world!</p>
      <MyComponent name="test"></MyComponent>
    </div>
  );
};

function MyComponent(props: any) {
  return <p>{props.name}</p>
}

export default App;
