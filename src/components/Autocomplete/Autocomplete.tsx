import React, { useState, useRef } from 'react';
import './Autoсomplete.css';
import { StatusMessage } from '../../enums/StatusMessages';
import { debounce } from '../../utils/debounce';
import { DataItem } from '../../types/DataItem';

interface AutoCompleteProps {
    minimumQueryLength?: number;
    search: () => Promise<DataItem[]>;
}

const Autocomplete: React.FC<AutoCompleteProps> = ({ search, minimumQueryLength = 2, ...rest }) => {
    const [suggestions, setSuggestions] = useState<DataItem[]>([]);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>(StatusMessage.EMPTY);
    const inputRef = useRef<HTMLInputElement>(null);

    const fetchData = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!value || value.length < minimumQueryLength) {
            setSuggestions([]);
            setStatusMessage(StatusMessage.EMPTY);
            return;
        }

        try {
            setStatusMessage(StatusMessage.LOADING);
            const result = await search();

            const filteredSuggestions = result.filter(item =>
                item.name.toLowerCase().includes(inputRef.current?.value?.toLowerCase() ?? '')
            );
            setSuggestions(filteredSuggestions);
            setStatusMessage(filteredSuggestions.length ? StatusMessage.EMPTY : StatusMessage.NO_OPTIONS);
        } catch (error) {
            setStatusMessage(StatusMessage.SOMETHING_WENT_WRONG);
            console.error(error);
        }
    };

    // Search as you type, send every time new request after input changed + debounce time passed.
    const debouncedFetchData = debounce(fetchData, 500);

    const handleSuggestionClick = (name: string) => {
        if (inputRef.current) {
            inputRef.current.value = name;
            setSuggestions([]);
        }
        setSuggestions([]);
    };


    const renderSuggestions = () => {
        if (!inputRef.current?.value || (!statusMessage && !suggestions.length)) {
            return null;
        }

        const inputValue = inputRef.current.value.toLowerCase();

        return (
            <ul className="suggestions-list">
                {statusMessage ? (
                    <div className="status-message">{statusMessage}</div>
                ) : (
                    suggestions.map(item => {
                        const index = item.name.toLowerCase().indexOf(inputValue);
                        const beforeText = item.name.slice(0, index);
                        const highlightedText = item.name.slice(index, index + inputValue.length);
                        const afterText = item.name.slice(index + inputValue.length);

                        return (
                            <li
                                className="suggestions-list-item"
                                key={item.id}
                                /* not onClick to let handler capture item.name before css will hide the block */
                                onMouseDown={() => handleSuggestionClick(item.name)}

                            >
                                {beforeText}
                                <span className="highlight">{highlightedText}</span>
                                {afterText}
                            </li>
                        );
                    })
                )}
            </ul>
        );
    };

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                ref={inputRef}
                onChange={debouncedFetchData}
                placeholder="Type something..."
                className="autocomplete-input"
                {...rest}
            />
            {renderSuggestions()}
        </div>
    );
};

export default Autocomplete;
