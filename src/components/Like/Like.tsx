import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface Props {
  size: number;
  isLike: boolean;
  onCheck: () => void;
}

const Like = ({ size, isLike, onCheck }: Props) => {
  return (
    <div>
      {isLike ? (
        <AiFillHeart color="red" onClick={onCheck} size={size} />
      ) : (
        <AiOutlineHeart color="gray" onClick={onCheck} size={size} />
      )}
    </div>
  );
};

export default Like;
