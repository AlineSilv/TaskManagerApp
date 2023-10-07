import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import moment from "moment";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 8px;
  max-width: 1120px;
  margin: 20px auto;
  
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

`;

export const TdDateGroup = styled.td`
color:#cccc;
display:row;
padding-left:12px;
justify-content: center;
text-align: center; 
border-radius:8px;
font-weight:800;
background-color: rgba(255, 105, 180, 0.1);
padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? "center" : "start")};
width: ${(props) => (props.width ? props.width : "auto")};

`;

export const TdDate = styled.td`
color:#FFFF;
padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? "center" : "start")};
width: ${(props) => (props.width ? props.width : "auto")};
`;

export const FaTrashBox =styled.div`
cursor: pointer;

`;
export const FaEditBox = styled.div`
cursor: pointer;
margin-right:25px;
`;


const Grid = ({ users, setUsers, setOnEdit }) => {
  const groupByDate = (data) => {
    const groupedData = {};

    data.forEach((item) => {
      const date = moment(item.date).format('DD/MM/YYYY');

      if (!groupedData[date]) {
        groupedData[date] = [];
      }

      groupedData[date].push(item);
    });

    return groupedData;
  };

  const groupedUsers = groupByDate(users);

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Data</Th>
          <Th>Nome</Th>
          <Th>Lembrete</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(groupedUsers).map((date) => (
          <React.Fragment key={date}>
            <Tr>
              <TdDateGroup colSpan={5}>{date} - Registros do Dia:</TdDateGroup>
            </Tr>
            {groupedUsers[date].map((item, i) => (
              <Tr key={i}>
                <TdDate width="30%">{moment(item.date).format('DD/MM/YYYY')}</TdDate>
                <Td width="30%">{item.nome}</Td>
                <Td width="50%">{item.lembrete}</Td>
                <Td alignCenter width="8%">
                  <FaEditBox><FaEdit onClick={() => handleEdit(item)} /></FaEditBox>
                </Td>
                <Td alignCenter width="8%">
                  <FaTrashBox><FaTrash onClick={() => handleDelete(item.id)} /></FaTrashBox>
                </Td>
              </Tr>
            ))}
          </React.Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;