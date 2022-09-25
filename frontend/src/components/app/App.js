import { Component } from 'react'
import Filters from '../filters/Filters'
import Table from '../table/Table'
import './app.scss'

const allSongs = () => {
	return [
		{
			id: 1,
			name: 'For What It\s Worth',
			genre: 'Folk Rock',
			author: 'Buffalo Springfield',
			year: 1967
		},
		{
			id: 2,
			name: 'Johnny B. Goode',
			genre: 'Rock & Roll',
			author: 'Chuck Berry',
			year: 1959
		},
		{
			id: 3,
			name: 'Yesterday',
			genre: 'British Invasion',
			author: 'The Beatles',
			year: 1965
		},
		{
			id: 4,
			name: 'Like a Rolling Stone',
			genre: 'Folk Rock',
			author: 'Bob Dylan',
			year: 1965
		},
		{
			id: 5,
			name: 'Imagine',
			genre: 'Rock',
			author: 'John Lennon',
			year: 1971
		},
		{
			id: 6,
			name: 'Stairway to Heaven',
			genre: 'Rock',
			author: 'Jimmy Page',
			year: 1971
		},
		{
			id: 7,
			name: 'Heartbreak Hotel',
			genre: 'Rock & Roll',
			author: 'Elvis Presley',
			year: 1956
		},
		{
			id: 8,
			name: 'Gimme Shelter',
			genre: 'Rock',
			author: 'The Rolling Stones',
			year: 1969
		},
		{
			id: 9,
			name: 'Let It Be',
			genre: 'Rock',
			author: 'The Beatles',
			year: 1970
		},
		{
			id: 10,
			name: 'What\'s Going On',
			genre: 'Soul',
			author: 'Marvin Gaye',
			year: 1971
		},
		{
			id: 11,
			name: 'Good Vibrations',
			genre: 'Psychedelic Pop',
			author: 'The Beach Boys',
			year: 1967
		},
		{
			id: 12,
			name: 'Oh, Pretty Woman',
			genre: 'Rock',
			author: 'Roy Orbison',
			year: 1964
		},
		{
			id: 13,
			name: 'Respect',
			genre: 'Soul',
			author: 'Aretha Franklin',
			year: 1967
		},
		{
			id: 14,
			name: 'Layla',
			genre: 'Blues Rock',
			author: 'Derek and the Dominos',
			year: 1970
		},
		{
			id: 15,
			name: 'My Generation',
			genre: 'British Invasion',
			author: 'The Who',
			year: 1965
		},
		{
			id: 16,
			name: 'Hey Jude',
			genre: 'Pop',
			author: 'The Beatles',
			year: 1968
		},
		{
			id: 17,
			name: 'The Weight',
			genre: 'Folk Rock',
			author: 'The Band',
			year: 1968
		},
		{
			id: 18,
			name: 'Bohemian Rhapsody',
			genre: 'Rock',
			author: 'Queen',
			year: 1975
		},
		{
			id: 19,
			name: 'All Along the Watchtower',
			genre: 'Psychedelic Rock',
			author: 'The Jimi Hendrix Experience',
			year: 1968
		},
		{
			id: 20,
			name: 'Born to Run',
			genre: 'Heartland Rock',
			author: 'Bruce Springsteen',
			year: 1975
		},
		{
			id: 21,
			name: 'Wish You Were Here',
			genre: 'Acoustic Rock',
			author: 'Pink Floyd',
			year: 1975
		},
		{
			id: 22,
			name: 'Sympathy for the Devil',
			genre: 'Rock',
			author: 'The Rolling Stones',
			year: 1968
		},
		{
			id: 23,
			name: 'Smells Like Teen Spirit',
			genre: 'Grunge',
			author: 'Nirvana',
			year: 1991
		},
		{
			id: 24,
			name: 'Be My Baby',
			genre: 'Pop',
			author: 'The Ronettes',
			year: 1964
		},
		{
			id: 25,
			name: 'The Tracks of My Tears',
			genre: 'Soul',
			author: 'Smokey Robinson and the Miracles',
			year: 1965
		},
		{
			id: 26,
			name: 'Hotel California',
			genre: 'Rock',
			author: 'Eagles',
			year: 1976
		},
		{
			id: 27,
			name: 'I Heard It Through the Grapevine',
			genre: 'Soul',
			author: 'Marvin Gaye',
			year: 1968
		},
		{
			id: 28,
			name: '(Sittin\ on) the Dock of the Bay',
			genre: 'R&B',
			author: 'Otis Redding',
			year: 1968
		},
		{
			id: 29,
			name: 'I Want to Hold Your Hand',
			genre: 'British Invasion',
			author: 'The Beatles',
			year: 1963
		},
		{
			id: 30,
			name: 'What\'d I Say',
			genre: 'R&B',
			author: 'Ray Charles',
			year: 1959
		},
		{
			id: 31,
			name: 'Jailhouse Rock',
			genre: 'Rock & Roll',
			author: 'Elvis Presley',
			year: 1957
		},
		{
			id: 32,
			name: 'Blowin\' in the Wind',
			genre: 'Folk',
			author: 'Bob Dylan',
			year: 1963
		},
		{
			id: 33,
			name: 'Blitzkrieg Bop',
			genre: 'Punk',
			author: 'Ramones',
			year: 1976
		},
		{
			id: 34,
			name: 'Papa\'s Got a Brand New Bag',
			genre: 'R&B',
			author: 'James Brown',
			year: 1965
		},
		{
			id: 35,
			name: 'A Change is Gonna Come',
			genre: 'Soul',
			author: 'Sam Cooke',
			year: 1964
		},
		{
			id: 36,
			name: 'Bridge Over Troubled Water',
			genre: 'Pop',
			author: 'Simon and Garfunkel',
			year: 1970
		},
		{
			id: 37,
			name: 'Bridge Over Troubled Water',
			genre: 'Pop',
			author: 'Simon and Garfunkel',
			year: 1970
		},
		{
			id: 38,
			name: 'Fortunate Son',
			genre: 'Roots Rock',
			author: 'Creedence Clearwater Revival',
			year: 1969
		},
		{
			id: 39,
			name: 'Voodoo Child (Slight Return)',
			genre: 'Psychedelic Rock',
			author: 'The Jimi Hendrix',
			year: 1968
		},
		{
			id: 40,
			name: 'God Only Knows',
			genre: 'Baroque Pop',
			author: 'The Beach Boys',
			year: 1966
		},
	]
}

