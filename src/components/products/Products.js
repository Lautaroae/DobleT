import React, { useEffect } from 'react'
import { Connect } from 'react-redux'


const Products = (props) => {
    useEffect(() => {
        props.fetchApiData()
        console.log(props)
    }, [])
    return (
        <>

        </>
    )
}

export default Products