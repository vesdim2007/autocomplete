import React from 'react';

type Props = {
filteredNames: string[] | [];
activeNameIndex: number;
onSelect(e: React.MouseEvent<HTMLElement>): void;
}

const NamesListComponent: React.FC<Props> = ({filteredNames, activeNameIndex, onSelect}): JSX.Element => {


    return filteredNames.length ? (
      <ul className="suggestions">
        {filteredNames.map((name, index) => {
          let className;
          if (index === activeNameIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={index} onClick={onSelect} >
              {name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No names found</em>
      </div>
    );
  };

  export default NamesListComponent;