import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

interface Props {
  size: number;
  onCheck: () => void;
}

const Like = ({ size, onCheck }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const toggle = () => {
    setIsLike(!isLike);
    onCheck();
  };

  return (
    <div>
      {isLike ? (
        <AiFillHeart color="red" onClick={toggle} size={size} />
      ) : (
        <AiOutlineHeart color="gray" onClick={toggle} size={size} />
      )}
    </div>
  );
};

export default Like;
