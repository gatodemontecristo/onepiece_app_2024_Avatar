
export const ProducersItem = ({src,name}) => {
  return (
    <li>
    <img
      src={src}
      alt={name}
      title={name}
    />
  </li>
  )
}
