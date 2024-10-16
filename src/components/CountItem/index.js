import './index.css'

const CountItem = props => {
  const {eachItem} = props
  const {name, count} = eachItem
  return (
    <li>
      <p className="item-name">
        {name} : {count}
      </p>
    </li>
  )
}

export default CountItem
