import React, { useState } from 'react';
import Controls from 'components/Controls/Controls';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistic/Statistic';
import Container from './App.styled';

const options = ['good', 'bad', 'neutral'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const countTotalFeedback = () => {
    return good + bad + neutral;
  };

const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  };

const onClickButton = e => {
  const type = e.target.dataset.type;
  if (type === 'good') setGood(prevState => prevState + 1);
  if (type === 'neutral') setNeutral(prevState => prevState + 1);
  if (type === 'bad') setBad(prevState => prevState + 1);  
  };


return (
      <Container>
        <Section title="Please Leave feedback">
          <Controls
            options={options}
            onLeaveFeedback={onClickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification massege="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );

};



