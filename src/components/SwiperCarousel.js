import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../swiper.css';
SwiperCore.use([Pagination,Navigation]);
export default function SwiperCarousel({children,items,slidesPerView,pagination,navigation}) {
 const cloneItem=items.map((element)=>(
    <SwiperSlide>
    {React.cloneElement(children,{item:element,key:element.id})}
  </SwiperSlide>
  ));
  /*
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><br/>' + (index + 1) + '</span>';
        },
      };
      */
  return (
    <Swiper 
    spaceBetween={10} 
    slidesPerView={slidesPerView?slidesPerView :2}
    pagination={pagination?pagination:false} 
    navigation={navigation?navigation :true}>
    {cloneItem}
  </Swiper>
  )
}
