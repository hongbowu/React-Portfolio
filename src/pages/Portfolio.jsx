export default function Portfolio() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}> 
        <div style={{ backgroundImage: 'url(/image/quiz.jpg)',  backgroundSize: '400px 400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '35vh', width: '25%', margin: '5px', position: 'relative' }}>
            <a style={ {margin:'5px'}} href="https://github.com/hongbowu/Code-Quiz-Fun.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a style={ {margin:'5px'}} href="https://hongbowu.github.io/Code-Quiz-Fun/">
                <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
        <div style={{ backgroundImage: 'url(/image/generator.png)',  backgroundSize: '400px 400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '35vh', width: '25%', margin: '5px', position: 'relative' }}>
            <a style={ {margin:'5px'}} href="https://github.com/hongbowu/Password-Generator.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a style={ {margin:'5px'}} href="https://hongbowu.github.io/Password-Generator/">
            <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
        <div style={{ backgroundImage: 'url(/image/schedule.jpg)',  backgroundSize: '400px 400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '35vh', width: '25%', margin: '5px', position: 'relative' }}>
            <a style={ {margin:'5px'}} href="https://github.com/hongbowu/Work-Day-Scheduler.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a style={ {margin:'5px'}} href="https://hongbowu.github.io/Work-Day-Scheduler/">
                <img className="logo" src="/image/deploy.jpg" />    
            </a>
        </div>
        <div style={{ backgroundImage: 'url(/image/weather.jpg)',  backgroundSize: '400px 400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '35vh', width: '25%', margin: '5px', position: 'relative' }}>
            <a style={ {margin:'5px'}} href="https://github.com/hongbowu/Weather-Dashboard.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a style={ {margin:'5px'}} href="https://hongbowu.github.io/Weather-Dashboard/">
                <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
        <div style={{ backgroundImage: 'url(/image/images3.jpg)',  backgroundSize: '400px 400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '35vh', width: '25%', margin: '5px', position: 'relative' }}>
            <a style={ {margin:'5px'}} href="https://github.com/hongbowu/Text-Editor.git">
                <img className="logo" src="/image/GitHub.png" />
            </a>
            <a style={ {margin:'5px'}} href="https://salty-caverns-93430-144d5b47f09d.herokuapp.com/">
                <img className="logo" src="/image/deploy.jpg" />
            </a>
        </div>
  </div>
  );
}
