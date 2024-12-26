import React from 'react';
import './App.css';
import SwiperCarousel from './components/SwiperCarousel';
import Shape2 from './components/Shape2';
import Shape1 from './components/Shape1';
function App() {
  const Data=[
    {id:1,name:'Ali',email:'Ali@email.com',age:30},
    {id:2,name:'Ahmed',email:'Ahmed@email.com',age:35},
    {id:3,name:'Asia',email:'Asia@email.com',age:25},
    {id:4,name:'Amna',email:'Amna@email.com',age:20},
  ];

  return (
    <div className='App'>
   <SwiperCarousel items={Data}
   slidesPerView={4} pagination={true} navigation={true}
   >
    <Shape2/>
   </SwiperCarousel>
   <SwiperCarousel items={Data}  slidesPerView={3} pagination={false} navigation={true}>
    <Shape1/> 
   </SwiperCarousel>
    </div>
  );
}

export default App;
