import React, { useEffect, useState } from 'react';
import NamesListComponent from './NamesListComponent'
import {User, Name} from '../types'


const AutoCompleteComponent: React.FC = ():JSX.Element => {

  const [names, setNames] = useState<Name[] | []>([])
  const [filteredNames, setFilteredNames] = useState<Name[] | []>([]);
  const [activeNameIndex, setActiveNameIndex] = useState<number>(0);
  const [showNames, setShowNames] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async (): Promise<void> => {
    fetch('https://randomuser.me/api/?results=100').then(res => res.json()).then(data => {
      const names = data.results.map((user: User) => user.name.first + ' ' + user.name.last)
      setNames(names)
    })
  }

  const filterNames = async (userInput: string): Promise<Name[] | []> => {
      return new Promise((resolve, reject) => {
          const filteredNames: Name[] | [] = names.filter(
            (name: string) =>
              name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );
          if (filteredNames) {
            resolve(filteredNames)
          }
          reject(new Error('Unable to filter the user names'))
      
      })
  }

  const onAutoComplete = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const userInput = e.target.value;


    const filteredNames = await filterNames(userInput)

    setInputValue(userInput);
    setFilteredNames(filteredNames);
    setActiveNameIndex(0);
    setShowNames(true);
  }

  const onSelect = (e: React.MouseEvent<HTMLElement>): void => {
    setFilteredNames([]);
    const targetEl = e.target as HTMLElement;
    setInputValue(targetEl.innerText);
    setActiveNameIndex(0);
    setShowNames(false);
  };

  const onKeyDown = (e: React.KeyboardEvent): void => {
      const code :string = e.key;
  
      if (code === 'Enter') {
        setInputValue(filteredNames[activeNameIndex])
        setActiveNameIndex(0)
        setShowNames(false)
       
      } else if (code === 'ArrowUp') {
        if (activeNameIndex === 0) {
          return;
        }
        setActiveNameIndex(activeNameIndex - 1)
      }

      else if (code === 'ArrowDown') {
        if (activeNameIndex - 1 === filteredNames.length) {
          return;
        }
        setActiveNameIndex(activeNameIndex + 1)

      }
    };

  return (
      <div className="input-container" data-testid="autocomplete-component">
        <label>Search users by name</label>
      <input 
        id="autocompleteInput" 
        name="autocomplete" 
        value={inputValue} 
        type="text" 
        placeholder="Start typing" 
        onChange={onAutoComplete} 
        onKeyDown={onKeyDown}
        />
        { showNames 
        && inputValue 
        && <NamesListComponent 
            filteredNames={filteredNames} 
            activeNameIndex={activeNameIndex} 
            onSelect={onSelect}
            inputValue={inputValue}
            />
        }
      
      </div>
  );
}

export default AutoCompleteComponent;