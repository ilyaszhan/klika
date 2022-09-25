import { Component } from "react"
import TableItem from "../tableItem/TableItem"

class Table extends Component {
    render() {
        let {data, ended, sort, sortBy, setSort, loadMore} = this.props
        let sortItems = {
            author: 'Author',
            name: 'Song',
            genre: 'Genre',
            year: 'Year',
        }
        let header = []
        let items = data.map((item) => {
            return <TableItem key={item.id} data={item} />
        })

        for(let key in sortItems) {
            let label = sortItems[key]
            let isActive = sortBy === key

            header.push(
                <div className={key} key={key} onClick={() => {setSort(key, isActive ? !sort : 0)}}>
                    <span className="inner">{label}</span>
                    <div className="sort-indocators">
                        <div className={isActive && !sort ? 'icon-up active' : 'icon-up'}></div>
                        <div className={isActive && sort ? 'icon-down active' : 'icon-down'}></div>
                    </div>
                </div>
            )
        }

        return (
            <div className="app-table">
                <div className="table">
                    <div className="table-header">
                        {header}
                    </div>
                    <div className="table-body">
                        {items.length ? items : <div className="empty">No Results</div>}
                    </div>
                </div>
                {!ended ? <button className="btn center" onClick={loadMore}><span className="text icon-loading">Load More</span></button> : null}
            </div>
        )
    }
}

export default Table