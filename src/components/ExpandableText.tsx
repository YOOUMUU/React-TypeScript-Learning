import { useState } from 'react';

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [moreToggle, setMoreToggle] = useState(false);
  const [newChars, setNewChars] = useState(maxChars);

  const handleClick = function () {
    maxChars && moreToggle ? setNewChars(maxChars) : setNewChars(NaN);
    setMoreToggle(!moreToggle);
  };

  return (
    <div>
      <p>{newChars ? children.slice(0, newChars) + '...' : children}</p>
      {maxChars && (
        <button onClick={handleClick}>{moreToggle ? 'Less' : 'More'}</button>
      )}
    </div>
  );
};

export default ExpandableText;
