import React from 'react'
import cx from 'classnames'
import assign from 'object-assign'
import style from './style.css'

class Spinner extends React.Component {
  static defaultProps = {
    width: 20,
    type: 'white'
  }
  static propTypes = {
    width: React.PropTypes.number,
    type: React.PropTypes.oneOf(['white', 'gray'])
  }
  constructor(props) {
    super(props)
  }
  render() {
    let props = this.props
    let styles = assign({
      width: props.width + 'px',
      height: props.width + 'px'
    }, props.style || {})
    let type = props.type === 'white' ? style.white : style.gray
    let className = cx(props.className,
      type, style.spinner, style.animating, {
      [style.large]: props.width >= 35 ? true : false
    })
    return (
      <div {...props} className={className} style={styles}>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
        <div className={style.blade}></div>
      </div>
    )
  }
}

export default Spinner
