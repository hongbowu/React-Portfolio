export default function Portfolio() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}> 
        <div className='portfolioCard' style={{ backgroundImage: 'url(/image/quiz.jpg)' }}>
            <a className='pLink' href="https://github.com/hongbowu/Code-Quiz-Fun.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a className='pLink' href="https://hongbowu.github.io/Code-Quiz-Fun/">
                <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
        <div className='portfolioCard' style={{ backgroundImage: 'url(/image/generator.png)' }}>
            <a className='pLink' href="https://github.com/hongbowu/Password-Generator.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a className='pLink' href="https://hongbowu.github.io/Password-Generator/">
            <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
        <div className='portfolioCard' style={{ backgroundImage: 'url(/image/schedule.jpg)' }}>
            <a className='pLink' href="https://github.com/hongbowu/Work-Day-Scheduler.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a className='pLink' href="https://hongbowu.github.io/Work-Day-Scheduler/">
                <img className="logo" src="/image/deploy.jpg" />    
            </a>
        </div>
        <div className='portfolioCard' style={{ backgroundImage: 'url(/image/weather.jpg)' }}>
            <a className='pLink' href="https://github.com/hongbowu/Weather-Dashboard.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a className='pLink' href="https://hongbowu.github.io/Weather-Dashboard/">
                <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
        <div className='portfolioCard' style={{ backgroundImage: 'url(/image/images3.jpg)' }}>
            <a className='pLink' href="https://github.com/hongbowu/Text-Editor.git">
                <img className="logo git" src="/image/GitHub.png" />
            </a>
            <a className='pLink' href="https://salty-caverns-93430-144d5b47f09d.herokuapp.com/">
                <img className="logo deploy" src="/image/deploy.jpg" />
            </a>
        </div>
  </div>
  );
}
