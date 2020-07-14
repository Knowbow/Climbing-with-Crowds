import React from 'react';

// class Tab extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: 0
//         };

//         this.selectedTab = this.selectedTab.bind(this);
//     };

//     render(){
//         return (
//             <>
//                 <h1>

//                 </h1>
//             </>
//         )
//     }
// }

class Header extends React.Component{
    render(){
        const titleList = this.titles.map((title, idx) => {
            <li key={idx}>{title}</li>
        })

        // const contentList = this.contents.map((content, idx) {
        //     <li key={idx}>{content}</li>
        // })

        return(
            <>
                <ul>
                    <h1>
                        {titleList}
                    </h1>
                    <artcile>
                        {contentList}
                    </artcile>
                </ul>
            </>
        )
    }
}


export default Header;