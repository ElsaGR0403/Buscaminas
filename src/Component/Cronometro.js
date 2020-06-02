import React, { Component } from 'react';
import { findByLabelText } from '@testing-library/react';

class LightningCounter extends React.Component{
            constructor(props, context){
                super(props, context);
                
                this.state = {
                    segundos: 0,
                    minutos: 0,
                    horas:0
                };
                
                this.timerTick = this.timerTick.bind(this);
            }
            
            timerTick(){
                var nuevosSegundos = this.state.segundos+1;
                var nuevosMinutos = this.state.minutos;
                var nuevasHoras = this.state.horas;
                if(this.state.segundos>58){
                    nuevosSegundos = 0;
                    nuevosMinutos = this.state.minutos+1;
                }
                
                if(this.state.minutos>58){
                    nuevosMinutos = 0;
                    nuevasHoras = this.state.horas + 1;
                }
                    
                this.setState({
                    segundos: nuevosSegundos,
                    minutos: nuevosMinutos,
                    horas: nuevasHoras
                });
            }
            
            componentDidMount(){
                setInterval(this.timerTick, 1000);
            }
            render(){
                if(this.state.minutos>10 && this.state.horas>10 && this.state.segundos>10){
                    return(
                        <h1>{this.state.horas}:{this.state.minutos}:{this.state.segundos}</h1>
                    );
                }else{
                    if(this.state.segundos<=10 && this.state.minutos<10 && this.state.horas>=10 ){
                        return(
                        <h1>{this.state.horas}:0{this.state.minutos}:0{this.state.segundos}</h1>
                    );
                    }else{
                        if(this.state.segundos<10 && this.state.minutos>=10 && this.state.horas<10){
                        return(
                            <h1>0{this.state.horas}:{this.state.minutos}:0{this.state.segundos}</h1>
                        );
                        }else{
                            if(this.state.segundos>=10 && this.state.minutos<10 && this.state.horas<10 ){
                            return(
                                <h1>0{this.state.horas}:0{this.state.minutos}:{this.state.segundos}</h1>
                             );
                            }else{
                                if(this.state.segundos>=10 && this.state.minutos>=10 && this.state.horas<10 ){
                                    return(
                                        <h1>0{this.state.horas}:{this.state.minutos}:{this.state.segundos}</h1>
                                     );
                                }else{
                                    if(this.state.segundos>=10 && this.state.minutos<10 && this.state.horas>=10 ){
                                        return(
                                            <h1>{this.state.horas}:0{this.state.minutos}:{this.state.segundos}</h1>
                                    );
                                    }else{
                                        if(this.state.segundos<10 && this.state.minutos>=10 && this.state.horas>=10 ){
                                            return(
                                                <h1>{this.state.horas}:{this.state.minutos}:0{this.state.segundos}</h1>
                                             );
                                         }else{
                                            return(
                                                <h1>0{this.state.horas}:0{this.state.minutos}:0{this.state.segundos}</h1>
                                            );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
        class Cronometro extends React.Component{
            render(){
                var divStyle={
                    width: 150,
                    height: 50,
                    textAling: "center",
                    backgroundColor: "#f5073d",
                    padding: 10,
                    fontFamily: "sans-serif",
                    color: "#ffffff",
                    borderRadius: 10,
                };
                return(
                    <div style={divStyle}>
                    <LightningCounter/>
                    </div>
                );
            }
        }

export default Cronometro;