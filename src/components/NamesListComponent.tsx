import React, {useMemo} from 'react';

type Props = {
filteredNames: string[] | [];
activeNameIndex: number;
inputValue: string;
onSelect(e: React.MouseEvent<HTMLElement>): void;
}

const NamesListComponent: React.FC<Props> = ({filteredNames, activeNameIndex, inputValue, onSelect}): JSX.Element => {

  //using regExp for highlighting the matching text based on user input
  const match: RegExp = useMemo(() => {
    const SPECIAL_CHARS = /([.?*+^$[\]\\(){}|-])/g;
    const escapedSearch = inputValue.replace(SPECIAL_CHARS, "\\$1");
    return new RegExp(`(${escapedSearch})`, "i");
  }, [inputValue]);

    return filteredNames.length ? (
      <ul className="suggestions">
        {filteredNames.map((name, index) => {
          let className;
          if (index === activeNameIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={index} onClick={onSelect} >
              <span>
                {inputValue === ""
                  ? name
                  : name
                      .split(match)
                      .filter((part) => part !== "")
                      .map((part, i) => (match.test(part) ? <mark key={part + i}>{part}</mark> : part))}
              </span>
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