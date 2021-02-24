function WorkTile({ codeLink, liveLink, preview, techStack, title, desc }) {
  return (
    <div>
      <h4>{ title }</h4>
      <p>{ desc }</p>
      <p>{ codeLink }</p>
      <p>{ liveLink }</p>
    </div>
  )
}

export default WorkTile;
