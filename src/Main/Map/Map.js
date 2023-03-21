import React from 'react'
import './dist/Map.css'
import bg1 from './Images/bg-1.png';
import bg2 from './Images/bg-2.png';
import bg3 from './Images/bg-3.png';
import bg4 from './Images/bg-4.png';
import bg5 from './Images/bg-5.png';

const Map = () => {

    function itemClick(name){
        /* map */
        var value_name = document.getElementById("value_name");//заголовок с названием
        var bg_img = document.getElementById("bg_img");//картинка
        var circle1 = document.getElementById(name+"-circle-1");

        var circle1_true = document.querySelector('.circle-1-true');

        circle1.classList.add('circle-1-true');//изменение отметки на карте
        circle1.classList.remove('circle-1-false');

        circle1_true.classList.add('circle-1-false');
        circle1_true.classList.remove('circle-1-true');
        
        /* list */
        var list_item = document.getElementById("list-"+name);
        var list_item_true = document.querySelector('.item-true');
        list_item.classList.add('item-true');
        list_item_true.classList.remove('item-true');

        switch(name){
            case "item1": 
                value_name.innerText="Grand Canyon, USA"; 
                bg_img.src =  bg1;
                break;
            case "item2": 
                value_name.innerText="Amazonia, Brazil"; 
                bg_img.src =  bg2;
                break;
            case "item3": 
                value_name.innerText="Salar de Uyuni, Bolivia"; 
                bg_img.src =  bg3;
                break;
            case "item4": 
                value_name.innerText="Giza Pyramids, Egypt"; 
                bg_img.src =  bg4;
                break;
            case "item5": 
                value_name.innerText="Rainbow mountains, China"; 
                bg_img.src =  bg5;
                break;
        }
    };  

  return (
    <div class="container">
        <div className="container-top">
            <div className="container__info">
                <p className="title">Выбери свой космопорт</p>
                <p className="text">Ты можешь отправиться в космос с любой предоставленной площадки, каждая из которых добавляет яркие краски к эмоциям, полученным при взлете.</p>
            </div>

            <div className="container-top-map">
                <svg id="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1038 515">
                    <g id="world">
                    <path class="cls-1" d="M1389.59,793.21q304.4,0,608.8-.09c3.75,0,4.59.84,4.59,4.58q-.17,252.91,0,505.83c0,3.74-.84,4.59-4.59,4.59q-514.41-.15-1028.82,0c-3.75,0-4.59-.84-4.59-4.59q.16-252.91,0-505.83c0-3.74.84-4.59,4.59-4.58q202.51.17,405,.09a1.46,1.46,0,0,1,.33,1.34c-1.47,2.53-4,2-6.25,2.05-6.12.19-12.29-.41-18.09,2.52-2,1-4.59.59-6.91.51-9.34-.33-18.57.7-27.79,2-1.33.18-3,.05-3.81,1-4.07,4.51-9.58,4.8-15,5.49-.47.06-.92.33-1.3,1.25,3,1.85,6.67,1.37,9.93,2.12,8.16,1.87,9.32,2.94,10.43,11.27.17,1.35.87,2.53,1.11,3.8.75,4,1.06,7.5-3,10.56-6.51,4.87-4.09,12-3.18,18.43.51,3.68,3.11,5.71,6.43,6.94,2.94,1.1,5.61.81,7.74-1.63,2.62-3,5.89-5.48,8.14-8.75a19.7,19.7,0,0,1,14-8.55c5-.78,9.39-2.94,13.71-5.6,6.58-4.05,14.25-5.42,21.56-7.59,3-.9,5.68-1.76,6.22-5.47.21-1.49,1.53-2.63,2.72-3.46,5.19-3.62,7.13-8.89,7.94-14.8a5,5,0,0,1,4.44-4.67c2.42-.47,4.88-.78,7.17-1-7.74-.53-15.21-2-21.9-6.41A1.6,1.6,0,0,1,1389.59,793.21Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1389.59,793.21a4.28,4.28,0,0,1,.17.79c-3.82,3.6-11.29,3.64-15.28.07,0-.28.09-.57.12-.86Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1582.26,1051c1.51,2.54,3.55,3.22,6.34,2,5.09-2.2,10.71-2.26,16-3.74,2.6-.73,2.81.73,2.88,2.59.23,6-2.89,10.76-5.18,15.92-6.13,13.78-18.38,22.52-27.58,33.75-6.52,8-10,16.36-6.14,26.62a52.35,52.35,0,0,1,3,22.5c-.3,4.2-1.79,7.22-5.38,8.71-5.15,2.14-8.41,6.42-12.47,9.79a4.85,4.85,0,0,0-1.67,5.77,22.19,22.19,0,0,1,1.18,5.85c.18,3.92-.26,7.67-4.59,9.55-3.52,1.53-5.32,4-5.19,8.17a11.35,11.35,0,0,1-3.76,8.4,72.71,72.71,0,0,0-6.71,8c-5.75,7.6-13,12-22.86,11.43-2.42-.14-4.92.7-7.36,1.2-4.77,1-9-1.6-8.21-6,.76-4-1.08-6.67-2.41-9.72-1.87-4.25-4-8.39-6.08-12.56-.74-1.49-1.73-3-1.54-4.67,1-9-2.89-16.59-6.92-24-4.27-7.88-4-15.54-.3-23.38,2.49-5.22,2.59-10.27,2-16.24-1.22-11.5-6.54-20.61-12.73-29.62-1.71-2.48-2.12-4.72-.66-7.37a16.14,16.14,0,0,0,1.66-7.22c.3-7.39-1.49-9.17-9-8.59-2.09.16-3.74.22-5.07-2-3.67-6.11-8.82-7.78-15-4.68-5.55,2.77-10.83,5.41-17.4,3.34a9.57,9.57,0,0,0-7.76,1c-3.55,2.26-6.43,1.54-9.44-1-2.27-1.92-4.89-3.44-7.36-5.14-3.48-2.41-6.15-5.19-7.41-9.57a15.81,15.81,0,0,0-7.72-9.44c-2.51-1.37-3.1-3.49-3.68-6-1.28-5.61.45-10.6,2.25-15.73,1.6-4.54.17-9.1-1-13.52-.43-1.63-1.16-3-.27-4.7,3.79-7.25,7.3-14.6,12.44-21.12,2.62-3.31,7-3.68,9.48-7,1.62-2.15,3.33-3.84,3.33-6.87,0-4.06,2-7.19,5.52-9.47,2.74-1.8,5.65-3.43,7-6.85,1.83-4.72-.32-7.47-5.41-8-4.87-.5-3.87-5.78-3.43-8,.87-4.52,2.22-8.85,2.16-13.6,0-2.32,2.36-3.46,4.77-3.25,3.3.28,6.57.9,9.88,1.09s7.2,1.68,9-2.89a10.81,10.81,0,0,0-3.57-12c-1.76-1.3-5.65-1.31-5-4,.77-2.93,5-.45,6.47-1.67,3.56-3,9.4-1.07,11.85-6,.73-1.46,2.41-1.63,3.78-2.2,1.86-.77,4.14-1.65,4.61-3.56,1.2-5,4.85-5.89,9-6.18,4-.27,5-1.85,3-5.44a5.43,5.43,0,0,1,1.63-7.53c1.77-1.33,3.77-2.58,4.63,1.21.37,1.64.89,4.47,3.89,2.72,2.63-1.54,1.06-3.44.12-5.11-3.14-5.55-3.17-5.54-8.72-2.33-3.77,2.19-7.69.54-8.8-3.69-2.85-10.86-.1-14.49,11.6-15.18a3.7,3.7,0,0,0,3.52-3,16,16,0,0,1,6.48-8.57c1.09-.75,2.59-1.95,2.09-3.13-1.07-2.52.64-2.87,2.12-3.43,8.07-3.1,16.14-6.22,25.07-5.45,2.95.25,5.9-2.24,8.76-.51,8.87,5.38,19.07,6.51,28.76,9.28,1.3.38,2.69.68,2.67,2.43s-1.32,2.14-2.53,2.75c-4.4,2.2-8.84.06-13.27.13.92,6,2.38,7.36,8.84,8.1.56-1.84-3.27-1.22-2-3.15,1-1.51,2.75-.45,4.16-.11,1.56.38,2.94,1.37,3.48-1.56.34-1.88,5-3.54,8.67-4a32.55,32.55,0,0,1-1-3.26c-.25-1.31-1.4-3.14,1.26-3.3,1.87-.12,4.12,0,4,2.51-.21,4.94,2,2.93,4.09,1.66,3.86-2.32,8.31-5.48,12.29-4.5,3.47.86,6.11,0,9.09-.35,2.82-.35,5.16-1.27,2.84-5.2,9,3,18.06,3,26.37,7.44.06-3.51-2.14-3.25-3.38-4.11-2.68-1.86-4.88-3.88-3-7.62,1-2,1-5.7,3.74-4.95,2.41.66,6.75.41,6.76,5.09,0,1.29,1.4,1.71,2.5,2.14,2.68,2.2,3.36,6.06,5.9,7.48-2.63-1.32-3.09-5.39-6-7.4,2.19-6.42,5.14.1,7.7-.34-1.42-4.92-.94-5.15,7.57-3.69,1.85-1.74-2.93-3-.51-4.37,1.28-.73,3.23-.27,4.87-.36,2-.12,4.49.61,4.37-2.91,0-.42,1.58-1.11,2.5-1.29,4.41-.83,8.82-1.75,13.28-2.22,4.28-.45,8.47.58,12.16-3.6,2.22-2.52,7.41-2.43,10.41-.62,3.33,2,6.52,2,9.95,2.19a20.05,20.05,0,0,1,3.48.16c2.67.61,6.5,0,7.47,2.9,1.07,3.27-3.53,3.2-4.87,5.33.14.26.37.75.39.74,9.08-3.94,17.63.73,26.41,1.64,3.81.39,7.26-1.14,10.73-1.73a18.8,18.8,0,0,1,15,4,20.37,20.37,0,0,0,6.47,3.63c1.82.65,2.92,1.46,5-.75s6,.06,9-.61c1.77-.4,5.3,2.31,5.05-2.63,0-.89,2.4-.73,3.64-.55,7.86,1.15,15.89.5,23.63,3.2,5.15,1.79,10.78,1.78,16.3,1.76,5.29,0,10.67-.11,15.19,3.54a4.87,4.87,0,0,0,2.86.63c7.65,0,15.3-.06,22.83,1.79.85.2,3.26,1.39,2.22-1.88-.8-2.54,1.64-1.25,2.5-1.11,8.85,1.39,17.86,1.74,26.56,4.23,10.23,2.93,20.42,6.07,31,7.37a29.14,29.14,0,0,1,3.85,1c2.86.76,1.67,3.46,1.9,5,.32,2.19-2.16,1.26-3.43,1.31-4.66.16-8-3.5-12.63-4.21-3.64-.57-4.71,1.62-5.51,3.49-1,2.28,1.95,2.47,3.32,3.26,2.22,1.27,5,1.6,7,3.87-6.56-1.41-10.59,1.46-13.21,6.91-.36.75-1,1.89-1.74,1.38-3.71-2.74-7.43,1.46-11.21-.23-1.33-.59-4.14.2-3.95,1.83.22,1.9-.64,5.17,2.71,5.68,3.63.56,4.68,4.46,7.82,5.86.72.32,1.48,4.18,1.55,6.35.1,3.37-.56,6.76.28,10.16a2.35,2.35,0,0,1-.94,2.66c-1.06.58-1.89-.26-2.61-.91-5.8-5.23-11.83-10.25-17.25-15.86-2-2.1-3.72-5-1.17-8.85,3.8-5.65,3.3-11.19-.2-14.76-1.87.78-.08,2.38-.79,3.48-1.44,2.21-2.91,3.83-5.43,1.27-.35-.36-.68-.73-1-1.1-2.22-2.46-5.33-3.21-7.42-1s-2.64,5.79,2.61,8.06c-4.41,1.37-7.26,1.7-10.94.73-7.27-1.9-14.82-1-22.21.21-1.72.29-2.34,1.78-2.74,3.25-.93,3.48-.79,7.33-3.68,10.11-.5.48-.68,1.47,0,1.75,3.35,1.38,7.21,4.26,10.06,3.5a9.9,9.9,0,0,1,11,3.46c8,9.59,11.2,20.55,7.19,32.92-1.28,4-2.91,6.91-8.15,5.32-2.87-.88-3.89,1.79-4.42,4.18-.39,1.74.51,3.93-1,5.23-4.33,3.66-1.25,5.47,1.68,7.29,3.46,2.16,6.54,4.52,7.54,8.82.39,1.67,1.08,3.22-.6,4.52-2,1.54-4.18,2.86-6.79,2.58-1.24-.14-1.6-1.37-1.7-2.69-.39-5.13-1.62-9.72-7.68-11-1.28-.26-1.65-1.45-2.07-2.58-1.64-4.47-4.45-5.82-8-3.13-3.4,2.55-3.83.59-4.38-2-.23-1.06.48-2.54-1.07-3s-2.27,1-3.1,2a4.8,4.8,0,0,0-.84,1.23c-.86,2.14-5,1.83-4.18,4.77.56,1.92,3.85,1.68,5.08,3.67,1,1.59,2.22,1,3.45.3a8.39,8.39,0,0,1,7.59-.12c.42,1.76-1.19,1.9-1.91,2.6-5,4.83-4.59,5.64-.17,10.51,3.58,4,8.76,7.4,8.06,14,6.19,4.18,1.62,9.16.81,13.69-1,5.4-4.18,9.69-8.3,13.27-4.31,3.75-9.67,5.39-14.87,7.35a7,7,0,0,1-1.46.15c-2.68.41-3.12,3.65-4.74,4.4-2.67,1.24-1.38-3.85-4.44-4-4.33-.26-6.12,2.94-8.43,5.38-1.82,1.93-1.57,4.39.09,6.39,2.54,3.06,5.27,6,8,8.92s5,5.78,5.51,9.82c.61,5.08.27,9.46-5.38,12-2.39,1.08-4,3.82-6.08,5.69-.8.73-2.09,1.79-2.69-.15-2-6.43-7.21-9.79-12.4-13.16a3.11,3.11,0,0,1-1.52-1.78c-.23-.83-.61-1.67-1.63-1.46s-1,1.15-1.31,1.94c-3.13,9.14-1.55,16.81,6.32,23.12,3.82,3.06,7.45,6.54,7.15,12.41-.18,3.51,4.17,6,3,10.71-3.51-3.51-7.87-5.2-10.83-8.78-1.41-1.72-2.58-3.46-2.38-5.81.47-5.39-2.73-9.14-6.43-12-1.94-1.52-2.67-2.6-2.17-4.76,2.25-9.78-1.68-18.6-4.22-27.65-1-3.35-2.66-2-4.38-.74-1.56,1.18-2.94,2.9-5.27,1.92-2.51-1-1.81-3.35-1.74-5.2.19-4.51-3.53-6.78-5.52-10-.86-1.37-2.88-2.27-3.23-3.68-1.38-5.5-4.15-6.81-9.17-4.12a6.22,6.22,0,0,1-4.86.38,2.71,2.71,0,0,0-3.46,1.27c-4.59,9.1-12.29,15.35-19.83,21.76a2.54,2.54,0,0,0-1,2.63,32.16,32.16,0,0,1-1.36,19.36c-.67,1.64.5,1.39,1.92,1.47,4.55.25,8,7,5.77,10.88-.76,1.31-1.66,2.67-3.44,2.33-1.53-.28-2-1.67-2.26-3-.27-1.8-.36-3.63-.45-5.45a3.07,3.07,0,0,0-2.17-3c-1.4-.47-2,.62-2.83,1.48-3.22,3.44-4.94,3.06-6.57-1.17-2.26-5.89-4.34-11.88-7.1-17.53a87,87,0,0,1-8.91-31.37c-2.53,1.62-3.89,5.16-7.2,2.9-2.19-1.49-4.24-2.8-4.19-6.18,0-2.46-11.92-9.91-15-9.7a75.78,75.78,0,0,1-20.32-1.74c-2.9-.58-6-.51-7.14-4.26-.43-1.41-2-1.23-3.46-.79a14.7,14.7,0,0,1-16.44-6.21c-1-1.53-1.83-3.18-2.86-4.68-1.4-2-3.27-2.12-5.22-.85s-2.64,3.18-1.33,5.15c2.19,3.31,5.09,6.14,6.36,10a1.4,1.4,0,0,0,2,.84c2.36-1.25,2.87.45,3.42,2.09,1.56,4.68,3.5,5.42,7.74,2.89a18.93,18.93,0,0,0,1.94-1.56c1.68-1.33,2.94-4.06,5-3.8s1.17,3.44,2.33,5.07a6.3,6.3,0,0,0,2.91,2.54c9.24,3.58,9.93,6.17,4.29,14-2.83,3.94-5.32,8.11-9.49,10.86-.54.35-.84,1.19-1.39,1.37-8.73,2.77-15,10.11-23.68,12.88-4.21,1.33-8.37,2.83-12.55,4.25a1.29,1.29,0,0,1-1.79-.24c-3.18-5.62-8.19-10.15-9.22-17.08a17.45,17.45,0,0,0-5.89-10.08,16.39,16.39,0,0,1-5.06-8.33c-1.67-6.21-5.73-11.05-9.16-16.26,1,4.21,3.23,7.88,5.34,11.56s3.12,7.61,4.73,11.31c2.49,5.78,4.7,12.07,9.54,16.56,3.7,3.42,6.25,7.64,9.16,11.64C1582.48,1046.82,1581.3,1049,1582.26,1051Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1219.82,847q-14.77,7.59-29.55,15.19a20.69,20.69,0,0,0-4.62,2.86c-1.38,1.29-4.42,2.94-3.33,4.35,1.81,2.35.59,6.35,5.66,7.36,5.53,1.11,9.76,6.59,16,7.15a1.18,1.18,0,0,1,.77,1.93c-1.28,2-.13,4.37-1.07,6.15-1.1,2.11-.48,4,.86,4.85,1.76,1.17,3.21-1,4.72-1.82a1.75,1.75,0,0,0,.86-1.16c-.07-8.25,6.72-10,12.22-13.07,3.12-1.73,5.33-4.11,3.47-8.06-.41-.86-.53-1.74.16-2.26,3.75-2.87,5-7.32,7.22-11.16.5-.87,1.08-1.84,2.2-1.8,6.12.22,12.51-.48,17,5.2.86,1.08.32,1.74-.11,2.63-.94,2-1,3.85.75,5.45,2,1.84,3.69.15,5.46-.56.31-.12.59-.33.9-.43,2.6-.91,4.73-5.29,6.88-3.7,2.61,1.94,2.62,6.59,2,9.77-.78,4.29,1.37,6.15,4.13,8.06,4.65,3.23,5.35,6.75,3.09,12.07-1.39,3.29-3.47,7,2.42,9.15,2.29.83,2,4.67,1,7-.88,2-2.45,1.91-4.83.82-3-1.39-6.75-1.3-10.19-1.72-2.56-.32-2.83-1.42-1.23-3.17,3-3.29,6.09-6.51,9-10.29-8.55,5.7-18.08,3.94-27.32,4.2-2.48.07-3.77,1.91-5.48,3.15a15.13,15.13,0,0,1-2.71,1.62c1-.9,2.4-.3,3.63-.71,1.92-.3,4.15-1.36,5.49.77,1,1.62-.41,3.2-1.3,4.52-1.34,2-2.26,3.93-.07,5.69s4.82,2.1,7.29.21c.66-.51,1.16-1.22,1.83-1.69s1.74-1.43,2.46-.07a1.89,1.89,0,0,1-.43,2.68c-5.39,3.7-11.59,5.84-17.75,7.37-3.79.94-1.52-2.19-.67-4.2-5.31,1-9.88,3.15-14.45,5.25-.82.38-1.87,1.41-1.9,2.18-.3,7.44-7.1,6.18-11.12,8.79-6.26,4.06-13.14,7.75-14.7,16.48-.72,4-4.67,6.27-8.11,8.35-5,3-9.83,6.12-13.68,10.69-2.51,3-3.35,5.93-2.48,9.61a20.25,20.25,0,0,1,.32,9.87c-.39,1.49-.5,3.69-2.61,3.78-1.91.08-2.64-1.85-3.35-3.3a11.46,11.46,0,0,1-1.09-6.29c.54-5.71-.21-6.54-5.73-7-2.73-.24-4.89-2.36-8-1.89-2.94.44-5.87,0-8.18,2.62a4,4,0,0,1-5.07.62c-4-2.16-7.5-1-11.15,1.37-6.16,4-12.31,7.31-12.5,16.21-.11,5.08-4.13,9.65-2.24,15.4,3.1,9.44,10.83,12.35,19.07,6.76,1.53-1,1.89-2.69,2.39-4.24a6,6,0,0,1,4.4-4.33c2.13-.56,4.56-1,6.27.27,2.1,1.61,0,3.66-.59,5.36-1.27,3.95-2.81,7.81-4.42,11.64-1.25,3,0,4,2.78,4,2.16,0,4.33,0,6.49,0,5.46.11,7.11,2.22,6,7.52a61.94,61.94,0,0,0-1.63,9.31c-.32,6.17,4.55,9.88,10.55,8.54,2.89-.64,5.9-1.36,8.34,1.42,2.68,3.08,5.57,1.32,6.19-1.2,2-8.32,10.31-7.82,15.07-11.92,1.33.81.94,1.52.53,2.28s-1.53,1.7-.48,2.59,2.44.11,3-.78c2-3,3.25-1.27,5.67-.25,5.32,2.25,11.14,4.47,17.07,2.56,5.4-1.73,6.8,3.12,9.85,5.2,5,3.4,8.19,8.91,13.65,11.83a15.79,15.79,0,0,0,7.12,2c7.25.23,11,3.75,13.34,10.77,1.66,5,3.88,9.94,7.84,13.77a1.71,1.71,0,0,0,1.66.67c5.25-1,8.68,1.66,12.19,5.29,2.68,2.76,7.11,2.84,10.77,2.23s6,.53,8.59,2.6c3.45,2.8,6.57,5.87,10.65,8.07,3.1,1.67,4.31,5.89,2.55,9.7-2.56,5.57-4.75,11.38-8.85,16.11a13.59,13.59,0,0,0-3.22,10.12c.32,7.39-1.45,14.56-3.14,21.65a12.87,12.87,0,0,1-9.11,9.78,38.31,38.31,0,0,0-9.36,4.57c-4.49,2.79-7.67,5.45-6.47,11.87a10.74,10.74,0,0,1-5.67,11.77c-1.33.69-1.53,2.07-1.94,3.33-.62,1.89-1.21,3.8-2,5.64-3.43,8.37-5.66,9.38-14.43,6.35a6.33,6.33,0,0,0,1.7,4.89c4.1,4.63,2.53,10-3.4,11.65a40.07,40.07,0,0,1-4.9.82c-1,.13-2.46.16-2.52,1.18-.25,4.55-1.64,7.43-7,7.27-1.47,0-.68,2.6.31,3.18,6.42,3.77,1,8,.25,11.73-.36,1.93-1.84,4.35-.33,5.46,4.77,3.5,3.29,7.62,2.35,12.08-1.28,6,1.47,11.54,6.79,14.6.86.49,1.91.64,2.76,1.14,1.52.9,5,.35,4.15,2.93-.73,2.27-3.58,2.94-6.4,2.49-10.49-1.69-19.38-6-25.24-15.18-2.82-4.44-8-7.86-6.59-14.32.1-.42-1-1.14-1.63-1.67-3.3-2.92-1.94-6.86-1-9.73,1.19-3.61,2-3.34.4-8.2-1.82,0,.18,2.89-1.9,2.52-1.2-.2-1.44-1.37-1.55-2.31-.92-8.28-4.22-16-4.18-24.63a495.75,495.75,0,0,0-3.9-61.46c-.45-3.7-1.86-6.73-5.37-8.37-14.7-6.84-19-21.94-27.07-34-2.19-3.28-3.1-7.36-6.45-9.95-.7-.54-.68-1.93-1.34-2.61-4.45-4.61,3.6-8.24.67-13.56-2.45-4.46,1.25-9.11,4.64-13,6.84-7.82,9-16.56,4.09-26.34-.74-1.47-1.5-2.68-3.2-2.64a2.84,2.84,0,0,0-2.94,2.81c-.36,3.74-2,3.15-4.26,1.42-3.18-2.49-7.42-2.73-10.52-6-3.54-3.74-4.76-8.55-7.67-12.49a6.46,6.46,0,0,0-3.7-2.85c-6.18-1.73-12.63-2.92-16.6-9-1.31-2-3.92-2.42-6.37-1.57-3.4,1.18-6.58.42-9.66-1a115.81,115.81,0,0,1-17.94-10.65c-2.87-2.07-4.43-4.22-2.59-8,1.36-2.73.59-5.44-1.58-7.78s-4.08-4.81-6.13-7.23c-1.3-1.54-2.57-3-1.91-5.34a4,4,0,0,0-1.19-3.66,20.73,20.73,0,0,1-5.44-13.08c-.07-1.77-1-2.86-2.75-2.87-2.15,0-2.08,1.74-2.3,3.19a8.64,8.64,0,0,0,.77,4.35c2.62,7,5.15,14,7.72,21,.46,1.23,1.46,2.73-.14,3.51-1.84.9-2-1.3-2.62-2.22-1.73-2.49-4.41-4.47-3.9-8.22.23-1.7-1.85-2.55-3-3.74-1.53-1.63-4.48-3.1-1.67-6.07a1.94,1.94,0,0,0-.12-2.35c-2.19-3.61-2-7.65-2.11-11.62-.11-3.57-1.24-6.56-4.63-8.22a6.68,6.68,0,0,1-3.88-5.9c-.38-4.14-1.16-8.25-1.33-12.38-.29-7.36,4.21-13,8-18.49,3.43-4.89,7.15-9.43,9.42-15.1,1.14-2.85.86-4.46-1.19-6.49-1.76-1.74-4.55-4.08.55-5.42,1.45-.38,1.14-1.86,1.16-3a72.79,72.79,0,0,1,.12-8c.28-2.22.72-3.88-2.48-3.89-1.83,0-1.66-1.81-1.61-3.1.08-2.16.38-4.3.48-6.46.22-4.23-1.61-6.73-5.91-7.85-7.05-1.84-13.9-3.71-21.06-.06-1.41.72-4.89,3.34-6-1.44-.08-.34-6.44.11-6.95,1.91-1.51,5.28-5.86,5.17-9.41,5.86-5.16,1-9.67,3.2-14.39,5.28A62.33,62.33,0,0,1,973,884.28l31.77-12.3c-2.9-2.56-6.07-2-8.4-4.57-2-2.25-1.52-3.26-.49-4.78,2.55-3.79,6.45-5.76,10.77-6.56,3.75-.7,7.27-2.44,11.21-2.26,1.36.06,2.91-.49,2.73-2.19-.16-1.5-1.83-1-2.87-1.32-2-.65-5.47,1.14-5.65-2.06s3.53-3,5.76-3.5c2.94-.74,5.73-2.41,9.13-.91,2.29,1,3.37-.76,2.82-3.07s-.07-3.52,2.35-3.93c10.52-1.8,20.24-6.69,30.89-8,.83-.1,1.76-.66,2.43-.43,12,4.19,25,2.85,37,6.63a8.57,8.57,0,0,0,3.4.4c6.07-.64,12.26-.85,18.16-2.24,11-2.58,21.21,1.06,31.7,2.69,1.07.16,2.45.27,2,2.54-.62,2.89,2,1.18,3.2,1.49,5.38-1.1,10.41-3.71,16-3.76,4.9,1.81,9.68,4.06,15.18,3,2.08-.39,4.36.13,5.26-2.68a3.52,3.52,0,0,1,3.21-2.11c9.44-.36,14.49-7.8,20.9-12.92,3.47-2.77,7-2.23,11.51-1.9a11.14,11.14,0,0,1-8.21,4.51c-2.28.22-4.67.79-4.67,3.46,0,2.37-1.25,5.34,2.28,6.88,4,1.73.18,4-.54,6.64,5-.85,8.1-3.51,11-6.27,1.47-1.4.84-2.33-1.17-3-4.6-1.63-4.65-2.85-.92-6.27a20.58,20.58,0,0,1,8.73-4.63c.94-.26,2.11-1,2.81-.12,1.06,1.26-1.44,1.65-.85,3.29a44.27,44.27,0,0,1,12.27-3.21c10-1.2,15.25,7.37,23.32,9.84,2.09.64,1.81,2.87.65,4.67-1.3,2-.61,3.09,1.67,3.33l.5,0c2.68.41,5.51,2.07,5.68,4.21.28,3.36-4,3.22-6,4.88-2.27,1.82-3.59.05-4.94-1.49-1-1.09-1.84-2.72-3.61-1.29-1.55,1.26-1,2.82.18,3.9,2.55,2.39,2.07,4.33-.17,6.69-2.51,2.64-3.73-.16-5.47-.89-.58-.24-1.15-.51-1.83-.81-.81,2.23,2.48,2.91,1.22,5.49-4.47-1.3-9.58-1.06-12.55-6.15-1.8-3.08-4.37-4.44-7.89-2.17-1.32.85-3.24,1.18-3.69-.78-.4-1.78,1.51-2.33,3-2.72a3.66,3.66,0,0,1,2,0c6.48,2.26,8.82-4.73,13.67-6.13.71-.2.7-1.42.36-2.26a1.71,1.71,0,0,0-2-1,5.31,5.31,0,0,0-2.26.87c-1.72,1.32-4.46,3.55-5.41,1.32-1.38-3.25,2.76-1.91,4.3-2.89.8-.51,2.2-.58,1.69-1.93a4.08,4.08,0,0,0-3.33-2.74c-3.47-.15-7,.16-10.44.3-1.73.06-1.27,1.56-1.73,2.52-3.5,7.39-10.31,10.84-16.52,8.47C1223,845.67,1221.85,847,1219.82,847Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1881,1229.2c-.13-1.92-2.25-3.61-.77-6a10,10,0,0,0-2.09,1.07c-3.13,2.64-5.83,6.29-7.32-1.58-.8-4.2-10-7.48-15.27-6a173.72,173.72,0,0,0-21.51,7.24c-6.55,2.79-14.52,3.25-21.62,5.88-1.69.63-4-.52-5.27-2.21-1.67-2.22.82-3.16,1.72-4.54,3.66-5.69,3.79-12.24,2.47-18.2-1.82-8.23.06-15.87,2.6-23.1,1.36-3.86,6.75-5.87,11.16-7.37,3.93-1.34,7.89-2.61,11.8-4,1.74-.6,3.8-1.26,4.51-2.94,3.7-8.74,13.66-11.16,18.6-18.67,1.58-2.38,3.72-1.18,5.46.57,3.29,3.31,5.17,3,7.3-1.13,1.61-3.1,2.93-6.48,7.16-6.88.87-.08,1.83-.55,1.82-1.42-.1-5.54,2.21-2.56,4.17-1.26,2.53,1.69,5.12,3.15,8.32,1.47a2,2,0,0,1,3,.74c.62,1.12-.08,1.84-.69,2.65-.9,1.18-1.62,2.52-2.6,3.63-2.27,2.59-1.88,4.79.83,6.66s4.24,5.06,7.17,6.87,4.93,1.77,6.94-1.44a31.3,31.3,0,0,0,4.13-12.67c.46-3.34.45-6.93,3.09-9.71,2.14,1.42,2,3.59,2.54,5.42.8,3-.09,6.63,4.3,8.1,1.64.55,1.72,3.5,1.74,5.47a21.38,21.38,0,0,0,6,14.81c3.13,3.43,3.34,8.73,6.42,12.42a5.51,5.51,0,0,1,.54,1.39c1.56,3.8,5.19,6.54,3.49,11.82-2.9,9.07-5.14,18.27-13,24.67-5.08,4.16-8.5,9.75-12.69,14.68-1.8,2.12-3.6,3.79-6.53,4a10.2,10.2,0,0,0-5.76,2.73c-2,1.69-4,4-6.55.52-.52-.73-1.42-.38-2.27-.18-9,2.18-12.27-.32-12.69-9.65a6.75,6.75,0,0,0-.66-1.87A1.37,1.37,0,0,1,1881,1229.2Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1374.48,794.07l15.28-.07c5.4,1.45,11,1.69,16.17,4.58,3.29,1.85,7.37-.93,11.93,0-4.36,2.84-8.28,4.77-12.71,5.58-2.82.51-4.39,1.7-2.68,4.73.92,1.64.66,2.8-1.13,3.57-.43.19-1.13.71-1.08,1,1.24,6-4.12,6.94-7.28,9.59-.61.51-1.51,1.35-1.43,1.93.84,6.65-3.84,6.74-8.43,8-9.12,2.41-18.45,4.54-26.19,10.53a6.77,6.77,0,0,1-3.7,1.35c-11.84.32-18.52,8.35-25.08,16.57-1.24,1.55-2.12,3.47-4,4.36-3.94,1.84-13.21-2.09-14.77-6.23-2.3-6.09-2.13-12.46-1.43-18.71.46-4.07,4.17-6,7.67-7.48-1.15-2.27-4.34.8-4.48-2-.13-2.37,2.79-1.78,4.75-3.11-3.78-1.17-3.54-3.22-2.33-6.12s-.23-5.31-3.31-6.73c-4.81-2.22-10.16-1.62-15.07-3.16-2.54-.8-6.67-.44-6.43-4,.21-3.14,4.11-1.78,6.35-2.31,2.74-.65,5.61-.69,8.39-1.19,1.78-.32,4.1.06,4-3.15,0-1.65,2-1.44,3.23-1.61,6.92-.93,13.86-2.55,20.77-2.46C1346,797.67,1360,793,1374.48,794.07Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1943,1134.28c-5.06-.4-8.85-2.17-11.73-6.1-3.93-5.34-5.26-5.53-9.61-1.09-2.84,2.9-5.75,2.85-9,1.38-1.51-.68-2.92-1.63-4.48-2.16a34.12,34.12,0,0,0-4.77-.91c3-6.81,1.28-10.54-5.78-12.86-2.84-.93-5.64-2-8.52-2.75a4.17,4.17,0,0,1-3.43-3.2c-.53-2.66-1.59-4.58-4.35-5.47a2.15,2.15,0,0,1,.65-4.25c3.49-.19,7.27-2.21,8.58,4,1.28,6.05,5.08,6.55,9.19,2,2.15-2.41,4.44-3,7.55-2.12a67.84,67.84,0,0,1,18.89,8.84c3.27,2.17,4.93,6.39,9,7.79.53.18,1.2,1.76,1,2.08-4.27,5.75,1.89,7.4,4.15,10.48C1941.26,1131.15,1943.16,1131.7,1943,1134.28Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1825.17,1110.43c-4.55-.76-8.82-3.66-13.86-2.54a2,2,0,0,1-2-1.92c.39-4.08-2.3-7.11-3.31-10.67-1-3.4-.74-6.85,4.35-6.88a2.29,2.29,0,0,0,1.69-.82c5-7.67,14.68-10.71,19.13-19,.27-.5,1.15-1.18,1.46-1.06,2.58,1,4.08,3.31,5.92,5.19,1.47,1.5.93,3.16-.16,4.52-3.07,3.84-4.78,7.65-.68,11.91a2.37,2.37,0,0,1,.24,1.79c-4.63,2-2.48,8.21-6.62,10.56-1.44.82-1.3,2.63-1.18,4.11C1830.44,1109.23,1828.42,1110.32,1825.17,1110.43Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1250.82,809.18c-2-.77-4.25-.11-5.88-1.9-2-2.24-1.31-3.91,1.35-5.27,10.81-5.51,22.85-2.55,34.08-5.33s22.82,0,34.29-.35c-7.4,3.31-15.55,3.51-23.15,5.9-4.12,1.3-8.37,2.11-12,4.57-8.17,5.47-17.5,5-26.7,5.2-2.1,0-4.35-.24-6.12,2.39,5.3-.23,10.35-1.08,15.51,1.33-2.78,3.36-6.23,1.31-9.05,2a25.14,25.14,0,0,1-12.83-.07c-1.5-.44-3.33-.15-4.09-2.24-.56-1.52-1.74-1.31-2.7-.18-4.63,5.4-10.16,1.06-15.24,1.28-1.72.07-1.72-1.62-1-3,1.26-2.36,3.2-2.67,5.52-1.94,1.23.39,1.57,1.56,2.29,2.44,1.6,1.95,3.82,2,4.58-.48,1.26-4.06,4.19-4.05,6.58-2.49C1241.9,814.67,1246.05,810.63,1250.82,809.18Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1579,1184.42a13.51,13.51,0,0,1,2.62-8.39c2.15-3,1.9-6.53,1.18-10.06-1.19-5.86.15-8.59,5.8-10.81,4.73-1.85,7-5.83,9.76-9.56,1-1.38,1.85-3.82,3.92-3.14s1.83,3.21,2.32,5.12c1.08,4.32-2.06,7.39-3,11.08-2.66,9.89-5.47,19.74-8.35,29.58-1.07,3.64-4.15,5.34-7.56,5.5-3,.14-5.15-2.16-6.2-5C1578.91,1187.47,1579.1,1185.88,1579,1184.42Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1161.89,838.05c-4.82-3.66-4.45-7.67-.83-11.93.12-.14-.09-.57-.21-1.18-3.18,1.38-5.86,3.78-9.41,4-2,.14-4.29.57-4.9-2-.57-2.42,1.88-2.27,3.22-2.9,2.51-1.18,5-1.91,7-4.38,2.53-3.22,14.78-2.31,17.2,1.09,2.12,3,5.35,2.1,8,3s5.3,3,7.69-.72c.71-1.1,2.64-2,4-1.15,1.67,1.06.88,3,.51,4.54-.25,1.09-1.07,1.93-.82,3.27,1,5.26-1.22,7.19-6.64,5.9-3.58-.85-7.16-1.3-10.79-.31a40.3,40.3,0,0,1-10.06,3.39C1164.4,838.89,1163.06,839.32,1161.89,838.05Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1796.49,1106.07c-2.55,2.34-1.1,5.88-2.31,8.69s-3.58,3.12-5.79,1.48c-5.06-3.74-9.73-7.56-11.4-14.42-1.58-6.5-4.44-12.68-10.2-17.11-3.16-2.43-4.13-7.21-8.48-8.67-.21-.08-.38-.94-.23-1.29a1.41,1.41,0,0,1,2.07-.73c4.55,2.59,10.21,3.44,13.4,8.17a20.67,20.67,0,0,0,5.74,5.41c3.54,2.45,7.49,4.07,8.47,9.48.5,2.78,4.46,5,7,7.32C1795.27,1104.88,1796.32,1104.79,1796.49,1106.07Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls-4" d="M1582.26,1051c-1.76-7.87-8.66-11.76-13.33-17.39-4.36-5.25-8-11.06-9.27-17.92a18,18,0,0,0-2.65-6.35,116,116,0,0,1-9.28-18.68c-.44-1.07-1.8-2.43.09-3.4,1.38-.7,2.65,0,3.52,1.09,5.07,6.5,10.29,12.94,12.59,21.1.59,2.08,1,4.41,2.83,5.67,4.6,3.1,5.69,8.88,9.74,12.39.83.72,2.6,2.89-1,2.19-.91-.17-1.07.95-.6,1.35,4.2,3.57,4.33,9.16,6.89,13.53.31.52,1,.8,1.58,1.18C1583,1047.46,1582.62,1049.2,1582.26,1051Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M2002,1240.51c-6.32,4.46-10.21,11.84-17.93,13.4-5.75,1.16-9.16,5.54-13.84,7.74-7.11,3.33-12.36,9.42-19.74,12.07a4,4,0,0,1-5.16-1.8c-.69-1.59,1.68-2.08,2.8-2.88,8.53-6.06,18.37-10,26.65-16.49,1.78-1.39,4.53-1.26,7-.64,2.76.69,4.85-1.71,4-3.33-1.49-2.95-.29-3.39,1.8-4.67,2.37-1.46,2.85-4.35,3.35-7,.3-1.63.26-3.32.57-4.94.23-1.17-.2-3.11,1.73-3,1.69.09,1.7,1.74,1.64,3.12a5.75,5.75,0,0,0-.09,1.48C1995.64,1237.17,1995.76,1241.5,2002,1240.51Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1424.78,902.38c-.52-3.06,4.62-4.33,0-6.17,1.43-1.89,1.81-4.53,3.86-5.92,2.94-2,1.58-4.1-.4-4.84-4-1.49-6.16-3.82-5.4-8s3.84-6.31,8.08-6.76a10.8,10.8,0,0,0,2.43-1.22c-1,2.56-2.84,4.91.92,5.5.21,0,.55.92.42,1.26-2.91,7.64,4.67,10.4,7.32,15.42.45.85,3,1.07,2,2.63-1.12,1.84-.44,5.21-3.47,5.45C1435.27,900.13,1429.87,899.68,1424.78,902.38Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1865.05,1125.62l-11.5,8.45c-.14-3.57,3.42-3.44,4.27-6.33-6.32,2.39-12.55,1.26-18.68,1.33a141.43,141.43,0,0,1-35.87-4.08c-3.24-.81-5.42-3.72-8.7-4.74-1.87-.58-.6-2,.46-2.4a5.66,5.66,0,0,1,6.47,1.12c1.57,1.57,3.92,2.61,5.4,1.5,3.88-2.89,7.49-.06,11.18-.21.8,0,1.87-.07,2.08.94,1.11,5.33,5.58,3.54,8.84,4.14,1.42.25,3-.51,4.41-.16,9.31,2.4,18.6.89,27.9.15A31.92,31.92,0,0,1,1865.05,1125.62Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1839.12,1105.27c1.29-4.68,2.37-9.36,3.92-13.88.79-2.31,3.18-2,5.2-1.69,3.44.54,6.88,1.56,10.18-.59a1.28,1.28,0,0,1,1.81.11,1.69,1.69,0,0,1-.3,2.25,6.36,6.36,0,0,1-7.58,2.12c-1.56-.57-3-1.37-4.63-1.83a2.61,2.61,0,0,0-3.31,1.52,4.43,4.43,0,0,0,.56,4.71c.91,1.2,2,1,3.08.31,1.34-.79,3-1.62,4.12-.32,1.3,1.47-.54,2.25-1.45,3.06s-.74,1.66-.32,2.67c.58,1.37,1,2.81,1.47,4.21.84,2.33,3.71,5.46.18,6.83-4.06,1.59-3.49-3.22-4.77-5.38-.32-.54-.15-1.36-.46-1.91s-.9-1.17-1.38-1.19c-1.15,0-1.17,1-1,1.8.3,2,.88,3.91.26,5.91-.42,1.38-1.14,2.55-2.77,2.28s-1.6-1.62-1.38-2.77C1841.07,1110.53,1839.56,1108,1839.12,1105.27Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1854.86,1048.64c-2.16-.8-3-3-4.65-4.35-2.4-2-4.8-3.62-5.81,1.35-5.25-5.62-7.06-16.68-3.77-22.15,1.27-2.09,3.06-2.2,4.17,0a10.92,10.92,0,0,1,.74,8.63c-1.24,3.78-.75,6.88,4.27,7.45,2.33.26,4.64,1.13,4.21,4.38-.06.39.3,1.15.59,1.22,5.18,1.27,4.66,5.7,5.34,9.47a1.1,1.1,0,0,1-1,1.09c-1-1.63-.92-3.85-2.85-4.93C1855.26,1050.34,1855.8,1049.07,1854.86,1048.64Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1172.6,813.17c4.09-3.08,8.5-3.26,12.68-4.11a1.83,1.83,0,0,1,2.37,1c2.72,4.9,6.65,5.79,11.59,3.11,1.26-.68,2.55-2.81,4.21-.8.65.79,1.85,1.83,1.17,3.06-.93,1.69-2.73,1.6-4.41,1.64s-3.93-.4-5.42.34C1186.42,821.58,1179.75,817.51,1172.6,813.17Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1391.42,854.11c-2.35.37-3.67-1.61-5.43-2.76-1.08-.71-1.26-2.32-2.86-2.56-1.24-.2-3.17-.53-2.74-2.13a3,3,0,0,1,4-1.95c5,2.64,10,1,15.07.53,2.36-.23,5.17-.51,5.94,2.19.87,3.07-2.11,3.63-4.25,4.35C1398.05,852.82,1394.94,854,1391.42,854.11Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1412.73,897.12c-2.72-.64-5.14-1.07-2.21-4,.35-.35,1-.94.9-1.09-3.32-5.93,3.8-5.28,5.36-8.17.93-1.75,3.69-.92,5.46.14,2.16,1.31.57,2.85,0,4.31-.71,2,.11,4.72-2,5.91A52.42,52.42,0,0,1,1412.73,897.12Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1164.08,1006.62c6.33-.1,12.26,1,16.58,6.16,1.45,1.72,5.56,1.29,4.81,3.75s-4.42,1.25-6.77,1.8c-3.29.78-5.81.23-6.35-3.92-.34-2.62-2.73-3.52-5-4.33s-4.3-1.65-6.44-2.48C1161.34,1005.19,1162.89,1006.47,1164.08,1006.62Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1859,1055.75l1-1.09c4,3,5.11,10.23,1.86,14.23-.92,1.14.49,4.06-2.3,3.46-1.83-.39-2.71-2.22-3.41-4-1.28-3.28-1.43-3.27-6.23-1.9.64-3.14,1.87-5.11,5.4-5.27C1858.57,1061,1860,1059.1,1859,1055.75Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1204.79,1021.93c.19,1.23-.48,1.82-1.35,1.75-5.29-.43-10,3.91-15.47,1.94-.87-.32-2.24.09-2.37-1.2s1.14-1.37,2.09-1.55c1.13-.21,2.31-.25,2.83-1.59s.09-3.79,2.65-3.33c3.71.67,8.06-1,10.94,2.86C1204.4,1021.2,1204.61,1021.64,1204.79,1021.93Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1899.54,1251.79c-1.24,4.41-3.46,7.63-7.46,9.53-1.41.67-2.84,1.11-4.2.1s-.81-2.38-.49-3.65c.37-1.43.86-2.84,1.26-4.27.59-2.1,1.5-3.23,3.87-1.88C1894.63,1252.83,1897,1251.18,1899.54,1251.79Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1219.82,847a8.18,8.18,0,0,1,4.13-2.85c0,3.08,2.79,3.79,4.54,5.38,1.09,1,2.72,1.89,1.65,3.57-.84,1.3-2.42.94-3.55.14-2.38-1.67-4.24-.71-6.24.77-1.24.92-2.62,1.22-3.85-.42-1.46-2,.73-2.07,1.3-3C1218.54,849.42,1220.38,848.87,1219.82,847Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1202.35,822.48c5.1,1.24,7-3.66,11-3.05,1.37.21,3.36-.76,3.78,1.21a4.19,4.19,0,0,1-1.59,3.94C1211.23,828.18,1207,827.9,1202.35,822.48Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1854.86,1048.64c.42.72.84,1.45,1.25,2.18-1.45,1.3-1.64,2.55-.4,4.26s.22,2.81-1.51,3.33c-3,.9-3.16-2.33-4.76-3.47a3.85,3.85,0,0,1-1.25-4.48c.44-1.4,1.55-.73,2.46-.44C1852.38,1050.57,1854.26,1051.54,1854.86,1048.64Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1840.09,1002.29c-.51,2.14-.37,4.6-2.19,6.3-.53.5-1.16-.19-1.62-.68a5.93,5.93,0,0,1-1.2-6.44c.58-1.64.77-4.22,3-3.87S1839.61,1000.53,1840.09,1002.29Z" transform="translate(-964.98 -793.12)"/><path class="cls-11" d="M1161.89,838.05c4.78-.47,9-3.62,14-2.78l1,.9c-4.9,3.18-10.18,4.7-16,3.76Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1226.85,808.88c-2-.88-4.75-.57-6.38-2.75-.15-.2.15-1,.46-1.21,2.24-1.37,4.47-.42,6.58.36,1.14.43,3.5.05,2.92,2.29C1230.09,808.9,1228.4,809,1226.85,808.88Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1803.68,1017.74c1.27,0,2.43.35,2.19,1.91-.36,2.31-1.51,4-4.13,4a2.15,2.15,0,0,1-2.29-2.58C1799.77,1018.76,1801.57,1018,1803.68,1017.74Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1199.18,810c-.08-.48-.18-.68-.13-.78a7.71,7.71,0,0,1,7.11-4.35,1,1,0,0,1,.56,1.54A8.77,8.77,0,0,1,1199.18,810Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1236.81,809.22a3.09,3.09,0,0,1-2.74-3.35c.1-1.55,1.64-2,3-2.06,2-.09,2.27,1.56,2.35,3.05S1238.62,809.29,1236.81,809.22Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1164.08,1006.62l-3.14,1c-2.5-.15-3.71,1.74-5.23,3.2-.58.56-1.38,1-2.13.21s-.25-1.52.3-2.16C1156.71,1005.52,1160.19,1005.1,1164.08,1006.62Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1881,1229.2v2c-1.29,1-2.55,2.06-3.86,3a1.38,1.38,0,0,1-2.15-.29c-.6-.94,0-1.44.85-1.87C1877.59,1231.16,1879.3,1230.17,1881,1229.2Z" transform="translate(-964.98 -793.12)"/><path class="cls" d="M1239.82,906l-7.4,3.58c1.49-2.67,3.47-4.44,6.48-4.49Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls-5" d="M1475.61,949.07c2.79,1.29,4.72,2.2,6.66,3.07,1,.44,2.38.62,2.55-.5.4-2.56,2.6-3.24,4.07-4.71,1.07-1.06,2.22-2.52,1.65-4-2.29-5.74,1.78-3.55,5.2-3.34-3.08-4-7.36-4.74-10.64-6.65-4-2.35-6.27-5.84-8.68-9.36-1-1.49-1.05-3.33.59-4.46,2-1.42,2.55.83,3.26,1.87a30.43,30.43,0,0,0,12.49,10.4c3.44,1.65,6.23,3.61,5.76,8.25a6.15,6.15,0,0,0,3.38,5.76,7.64,7.64,0,0,1,4,4.75c.58,1.84,2.69,3.72,4,1.84s5.78-2.93,3.15-6.72c-.65-.94-1.79-1.56-2.35-2.54-.73-1.29-2.25-3.39,1.35-2.6.16,0,.38.22.46.17,7.55-5.45,7.75,1.64,8.59,5.57,1.36,6.34,6.81,6.93,11.06,9.33,4.91-4.22,10.92,3.19,16-1.58,1.33-1.25,3-.1,3.54,2,1.28,4.6-1,8.34-2.47,12.37-1.82,4.83-5.18,5.2-9.93,6-10.74,1.71-19.79-2-29.15-5.82-5.34-2.19-9.71.85-10,6.69-.13,2.46-1.14,2.88-3.17,2-4.89-2.16-10.61-2.52-14.45-7-1.41-1.67-3.8-1.73-6-2-4.75-.59-6.8-3.82-5.65-8.43s-1.92-8.9-6.75-8.43c-8.4.83-16.77,2-25.12,3.27-1.57.24-3.54.93-4.42,2.09-3.3,4.34-7.66,2.89-11.83,2.65-1.12-.07-2.44-.22-2.64-1.75a2.75,2.75,0,0,1,1.31-2.53,4,4,0,0,1,1.69-1c8.43-.87,13.2-5.77,15.63-13.6.76-2.43,2.9-4,5.31-5,1.72-.73,3.35-1.72,3.55-3.82.33-3.51,2.93-4.27,5.35-3.39,4,1.45,6.77-.43,9.59-2.46s4.66-1.85,6.38,1.37a21,21,0,0,0,10.46,9.57,20.86,20.86,0,0,1,5.21,3.76c1.34,1.19,2.86,2.58,1.87,4.71a4.78,4.78,0,0,1-5.13,3.13A7.29,7.29,0,0,0,1475.61,949.07Z" transform="translate(-964.98 -793.12)"/><path class="cls-1" d="M1560.75,936.36c-4.38-.28-9-.64-13.26-2.88-3.75-1.94-7.47.15-11.12,1.12-1.28.33-2.49,1.18-3.75,1.23-2.9.12-5.95-.5-7.74-2.74s-.34-4.62.72-7a28.37,28.37,0,0,1,5.34-8.3c2.44-2.53,5.38-2,6.93,1.16,2.17,4.41,4,5,7.91,2.62.82-.5,1.89-.67.81-2.08-2.11-2.78.25-3.8,2.21-4.7,1.32-.6,3.09-1.6,4.21-.49s0,3-.91,3.91c-2.15,2.21-1.31,3.42,1,4.34,4.13,1.63,7.37,4.45,10.47,7.49,1.21,1.19,3.44,2,2.07,4.37A3.94,3.94,0,0,1,1560.75,936.36Z" transform="translate(-964.98 -793.12)"/><path class="cls-4" d="M1474.65,885.28c.53-1.13,1-2.7,3.83-2.64,4.55.08,8.27-3.55,8.84-8.26.43-3.45,4.65-3.63,5.16-6.24.55-2.87-4.7-3-4.13-6.6a9.32,9.32,0,0,1,5.74-7.52c2.18-1,4-1.8,4.74-4.5,1.09-3.78,4.6-3.29,7.53-3,1.88.22,1.35,1.58.36,2.47a16.68,16.68,0,0,1-3.94,3c-4.34,1.94-4.79,5.31-4.25,9.46s3,5.66,6.9,5c3.27-.51,6.52-1.19,9.78-1.8,1.51-.28,3.45-.57,3.66,1.31s-1.81,2.09-3.29,2a20.13,20.13,0,0,0-7.42.41c-2.09.64-4.24,1.35-1.27,3.78a2.35,2.35,0,0,1,.42,3.53c-.82,1.11-1.65.33-2.59,0-4.11-1.38-5.43-.38-5.38,3.91.07,5.29-2.6,7.15-7.45,5.21-.59-.23-1.42-.65-1.83-.42C1485.12,887.2,1480,888.28,1474.65,885.28Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls-4" d="M1602.36,952.83c-4.33.62-6.84-2.67-10.13-4-1.74-.71-.65-2.77.11-4.36,1.67-3.48,2.07-6.75-2-9.18-4.27-2.55-5.83-7.21-8.17-11.24a2.56,2.56,0,0,1-.31-1.41c.31-3.22,11.54-9,14.56-7.57,1.25.6,2.41,1.17,2.12,2.89a2.88,2.88,0,0,1-2.45,2.58c-4.18,1.27-4.35,2.92-1.5,6.1,2.11,2.34,5.86,3.41,5.91,7.52,0,1.05,1.18.65,1.91.13,2.16-1.55,3.13.18,3.72,1.66.88,2.24-1.11,1.75-2.29,2-3.66.83-1.55,2.61-.35,3.66a8.68,8.68,0,0,1,3.43,6.12C1607.45,952.08,1605.76,953.13,1602.36,952.83Z" transform="translate(-964.98 -793.12)"/>
                    <path class="cls" d="M1620.28,829.17a3.93,3.93,0,0,1,3.43,1.62c3.65,4.71,3.65,4.72,9.37,3.9-2.26,1.63-3.81,2.79-3.1,5.38.39,1.43-.89,3.17-2.71,3.66-1.15.3-3,0-2.08-1.43,2.58-4.07-.42-5.94-2.56-8.36a8.77,8.77,0,0,1-2.27-4.85Z" transform="translate(-964.98 -793.12)"/></g>
                    
                    <g id="item1" onClick={() =>itemClick("item1")} ><circle class="circle-1-true" id="item1-circle-1" cx="106.25" cy="160.19" r="8.03"/><circle class="circle-2-false" cx="106.25" cy="160.19" r="16.75"/></g>
                    <g id="item2" onClick={() =>itemClick("item2")} ><circle class="circle-1-false" id="item2-circle-1" cx="255.36" cy="298.74" r="8.03"/><circle class="circle-2-false" cx="255.36" cy="298.74" r="16.75"/></g>
                    <g id="item3" onClick={() =>itemClick("item3")} ><circle class="circle-1-false" id="item3-circle-1" cx="235.61" cy="346.74" r="8.03"/><circle class="circle-2-false" cx="235.61" cy="346.74" r="16.75"/></g>
                    <g id="item4" onClick={() =>itemClick("item4")} ><circle class="circle-1-false" id="item4-circle-1" cx="565.89" cy="195.52" r="8.03"/><circle class="circle-2-false" cx="565.89" cy="195.52" r="16.75"/></g>
                    <g id="item5" onClick={() =>itemClick("item5")} ><circle class="circle-1-false" id="item5-circle-1" cx="800.49" cy="177.69" r="8.03"/><circle class="circle-2-false" cx="800.49" cy="177.69" r="16.75"/></g>
                </svg>
            </div>

            <div className="container-top-list">
                <div onClick={() =>itemClick("item1")} className="container-top-list-item item-true" id="list-item1">
                    <p>Grand Canyon, USA</p>
                </div>
                <div onClick={() =>itemClick("item2")} className="container-top-list-item" id="list-item2">
                    <p>Amazonia, Brazil</p>
                </div>
                <div onClick={() =>itemClick("item3")} className="container-top-list-item" id="list-item3">
                    <p>Salar de Uyuni, Bolivia</p>
                </div>
                <div onClick={() =>itemClick("item4")} className="container-top-list-item" id="list-item4">
                    <p>Giza Pyramids, Egypt</p>
                </div>
                <div onClick={() =>itemClick("item5")} className="container-top-list-item" id="list-item5">
                    <p>Rainbow mountains, China</p>
                </div>
            </div>
        </div>
        <div className="container-bottom">
            <p className="value_name" id="value_name">Grand Canyon, USA</p>
            <img id="bg_img" src={bg1}></img>
        </div>
    </div>
  )
}

export default Map;