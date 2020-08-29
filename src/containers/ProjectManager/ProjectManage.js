import React from 'react';
import classes from './ProjectManager.module.css';

const ProjectManager = (props) => {
    return (
        <div className={classes.ProjectManager}>
            <div className={classes.Rupesh}>
                <img src={'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19420538_1369437606467279_2941609363796410668_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=QFbmisFR1g0AX-0IhTI&_nc_ht=scontent.fktm3-1.fna&oh=d3a15d12ec62423af6d5c65cc7c08844&oe=5F70145A'} />
                <h4>Rupesh Gehal</h4>
            </div>
            <div className={classes.Binish}>
                <img src={'https://avatars0.githubusercontent.com/u/45104594?s=400&u=14854e40adb629cc1a8420aacda82dfae260b059&v=4'}/>
                <h4>Binish Joshi</h4>
            </div>
            <div className={classes.Suraj}>
                <img src={'https://avatars3.githubusercontent.com/u/50628520?s=400&u=5628a879b3aa69086f4f1deb56ff30cb7a749678&v=4'}/>
                <h4>Suraj Karki</h4>
            </div>
            <div className={classes.Saman}>
                <img src={'https://avatars3.githubusercontent.com/u/52382079?s=400&u=6b1c85672aae8f07680d1fff224b1a852d8e2d04&v=4'}/>
                <h4>Saman Shrestha</h4>
            </div>
        </div>
    )
}


export default ProjectManager;