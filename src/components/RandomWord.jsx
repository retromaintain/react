import React, { useEffect, useState } from 'react';
import '../App.css';

const RandomizedText = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = [
    'UI/UX Developer.',
    'GUI Developer.',
    'Front-end Developer.',
    'Full-stack Developer.',
    'App Developer.',
    'Web Developer.',
    'React Developer.',
    'Node.js Developer.',
    'Python Developer.',
    'C++ Developer.',
    'Vanilla Developer.',
  ];

  useEffect(() => {
    const animationTime = getAnimationTime();

    const intervalId = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, animationTime);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getAnimationTime = () => {
    const phraseElement = document.querySelector('.random-word');
    const compStyles = window.getComputedStyle(phraseElement);
    let animation = compStyles.getPropertyValue('animation');

    animation = animation || compStyles.getPropertyValue('-moz-animation-duration');
    animation = animation || compStyles.getPropertyValue('-webkit-animation-duration');

    const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
    return animationTime;
  };

  const currentPhrase = phrases[phraseIndex];

  return <span className="random-word">{currentPhrase}</span>;
};

export default RandomizedText;
