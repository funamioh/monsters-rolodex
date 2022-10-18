import "./search-box.styles.css"

export const SearchBox = props => (
        <input
          className='search-box'
          type="search"
          placeholder='search monster'
          onChange={props.onSearchChange}
        />
        );
