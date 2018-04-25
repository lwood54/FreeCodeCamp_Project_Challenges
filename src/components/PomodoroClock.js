import React from 'react';
import BreakTime from './BreakTime';
import Countdown from './Countdown';
import ProgressBar from './ProgressBar';
import WorkTime from './WorkTime';

class PomodoroClock extends React.Component {
  state = {
    minLeft: 16,
    secLeft: 0,
    inSession: true,
    isPaused: false,
    workTime: 16,
    breakTime: 5,
    style: {
      width: '100%'
    }
  };

  togglePause = () => {
    if (!this.state.isPaused) {
      clearInterval(this.interval);
      this.setState({ isPaused: true });
    } else {
      this.setState({ isPaused: false });
      this.interval = setInterval(() => {
        return this.reduceSecond();
      }, 1000);
    }
  };

  addBreakTime = () => {
    const { breakTime, inSession } = this.state;
    if (!inSession) {
      this.setState({
        minLeft: breakTime + 1,
        secLeft: 0,
        breakTime: breakTime + 1,
        style: {
          width: '100%'
        }
      });
    } else {
      this.setState({ breakTime: breakTime + 1 });
    }
  };

  subtractBreakTime = () => {
    const { breakTime, inSession } = this.state;
    if (!inSession) {
      this.setState({
        minLeft: breakTime > 1 ? breakTime - 1 : 1,
        secLeft: 0,
        breakTime: breakTime > 1 ? breakTime - 1 : 1,
        style: {
          width: '100%'
        }
      });
    } else {
      this.setState({ breakTime: breakTime > 1 ? breakTime - 1 : 1 });
    }
  };

  addWorkTime = () => {
    const { workTime, inSession } = this.state;
    console.log(workTime);
    if (inSession) {
      this.setState({
        minLeft: workTime + 1,
        secLeft: 0,
        workTime: workTime + 1,
        style: {
          width: '100%'
        }
      });
    } else {
      this.setState({ workTime: workTime + 1 });
    }
  };

  subtractWorkTime = () => {
    if (this.state.inSession) {
      this.setState(prevState => {
        return {
          minLeft: prevState.workTime > 1 ? prevState.workTime - 1 : 1,
          secLeft: 0,
          workTime: prevState.workTime > 1 ? prevState.workTime - 1 : 1,
          style: {
            width: '100%'
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          workTime: prevState.workTime > 1 ? prevState.workTime - 1 : 1
        };
      });
    }
  };

  reduceMinute = () => {
    this.setState(prevState => {
      return {
        minLeft: prevState.minLeft !== 0 ? prevState.minLeft - 1 : 0
      };
    });
  };

  reduceSecond = () => {
    const { minLeft, secLeft, inSession, breakTime, workTime } = this.state;
    if (secLeft === 0 && minLeft === 0) {
      if (inSession) {
        this.setState({
          minLeft: breakTime,
          inSession: false
        });
      } else {
        this.setState({
          minLeft: workTime,
          inSession: true
        });
      }
    } else {
      if (secLeft === 0) {
        this.reduceMinute();
      }
      let startTime = inSession ? workTime * 60 : breakTime * 60;
      let percent = (minLeft * 60 + secLeft) / startTime * 100;
      this.setState({
        secLeft: secLeft > 0 ? secLeft - 1 : 59,
        style: {
          width: percent + '%'
        }
      });
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      return this.reduceSecond();
    }, 1000);
  }

  render() {
    // let { minLeft, secLeft } = this.state;
    // document.getElementById('tabTitle').innerHTML = `${minLeft}:${secLeft}`;
    return (
      <div className="container">
        <div className="brkWrkContainer row flow-text">
          <BreakTime
            addBreakTime={this.addBreakTime}
            subtractBreakTime={this.subtractBreakTime}
            breakTime={this.state.breakTime}
          />

          <WorkTime
            addWorkTime={this.addWorkTime}
            subtractWorkTime={this.subtractWorkTime}
            workTime={this.state.workTime}
          />
        </div>

        <div className="countdownContainer flow-text">
          <Countdown
            inSession={this.state.inSession}
            togglePause={this.togglePause}
            minLeft={this.state.minLeft}
            secLeft={this.state.secLeft}
          />
        </div>

        <ProgressBar
          cName={
            this.state.inSession
              ? 'determinate blue accent-4'
              : 'determinate red accent-4'
          }
          style={this.state.style}
        />
      </div>
    );
  }
}

export default PomodoroClock;
