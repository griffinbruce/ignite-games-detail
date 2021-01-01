import React from 'react';
import { Link, useHistory } from 'react-router-dom';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../animations';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

import { smallImage } from '../util';

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Fix Scrolling
  const history = useHistory();
  if (history.location.pathname === '/') {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
  //Load Details Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    //first attempt at fixing scroll and toggling components but had issues
    // document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popup}
      initial='hidden'
      animate='show'>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          src={smallImage(image, 640)}
          loading='lazy'
          alt={name}
          layoutId={`image ${stringPathId}`}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
