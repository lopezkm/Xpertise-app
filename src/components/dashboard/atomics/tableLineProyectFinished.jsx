import React from 'react';

export default function LineFinished({ title, type, done }) {

    return (
        <tr>
            <td className="td_proyect">{title}</td>
            <td className="td_type">{type}</td>
            <td className="td_deadline">{done}</td>
        </tr>
    )
}