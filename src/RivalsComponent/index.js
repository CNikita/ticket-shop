import "./style.scss";

export default function RivalsComponent({ activeEvent }) {
  const { rival1, rival2 } = activeEvent
  return (
    <>
      <div className="rival left">
        <div className="left__content"> {rival1}</div>
        <div className="left__parallelogram " />
      </div>
      <div className="rival right">
        <div className="right__parallelogram " />
        <div className="right__content"> {rival2}</div>
      </div>
    </>
  )
}