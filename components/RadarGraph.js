import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

class App extends React.Component {
  render() {
 	 const data = [
      {
        data: {
          Food: 0.7,
          Museums: .8,
          Nightlife: 0.9,
          Nature: 0.67,
          Theater: 0.8,
          Events: 0.2,
        },
        meta: { color: 'blue' }
      },
      {
        data: {
          Food: 0.6,
          Museums: .85,
          Nightlife: 0.5,
          Nature: 0.6,
          Theater: 0.7,
          Events: 0.2,
        },
        meta: { color: 'red' }
      }
    ];

	const captions = {
      // columns
      Food: 'Food Capacity',
      Museums: 'Museums',
      Nightlife: 'Nightlifeness',
      Nature: 'Nature',
      Theater: 'Theater',
      Events: 'Events',
    };

    return (
      <div>
        <RadarChart
            captions={{
              // columns
              Food: 'Food Capacity',
              Museums: 'Museums',
              Nightlife: 'Nightlifeness',
              Nature: 'Nature',
              Theater: 'Theater',
              Events: 'Events',
            }}
            data={[
              // data
              {
                data: {
                  Food: 0.7,
                  Museums: .8,
                  Nightlife: 0.9,
                  Nature: 0.67,
                  Theater: 0.8,
                  Events: 0.2,
                },
                meta: { color: '#3ca35d' }
              },
            ]}
            size={400}
          />
        </div>
    );
  }
}

export default App;