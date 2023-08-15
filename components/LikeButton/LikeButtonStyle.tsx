import styled from "styled-components";
import { AiFillHeart  } from 'react-icons/ai';


interface LikeButtonProps {
  liked: boolean;
}

export const LikeButtonStyle = styled(AiFillHeart)<LikeButtonProps>`
  font-size: 24px;
  color: ${props => (props.liked ? 'red' : 'black')};
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  position: absolute;
  bottom: 3%;
  right: 2%;

  &:hover {
    color: grey;
  }
`;