import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import moment from "moment";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 160px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const InputDate= styled.input`
width: 100px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;

&::placeholder {
  padding-left: 2%;
  font-size: 16px;
  color: #ccc;
  font-weight: 510;
}
`;

const InputName= styled.input`
width: 100px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;

&::placeholder {
  padding-left: 2%;
  font-size: 16px;
  color: #ccc;
  font-weight: 510;
}
`;

const InputReminder= styled.input`
width: 250px;
height: 40px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;

&::placeholder {
  padding-left: 2%;
  font-size: 16px;
  color: #ccc;
  font-weight: 510;
}
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  font-weight:800;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #FF69B4;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.date.value = moment(onEdit.date).format('DD/MM/YYYY');
      user.nome.value = onEdit.nome;
      user.lembrete.value = onEdit.lembrete;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.date.value ||
      !user.nome.value ||
      !user.lembrete.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          date: moment(user.date.value, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          nome: user.nome.value,
          lembrete: user.lembrete.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          date: moment(user.date.value, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          nome: user.nome.value,
          lembrete: user.lembrete.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.date.value = "";
    user.nome.value = "";
    user.lembrete.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Data:</Label>
        <InputDate name="date" placeholder="DD/MM/YYYY"/>
      </InputArea>
      <InputArea>
        <Label>Nome:</Label>
        <InputName name="nome" placeholder="Seu nome .."/>
      </InputArea>
      <InputArea>
        <Label>Lembrete:</Label>
        <InputReminder name="lembrete" placeholder="Anotação .."/>
      </InputArea>

      <Button type="submit">REGISTRAR</Button>
    </FormContainer>
  );
};

export default Form;