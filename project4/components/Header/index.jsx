import React from "react";
import "./styles.css";

/*Define header component, a ReactJS component that will display
a personalized header at the top of a view. Header is added to all 
ReactJS web apps in assignment. */

// The header class will display a personalized header at the top
// of a view. Add this header to all ReactJS web apps in assignment
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const animationStyles = {
            animationName: 'slide',
            animationDuration: '0.5s',
            animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
            animationIterationCount: '3',
        };


        return (
            <div style={animationStyles}>
                <img src="https://www.thefactsite.com/wp-content/uploads/2020/04/nemo-facts-nemo.jpg"
                    width="400"
                    height="200"
                    alt="Nemo"
                />
                <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/501587-gettyimages-462249793-6e64021292535a8602b61e5ed87657ec.jpg"
                    width="350"
                    height="200"
                    alt="Nemo"
                />
                <img src="https://muralsyourway.vtexassets.com/arquivos/ids/236036/Tropical-Fish-On-A-Coral-Reef--Mural-Wallpaper.jpg?v=638164589220730000"
                    width="250"
                    height="200"
                    alt="Nemo"
                />
                <h1 className="new-font2"> 🐟🐟🐟🐟🐟 my world under the sea 🐟🐟🐟🐟</h1>

                <h1 className="new-font">NEMO SHOT DEAD IN THE BRONX</h1>

            </div>
        );
    }

}
export default Header;

