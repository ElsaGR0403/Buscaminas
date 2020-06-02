import React, { Component } from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
            winner: false,
            IsMine: false,
            contadorClicks:0,
            contadorClicksREP:0,
            arrayclicks: Array(80).fill(null),
            contenedorMinas: Array(10).fill(null),
            primeraCasilla:null,
        };
    }
    
    handleClick(event,i){
        const squares = this.state.squares.slice();
        const minas = this.state.contenedorMinas;
        
        if(this.state.contadorClicks==0){
            this.state.contadorClicks+=1;
        }
        else if(this.state.contadorClicks==1){
            
            const min = 0;
            const max = 80;
            
            for(var indi=0; indi<10; indi++){
                var indiceMina = Math.floor(Math.random() * (max - min)) + min;
                if(indiceMina==this.state.primeraCasilla){
                   indiceMina = Math.floor(Math.random() * (max - min)) + min;
                }
                minas[indi] = indiceMina;
                
            }
            this.state.contadorClicks+=1;
            //console.log("click: "+this.state.contadorClicks);
            console.log("Ya hay mas de un click: "+minas);
            
        }
        console.log("click: "+this.state.contadorClicks);
        console.log(i);
        console.log(minas.indexOf(i));
            
        //const minas=[3,4,8,12,25,30,34,65,79,80];

        if (squares[i]!=null) {
            return;
        }
        if(this.state.arrayclicks.indexOf(i)==-1){
            this.state.arrayclicks.push(i);
            this.state.contadorClicksREP+=1;
        }
        
        console.log("CLICKS REP -------: "+this.state.contadorClicksREP);
       
       console.log("button: "+event.button);
        console.log("array de indice: "+ this.state.arrayclicks)
       console.log( "Array de minas "+ minas);

        var found=minas.indexOf(i);
        var Mouse=event.button;

        console.log(found);
        if (Mouse==0) {
            if (found==-1) {
                var valor=0;
                if (i==0||i==72) {
                    if(minas.indexOf(i+1)!=-1)
                        valor++;
                    if(minas.indexOf(i+9)!=-1)
                        valor++;
                    if(minas.indexOf(i+10)!=-1)
                        valor++;
                    squares[i]=valor;                    
                }
                if (i>0 && i<=7) {
                    if(minas.indexOf(i+1)!=-1)
                         valor++;
                    if(minas.indexOf(i+8)!=-1)
                        valor++;
                    if(minas.indexOf(i+9)!=-1)
                        valor++;
                    if(minas.indexOf(i+10)!=-1)
                        valor++;
                    if(minas.indexOf(i-1)!=-1)
                        valor++;
                    squares[i]=valor;
                }
                if(i==8||i==80){
                    if(minas.indexOf(i-1)!=-1)
                        valor++;
                    if(minas.indexOf(i+8)!=-1)
                        valor++;
                    if(minas.indexOf(i+9)!=-1)
                       valor++;
                    squares[i]=valor;
                }
                if (i>72 && i<=79) {
                    if(minas.indexOf(i+1)!=-1)
                        valor++;
                    if(minas.indexOf(i-1)!=-1)
                        valor++;
                    if(minas.indexOf(i-8)!=-1)
                        valor++;
                    if(minas.indexOf(i-9)!=-1)
                        valor++;
                    if(minas.indexOf(i-10)!=-1)
                        valor++;
                    squares[i]=valor;
                }
                if (i==9||i==18||i==27||i==36||i==45||i==54||i==63) {
                    if(minas.indexOf(i+1)!=-1)
                        valor++;
                    if(minas.indexOf(i+9)!=-1)
                        valor++;
                    if(minas.indexOf(i+10)!=-1)
                        valor++;
                    if(minas.indexOf(i-8)!=-1)
                        valor++;
                    if(minas.indexOf(i-9)!=-1)
                        valor++;
                    squares[i]=valor;
                }
                if (i==17||i==26||i==35||i==44||i==53||i==62||i==71) {
                    if(minas.indexOf(i-1)!=-1)
                        valor++;
                    if(minas.indexOf(i-9)!=-1)
                        valor++;
                    if(minas.indexOf(i-10)!=-1)
                        valor++;
                    if(minas.indexOf(i+8)!=-1)
                       valor++;
                    if(minas.indexOf(i+9)!=-1)
                        valor++;
                    squares[i]=valor;
                }
                if(i>9 && i<=16||i>18 && i<=25||i>27 && i<=34||i>36 && i<=43||i>45 && i<=52||i>54 && i<=61||i>63 && i<=70){
                    if(minas.indexOf(i+1)!=-1)
                        valor++;
                    if(minas.indexOf(i+8)!=-1)
                        valor++;
                    if(minas.indexOf(i+9)!=-1)
                        valor++;
                    if(minas.indexOf(i+10)!=-1)
                        valor++;
                    if(minas.indexOf(i-1)!=-1)
                        valor++;
                    if(minas.indexOf(i-8)!=-1)
                        valor++;
                    if(minas.indexOf(i-9)!=-1)
                        valor++;
                    if(minas.indexOf(i-10)!=-1)
                        valor++;
                    squares[i]=valor;
                }
                if(valor==0){
                    
                }
                this.state.primeraCasilla=i;
                this.state.IsMine=false;
            }
            else{
                squares[i]="*";
                this.state.IsMine=true;
                for(var j=0; j<10;j++){
                    var k=minas[j];
                    squares[k]="*";
                }
                alert("Creo que haz perdido, intentalo de nuevo");
            }
        }
        else if (Mouse==2) {
            squares[i]='X';
        }
        if(this.state.contadorClicksREP==81){
            for(var n=0;n<10;n++){
                var minatmp=minas[n];
                if(minatmp==null || minatmp!='*')
                    this.state.winner=true;
            }
        }
        this.setState({
            squares: squares,
            IsMine: this.state.IsMine,
            contenedorMinas: minas
        });
        
    }
    
    renderSquare(i) {
          return <Square value={this.state.squares[i]} onClick={(event) =>this.handleClick(event,i)}  />;
    }

    render() {
          let status;
          if(!this.state.IsMine){

          }
          else{ 
              window.location.reload();
          }
          if(this.state.winner){
              alert("Enhorabuena, ganaste!");
          }
          return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
              <div className="board-row">
                {this.renderSquare(9)}
                {this.renderSquare(10)} 
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
              </div>
              <div className="board-row">
                {this.renderSquare(18)}
                {this.renderSquare(19)}
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
                {this.renderSquare(25)}
                {this.renderSquare(26)}
              </div>
              <div className="board-row">
                {this.renderSquare(27)}
                {this.renderSquare(28)}
                {this.renderSquare(29)}
                {this.renderSquare(30)}
                {this.renderSquare(31)}
                {this.renderSquare(32)}
                {this.renderSquare(33)}
                {this.renderSquare(34)}
                {this.renderSquare(35)}
              </div>
              <div className="board-row">
                {this.renderSquare(36)}
                {this.renderSquare(37)}
                {this.renderSquare(38)}
                {this.renderSquare(39)}
                {this.renderSquare(40)}
                {this.renderSquare(41)}
                {this.renderSquare(42)}
                {this.renderSquare(43)}
                {this.renderSquare(44)}
              </div>
              <div className="board-row">
                {this.renderSquare(45)}
                {this.renderSquare(46)}
                {this.renderSquare(47)}
                {this.renderSquare(48)}
                {this.renderSquare(49)}
                {this.renderSquare(50)}
                {this.renderSquare(51)}
                {this.renderSquare(52)}
                {this.renderSquare(53)}
              </div>
              <div className="board-row">
                {this.renderSquare(54)}
                {this.renderSquare(55)}
                {this.renderSquare(56)}
                {this.renderSquare(57)}
                {this.renderSquare(58)}
                {this.renderSquare(59)}
                {this.renderSquare(60)}
                {this.renderSquare(61)}
                {this.renderSquare(62)}
              </div>
              <div className="board-row">
                {this.renderSquare(63)}
                {this.renderSquare(64)}
                {this.renderSquare(65)}
                {this.renderSquare(66)}
                {this.renderSquare(67)}
                {this.renderSquare(68)}
                {this.renderSquare(69)}
                {this.renderSquare(70)}
                {this.renderSquare(71)}
              </div>
              <div className="board-row">
                {this.renderSquare(72)}
                {this.renderSquare(73)}
                {this.renderSquare(74)}
                {this.renderSquare(75)}
                {this.renderSquare(76)}
                {this.renderSquare(77)}
                {this.renderSquare(78)}
                {this.renderSquare(79)}
                {this.renderSquare(80)}
              </div>
            </div>
          );
    }
}
export default Board;
