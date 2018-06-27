// @flow

import * as React from 'react';
import Button from './button';
import SearchInput from './search_input';

type Props = {
    term: string,
    placeholder?: string,
    buttonTitle?: string,
    onChange?: (term: string) => void,
    children?: React.Node
}

const SEARCH_TITLE = 'Search';

const SearchPanel = ({
  term, placeholder, buttonTitle, onChange, children,
}: Props) => (
        <div className="search-bar">
            <SearchInput
                term={term}
                placeholder={placeholder || SEARCH_TITLE }
                buttonTitle={buttonTitle || SEARCH_TITLE }
                onChange={value => onChange && onChange(value)}
            />
            {children}
        </div>
);

export default SearchPanel;
