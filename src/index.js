import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import assign from 'object-assign'
import style from './style.css'

class Spinner extends React.Component {
  static defaultProps = {
    width: 20,
    type: 'white',
    animating: true
  }
  static propTypes = {
    width: PropTypes.number,
    type: PropTypes.oneOf(['white', 'gray']),
    animating: PropTypes.bool
  }
  render() {
    let props = this.props
    let styles = assign({
      width: props.width + 'px',
      height: props.width + 'px'
    }, props.style || {})
    let type = props.type === 'white' ? style.white : style.gray
    let className = cx(props.className,
      type, style.spinner, {
      [style.large]: props.width >= 35 ? true : false,
      [style.animating]: props.animating
    })
    return (
      <div className={className} style={styles}>
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
