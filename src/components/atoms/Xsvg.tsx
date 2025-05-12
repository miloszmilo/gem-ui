export default function Xsvg({ isChecked }: { isChecked: boolean }) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xmlSpace="preserve" className={`size-full ${!isChecked ? "hidden" : ""} absolute top-[0] left-[0]`}>

      <g id="Layer_3"
        strokeDashoffset={100}
        strokeDasharray={100}>
        <line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="8.5" y1="41.5" x2="41.5" y2="8.5" className="animate-draw-x" />
        <line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="41.5" y1="41.5" x2="8.5" y2="8.5" className="animate-draw-x" />
      </g>
    </svg>
  )
}

