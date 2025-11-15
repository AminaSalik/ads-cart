import React from 'react'
import "./home.css"; 
import myImage  from "../assets/poto.jpeg"

export default function Home() {
  return (
  <div className="shopping-card">
  <div className="img-container">
    <img src={myImage }alt="hoodie" />
  </div>
  <div className="body-container">
    <div className="row">
      <h2>Asia Auto Parts</h2>
    </div>
    <div className>
      <div className="text-end">
        <b>
          إختصاصي في أجزاء السيارات الأسيوية لافيراي سالمية
          أجي تشري بياستك وتوصلك حتى لمدينتك
          <span className="time"> في 24 ساعة </span>
        </b>
      </div>
      <br />
      <div className="text-end">
        <span style={{color: '#333131'}}>
          كاردات مونتيسورات فيزيات كليمايير تيربو فوشيطات
        </span>
      </div>
    </div>
    <div className="what">
      <a className="whatsapp-circle" href="https://api.whatsapp.com/send?phone=212638798360&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%85%D9%86%20%D9%87%D9%86%D8%A7%20%F0%9F%98%8D" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16.027 3.003c-7.155 0-12.974 5.82-12.974 12.974 
0 2.285.597 4.511 1.731 6.48l-1.836 6.71 6.879-1.803a12.9 
12.9 0 0 0 6.2 1.582h.001c7.154 0 12.973-5.82 
12.973-12.974S23.18 3.003 16.027 3.003zm6.94 18.508c-.291.817-1.688 
1.59-2.383 1.693-.61.092-1.393.13-2.244-.14-.517-.166-1.18-.383-2.033-.75-3.58-1.55-5.91-5.17-6.09-5.41-.18-.24-1.46-1.94-1.46-3.7 
0-1.76.92-2.63 1.24-2.99.32-.36.7-.45.94-.45.24 0 .47.003.68.013.22.01.51-.083.8.613.29.7 
1.01 2.45 1.1 2.63.09.18.15.39.03.63-.12.24-.18.39-.36.61-.18.22-.38.49-.54.66-.18.18-.37.38-.16.74.21.36.93 
1.54 2 2.5 1.38 1.24 2.54 1.63 2.9 1.81.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.32.12 
2.03.96 2.38 1.14.35.18.58.27.66.42.08.15.08.87-.21 1.69z" />
        </svg>
      </a>
    </div>
  </div>
</div>

  )
}