class App extends Component {
	_limit = 9

	constructor (props) {
		super(props)

		this.state = {
			data: [],
			loading: false,
			filters: {
				author: {
					value: '',
					label: 'Author',
					variants: [
						{
							key: '',
							label: 'Все'
						},
					]
				},
				genre: {
					value: '',
					label: 'Genre',
					variants: [
						{
							key: '',
							label: 'Все'
						},
					]
				},
				year: {
					value: '',
					label: 'Year',
					variants: [
						{
							key: '',
							label: 'Все'
						},
					]
				},
			},
			sort: 0,
			sortBy: '',
			offset: 0,
			type: 'db',
			ended: false,
			refresh: false,
			dark: Number(localStorage.getItem('dark')) ? true : false
		}
	}

	getSongs = (offset, limit, callback) => {
		let {filters, sort, sortBy} = this.state
		let songs = allSongs()
		let url = []
		let params = {offset, limit}

		for(let key in filters) {
			let value = filters[key].value

			if(value) {
				params[key] = value
				songs = songs.filter((item) => {
					return item[key] == value
				})
			}
		}

		if(sortBy) {
			params.sortBy = sortBy
			params.sort = sort
		}

		if(Object.keys(params).length) {
			for(let key in params) {
				let value = params[key]

				url.push(key + '=' + encodeURIComponent(value))
			}
		}
		url = '/api/songs/?' + url.join('&')

		this.setState({loading: true})

		fetch(url)
		.then(res => res.json())
		.then(res => {
			this.setState({loading: false})
			callback(res)
		})
	}

	refreshSongs = () => {
		let {offset} = this.state

		this.getSongs(0, this._limit + offset, (songsData) => {
			let {length, data} = songsData
			let ended = false
			let total = offset + this._limit
	
			if(total >= length) {
				ended = true
			}
	
			this.setState(() => ({data, ended}))
		})
	}

	getFilters = async () => {
		fetch('/api/filters')
		.then(res => res.json())
		.then(res => {
			let keys = ['genre', 'author', 'year']
			let filters = this.state.filters
	
			for(let key of keys) {
				let array = [{key: '',label: 'Все'}]
				let data = res[key]
	
				for(let item of data) {
					array.push({
						key: item,
						label: item,
					})
				}
	
				filters[key].variants = array
			}
	
			this.setState(() => ({filters}))
		})
	}

	setFilter = (key, value) => {
		this.setState(({filters}) => {
			filters[key].value = value
			return {filters, refresh: true}
		})
	}

	setSort = (sortBy, sort) => {
		sort = sort ? 1 : 0
		this.setState(() => {
			return {sortBy, sort, refresh: true}
		})
	}

	setTheme = (isDark) => {
		isDark = isDark ? 1 : 0
		localStorage.setItem('dark', isDark)

		this.setState({dark: isDark})
	}

	componentDidMount = () => {
		this.getFilters()
		this.refreshSongs()
	}

	componentDidUpdate = () => {
		let {refresh} = this.state
		
		if(refresh) {
			this.setState({refresh: false})
			this.refreshSongs()
		}
	}

	loadMore = () => {
		let {offset, data} = this.state
		let newOffset = offset + this._limit
		this.getSongs(newOffset, this._limit, newSongsData => {
			let total = newOffset + this._limit
			let ended = total >= newSongsData.length
	
			this.setState(() => ({
				ended: ended,
				offset: newOffset,
				data: [...data, ...newSongsData.data]
			}))
		})
	}
	
	render() {
		let {data, loading, ended, filters, sort, sortBy, dark} = this.state
		let html = document.querySelector('html')

		if(dark) {
			html.classList.add('dark')
		} else {
			html.classList.remove('dark')
		}

		return (
			<div className="app">
				{loading ? <div className="loading"><span className="spinner"></span></div> : null}
				<Table data={data} ended={ended} sort={sort} sortBy={sortBy} setSort={this.setSort} loadMore={this.loadMore} />
				<Filters filters={filters} setFilter={this.setFilter} dark={dark} setTheme={this.setTheme} />
			</div>
		)
	}
}

export default App
