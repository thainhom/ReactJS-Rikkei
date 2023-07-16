import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';

const NUMBER_ITEMS_PER_PAGE = 5;

function SimplePagination({ items, setDisplayItems }) {
    const [curentPage, setCurentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        // Tính số trang dựa trên số lượng mục
        setTotalPage(Math.ceil(items.length / NUMBER_ITEMS_PER_PAGE))
        // Cập nhật các mục hiển thị dựa trên trang hiện tại
        const firstPosition = (curentPage - 1) * NUMBER_ITEMS_PER_PAGE
        const lastPosition = firstPosition + NUMBER_ITEMS_PER_PAGE
        setDisplayItems(items.slice(firstPosition, lastPosition))
    }, [items, curentPage])
    let pages = []
    for (let pageNumber = 1; pageNumber <= totalPage; pageNumber++) {
        // Tạo một Pagination.Item cho mỗi số trang
        pages.push(<Pagination.Item active={pageNumber === curentPage} key={pageNumber} onClick={() => setCurentPage(pageNumber)} >{pageNumber}  </Pagination.Item>)


    }
    return (
        <Pagination>
            {/* Nút trang đầu tiên */}
            <Pagination.First disabled={curentPage === 1} onClick={() => setCurentPage(1)} />
            {/* Nút trang trước đó */}
            <Pagination.Prev disabled={curentPage === 1} onClick={() => setCurentPage(curentPage - 1)} />
            {/* Hiển thị số trang */}
            {pages.map((page) => {
                return page
            })}
            {/* Nút trang kế tiếp */}
            <Pagination.Next disabled={curentPage === totalPage} onClick={() => setCurentPage(curentPage + 1)} />
            {/* Nút trang cuối cùng */}
            <Pagination.Last disabled={curentPage === totalPage} onClick={() => setCurentPage(totalPage)} />
        </Pagination>
    );
}

export default SimplePagination;