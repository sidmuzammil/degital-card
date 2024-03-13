import "./Home.css"

const IntroLeft = () => {
  return (
    <div className="intro-left">
      <h1>Meet my friend: One tap,<br /> endless business possibilities</h1>
      <p>Discover a world of efficiency and opportunity with  'Meet my friend'.  With just one tap, our innovative platform opens the door to endless business possibilities, simplifying connections and empowering growth.</p>
      <div className="intro-buttons">
        <button className="blue-activeButton">check Now</button>
        <button className="white-activeButton">Connect <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="arrow-path" d="M17.7573 18L21.2769 13.8839C21.6943 13.3957 21.6943 12.6043 21.2769 12.1161L17.7573 8.00002M20.9638 13L5.99994 13" stroke="black" stroke-width="1.5" stroke-linecap="round" />
        </svg> </button>
      </div>
    </div>
  )
}
export default IntroLeft