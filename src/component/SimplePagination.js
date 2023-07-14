import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
function SimplePagination({ items, setDisplayItems }) {
    const [curentPage, setCurentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        setTotalPage(Math.ceil(items.length / 10))
        // displayItems
        const firstPosition = (curentPage - 1) * 10
        const lastPosition = firstPosition + 10
        setDisplayItems(items.slice(firstPosition, lastPosition))
    }, [items, curentPage])
    let pages = []
    for (let pageNumber = 1; pageNumber <= totalPage; pageNumber++) {
        pages.push(<Pagination.Item active={pageNumber === curentPage} onClick={() => setCurentPage(pageNumber)} >{pageNumber}  </Pagination.Item>)


    }
    return (
        <Pagination>
            <Pagination.First disabled={curentPage === 1} onClick={() => setCurentPage(1)} />
            <Pagination.Prev disabled={curentPage === 1} onClick={() => setCurentPage(curentPage - 1)} />
            {pages.map((page) => {
                return page
            })}
            <Pagination.Next disabled={curentPage === totalPage} onClick={() => setCurentPage(curentPage + 1)} />
            <Pagination.Last disabled={curentPage === totalPage} onClick={() => setCurentPage(totalPage)} />
        </Pagination>
    );
}

export default SimplePagination;