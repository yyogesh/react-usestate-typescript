import React, { useRef, useState, useEffect } from 'react';
import './App.css';

// const Heading = ({ title }: { title: string }) => <h2>{title}</h2>

const Heading: React.FC<{ title: string }> = ({ title }) => <h2>{title}</h2>

// const Box = ({ children }: { children: React.ReactNode }) => <div className="box">{children}</div>

const Box: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => <div className="box">{children}</div>


interface ListItem {
  items: string[];
  itemClick?: (item: string) => void;
}

const List: React.FC<ListItem> = ({ items, itemClick }) => {
  return <ul>
    {
      items.map((item, index) => <li onClick={() => itemClick?.(item)} key={index}>{item}</li>)
    }
  </ul>
}

interface PersonProps {
  name: string;
  age: number;
  hobbies: Array<string>;
  isCool: boolean;
}

function App() {
  const inputEl = useRef<HTMLInputElement>(null);

  // Boolean type
  const [isCool] = useState<boolean>(true);
  // String type
  const [name] = React.useState<string>('Ruben');

  // Number type
  const [age] = React.useState<number>(28);

  // Null or undefined
  const [random] = React.useState<null | undefined>();

  // Array of string 
  const [hobbies] = React.useState<Array<string>>(['soccer', 'cooking', 'code']);
  // Custom interface
  const [person] = React.useState<PersonProps>({
    isCool,
    name,
    age,
    hobbies
  });

  const itemClick = (item: string) => {
    console.log(item);
  }
  const addNewTodo = () => {
    console.log(inputEl.current?.value);
  }

  useEffect(() => {
    document.title = "Ruben's page";
  }, [])

  console.log('render');

  return (
    <div className="App">
      <Heading title="Todos" />
      <Box>
        this is one of todos app
        <List items={['study', 'reading book']} itemClick={itemClick} />
      </Box>
      <div>
        <input ref={inputEl} type={'text'} />
        <button onClick={addNewTodo}>Add</button>
      </div>
    </div >
  );
}

export default App;
