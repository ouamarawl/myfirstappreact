import'./sectionwerapper.css'

const Sectionwerapper = (props) => {
  return (
    <div className='section-wrapper'>
        {props.children}
    </div>
  )
}

export default Sectionwerapper