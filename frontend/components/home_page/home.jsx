import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){

        return (
            <>
            <div className="home">
                <img className="home" alt="Friends" src="https://images.squarespace-cdn.com/content/v1/5be4f2c0f793929686b0a305/1567669642144-HELFNPOTBA55RPC2J0FL/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/LM_181130_ClimbFitKirrawee_0086_HIGHres.jpg?format=2500w"
                    />
            </div>
            <div>
                <p className="introl">Show up for climbing</p>
                    <p className="intro">Have a real conversation </p>
                    <p className="intro">See what happens</p>
                    <p className="intro1l">You and a few others meet at a gym</p>
                    <p className="intro1">You climb or belay for as long as you want</p>
                    <p className="intro1">That's it. No strings attached</p>
            </div>
            </>
        )        
    }
}
export default Home;