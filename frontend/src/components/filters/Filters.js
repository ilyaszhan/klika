import { Component } from "react"

class Filters extends Component {
    render() {
        let {filters, setFilter, dark, setTheme} = this.props
        let elements = []

        for(let key in filters) {
            let data = filters[key]
            let {value, label, variants} = data
            let options = []

            for(let variant of variants) {
                options.push(<option value={variant.key} key={variant.key}>{variant.label}</option>)
            }

            elements.push((
                <div className="form-group" key={key}>
                    <label htmlFor={key}>{label}</label>
                    <div className="input-wrapper">
                        <select id={key} defaultValue={value} onChange={(e) => {setFilter(key, e.target.value)}}>{options}</select>
                        <div className="arrow icon-down"></div>
                    </div>
                </div>
            ))
        }

        return (
            <div className="app-filters article">
                {elements}
                <div className="toggler-wrapper">
                    <label htmlFor="theme">Dark theme:</label>
                    <div className="toggler">
                        <input type="checkbox" id="theme" defaultChecked={dark} onChange={(e) => {setTheme(e.target.checked)}} />
                        <label htmlFor="theme"><span></span></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters