import style from "./Pagination.module.css"
//pendiente flechas siguiente y anterior


const Pagination = ({postPerPage, totalPosts, setCurrentPage, currentPage}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div className={style.pagination_container}>
            {pageNumbers.map((page, index) => {
                return <button className={page === currentPage ? style.active : ""} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            } )}

        </div>

    )
}

export default Pagination