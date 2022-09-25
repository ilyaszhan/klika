import { Component } from "react"

class TableItem extends Component {
    render()  {
        let {data} = this.props

        return (
            <div className="table-item">
                <div className="author">{data.author}</div>
                <div className="name">{data.name}</div>
                <div className="genre">{data.genre}</div>
                <div className="year">{data.year}</div>
            </div>
        )
    }
}

export default TableItem