import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { useCookies,removeCookies } from 'react-cookie';
import * as ApiCaller from './../../helper/index';
import Main from '../../components/main/Main';
function Listbooking(props) {
    const [folioData, setFolioData] = useState();
  const [cookies] = useCookies(['']);
  const token = cookies.access_token;
  useEffect(() => {
    callApi();
  }, []);
  function callApi() {
    
    ApiCaller.handleGet("api/folio/", token)
      .then((res) => {
        setFolioData(res.data.data)
      })
      .catch((err) => {
        console.err();
      });
  }
  return (
   <Main>
        <div>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          options={{
            filtering: true,
            search: true,
            exportButton: true
          }}
          columns={[
            { title: "ID", field: "id" },
            { title: "Confirm No", field: "confirm_no" },
            { title: "Người đặt", field: "customer_name" },
            { title: "Tình trạng", field: 'status_folio', render: rowData => <span className="text-success" style={{ fontWeight: 'bold', minWidth: '100px' }}>{rowData.status_folio}</span> },
            { title: "Số phòng", field: "room_id" },
            { title: "Rate Code", field: "price_total" },
            { title: "Rate Override", field: "rate_override" },
            { title: "Tiền ứng trước", field: "price_advance" },
            { title: "Ngày đến", field: "date_arrival" },
            { title: "Ngày đi", field: "date_department" },
          ]}
          data={folioData}
          title="Showdata"
        />
      </div>
    </div>
   </Main>
  );
}

export default Listbooking;