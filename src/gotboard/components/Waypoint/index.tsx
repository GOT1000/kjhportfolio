import React from 'react';
import { Waypoint } from 'react-waypoint'


const WaypointComponent = ({onEnter, onLeave, topOffset=0, bottomOffset=0, children=null}) => {
  return (
    <Waypoint
        onEnter={onEnter}
        onLeave={onLeave}
        topOffset={topOffset}
        bottomOffset={bottomOffset}
    >
        {children}
    </Waypoint>
  );
};


export default WaypointComponent;