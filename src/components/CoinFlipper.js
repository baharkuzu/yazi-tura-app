import React, {Component} from 'react';
import "./CoinFlipperStyles.css";
import Coin from "./Coin";

const options = ["yazi", "tura" ];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem =  arr[randomIndex];
  return randomItem;
};

class CoinFlipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false,
            yaziCount: 0,
            turaCount:0
        }
    }

    atisYap = () => {
        this.setState({
            donuyor: true
        });
        const rastgeleEleman = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false
            })
        }, 1000);
    }

    render() {
        const {currentStatus, donuyor, gelenler} = this.state;
        return (
            <div>
                <h1>
                    Yazi ya da tura
                </h1>
                <Coin currentStatus={currentStatus} donuyor={donuyor}/>
                <button onClick={this.atisYap}>Atis yap</button>
                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus} geldi</h3>
                }
                <h3>
                    Yazı sayısı: {gelenler.filter(item => {return item === "yazi"}).length}
                </h3>
                    
                <h3>
                    Tura sayısı: {gelenler.filter(item => {return item === "tura"}).length}
                </h3>

                <h3>Toplam atış sayısı: {gelenler.length}</h3>
            </div>
        );
    }
}

export default CoinFlipper;