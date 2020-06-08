import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

FilterJob.propTypes = {
    onSubmit : PropTypes.func,          // gõ ptf
};

FilterJob.defaultProps = {
    onSubmit : null,
};

function FilterJob(props) {
    const {onSubmit} = props;
    const [filterItem, setFilterItem] = useState('');

    // sử dụng bounce --> useRef tạo ra 1 cái object và object này giữ giá trị tồn tại giữa các lần render
    const typingTimeoutRef = useRef(null);
    function handleFilterChange(e) {
        const value = e.target.value;
        setFilterItem(value);

        if(!onSubmit) return;

        // typingTimeoutRef.current --> current là giá trị hiện tại
        // sau 300 ko gõ thì mới submit,nhưng trước khi set tiemout mới thì ta phải clear timeout cũ đi
        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                filterItem : value
            };
            onSubmit(formValue);
        }, 300);
    }
    return (
        <form>
            <input 
                type="text"
                value={filterItem}
                onChange={handleFilterChange}
            />
        </form>
    );
}

export default FilterJob;