import React from 'react';

export default function LineInProgress({ title, type, deadLine }) {

    return (
        <tr>
            <td className="td_proyect"><a className="linkDetail" href="/detail">{title}</a></td>
            <td className="td_type">{type}</td>
            <td className="td_deadline">{deadLine}</td>
        </tr>
    )
}