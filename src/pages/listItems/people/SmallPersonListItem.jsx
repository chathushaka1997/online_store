import React from 'react'

const SmallPersonListItem = ({person}) => {
    const {name,age} = person;
  return (
    <>Name : {name}, Age: {age}</>
  )
}

export default SmallPersonListItem