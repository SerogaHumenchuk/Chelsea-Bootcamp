import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import Line from '../Line/Line';

const Team = ({match, data}) => {
    console.log(match);
    return (
        <div>
             <h2>First Team</h2>
             <nav>
                    <NavLink to={`${match.path}/goalkeepers`}>GOALKEEPERS</NavLink>
                    <NavLink to={`${match.path}/defenderes`}>DEFENDERES</NavLink>
                    <NavLink to={`${match.path}/midfielders`}>MIDFIELDERS</NavLink>
                    <NavLink to={`${match.path}/forwards`}>FORWARDS</NavLink>
             </nav>
                <Switch>
                        <Route path={`${match.path}/goalkeepers`} render={props => <Line data={data.GK} {...props}/>}/>
                        <Route path={`${match.path}/defenderes`} render={props => <Line data={data.DF} {...props}/>}/>
                        <Route path={`${match.path}/midfielders`} render={props => <Line data={data.MD} {...props}/>}/>
                        <Route path={`${match.path}/forwards`} render={props => <Line data={data.FW} {...props}/>}/>
                </Switch>
        </div>
    )
}

export default Team;