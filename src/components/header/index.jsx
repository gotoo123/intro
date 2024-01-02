import React from 'react';
import './index.less';

const Header = () => {
  return (
    <div className={`intro-header`}>
      <section className={`intro-title`}>
        <div className={`intro-title-left`}>
          <h1>GOTOO</h1>
          <h3>Name</h3>
        </div>
        <div className={`intro-title-right`}>
          <h1>前端开发工程师</h1>
          <h5>/成都</h5>
        </div>
      </section>

      <section className={`intro-info`}>
        <div className={`intro-info-left`}>
          <div>男 / 1999.10</div>
          <div>本科 / 2021年毕业 · 3年工作经验</div>
          <div>西安电子科技大学 · 计算机科学与技术</div>
        </div>
        <div className={`intro-info-right`}>
          <div>18681952753</div>
          <div>me@163.com</div>
        </div>

      </section>
    </div>
  )
}

export default Header;