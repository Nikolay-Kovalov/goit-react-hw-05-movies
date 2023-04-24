import { useState } from "react"
import { Button, ButtonName, Form, Input } from "./SearchBar.styled";
import PropTypes from 'prop-types';


export const SearchBar = ({ onSearch }) => {

    const [querry, setQuerry] = useState('');

    const handlesearch = (evt) => {
        setQuerry(evt.target.value.toLowerCase())
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (querry.trim() === '') {
            alert('Enter film name');
        }
        onSearch(querry);
        setQuerry('')
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input type="text"
                    name='querry'
                    value={querry}
                    autoComplete='off'
                    autoFocus
                    placeholder="Search..."
                    onChange={handlesearch} />
                <Button type="submit"><ButtonName>Search</ButtonName></Button>

            </Form>

        </>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}