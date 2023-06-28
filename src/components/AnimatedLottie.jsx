import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

class AnimatedLottie extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        mode: 'scroll',
        player: '#firstLottie',
    actions: [
    {
        visibility:[0, 1.0],
        type: "seek",
        frames: [0, 300],
    },
    ]
      });
    });
  }
  render() {
    return (
      <div className="AnimatedLottie">
        <div style={{ height: '400px' }}></div>
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          controls
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style={{ width: '320px' }}
        ></lottie-player>
      </div>
    );
  }
}

export default AnimatedLottie;