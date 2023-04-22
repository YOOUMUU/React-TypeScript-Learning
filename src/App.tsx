import ListGroup from './components/ListGroup/index';
import Button from './components/Button/Button';
import Like from './components/Like/Like';
import ExpandableText from './components/ExpandableText';
import './App.css';
import { useState } from 'react';
import { produce } from 'immer';

function App() {
  return (
    <ExpandableText maxChars={120}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh
      sed pulvinar proin gravida. Nulla facilisi etiam dignissim diam quis enim
      lobortis scelerisque. Rhoncus urna neque viverra justo nec ultrices dui
      sapien. Lorem donec massa sapien faucibus et molestie ac feugiat sed.
      Nulla pellentesque dignissim enim sit amet. Adipiscing enim eu turpis
      egestas pretium. Odio ut sem nulla pharetra diam. Iaculis nunc sed augue
      lacus viverra vitae congue. Molestie nunc non blandit massa enim nec dui.
      Sed cras ornare arcu dui vivamus arcu felis. Eu volutpat odio facilisis
      mauris sit. Nunc sed velit dignissim sodales ut eu sem. Vitae elementum
      curabitur vitae nunc sed velit dignissim sodales ut. Aliquam sem et tortor
      consequat. Auctor urna nunc id cursus metus aliquam eleifend. Cras
      pulvinar mattis nunc sed blandit libero. Nullam ac tortor vitae purus
      faucibus ornare suspendisse. Euismod nisi porta lorem mollis aliquam ut
      porttitor leo a. Posuere urna nec tincidunt praesent. Id eu nisl nunc mi
      ipsum faucibus. In iaculis nunc sed augue lacus viverra vitae congue.
      Malesuada fames ac turpis egestas integer eget. Montes nascetur ridiculus
      mus mauris vitae ultricies leo integer.
    </ExpandableText>
  );
}

export default App;
