import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordResponse } from './types';
import { formtDate } from './helpers'; 
import Pagination from './Pagination'; 
import Filters from '../../components/Filters'

const BASE_URL = 'https://search-gamer.herokuapp.com';

const Records = () => {
    const [ recordsResponse, setRecordsResponse ] = useState<RecordResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
        .then(response => setRecordsResponse(response.data))
    },[activePage]);

    return (
        <div className="page-container">
           <Filters link="/charts" linkText="VER GRÁFICO"/>
          <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>INSTANTE</th>
                    <th>NAME</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GÊNERO</th>
                    <th>TITULO DO GAME</th>
                </tr>
            </thead>
            <tbody>
                {recordsResponse?.content.map(records => (
                <tr key={records.id}>
                    <th>{formtDate(records.moment)}</th>
                    <th>{records.name}</th>
                    <th>{records.age}</th>
                    <th className="text-secondary">{records.gamePlatform}</th>
                    <th>{records.genreName}</th>
                    <th className="text-primary">{records.gameTitle}</th>
                </tr>
                ))}                
            </tbody>
          </table>
        <Pagination 
            activePage={activePage}
            goToPage={(index: number) => setActivePage(index)}
            totalPages={recordsResponse?.totalPages}
            />
        </div>
    )
}

export default Records;