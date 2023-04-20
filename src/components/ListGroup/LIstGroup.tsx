import { useState } from 'react';
import styles from './ListGroup.module.css';

// {item:[], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              index === selectIndex
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
