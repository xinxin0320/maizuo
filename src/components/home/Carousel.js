import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

export default class Carousel extends Component {
    componentWillMount(){
        this.props.getBillboard();

    }
     render() {
        console.log(this.props)
        return (
         <div>
             {/* 轮播 */}
             <ReactSwipe className="carousel"
                 key={this.props.billboards && this.props.billboards.length}
                 swipeOptions={{continuous: true,auto:2000}}>

                 {this.props.billboards && this.props.billboards.map((item,index)=>
                     <div key={index} style={{height:"210px"}}>
                         <img src={item.imageUrl} style={{width:"100%"}}/>

                     </div>
                 )}

           </ReactSwipe>

         </div>
        );
     }
}
