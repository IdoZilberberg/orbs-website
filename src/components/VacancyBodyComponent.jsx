import React from 'react';

const VacancyBodyComponent = ({ sectionTitle, sectionBody }) => {
    return (
        <div>
            <div
                className='vacancyPopupSectionTitle'
            >
                {sectionTitle + ':'}
            </div>
            <ul
                className='vacancyPopupSectionList'
            >
                {sectionBody.map(body =>
                    <li
                        key={`${sectionTitle}${sectionBody.indexOf(body)}`}
                    >
                        {body}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default VacancyBodyComponent;
