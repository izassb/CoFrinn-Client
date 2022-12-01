/* eslint-disable */
import React, {useState, useEffect} from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';
import AuthService from '../../services/auth';

const Resume = () => {

  const user = AuthService.getUserAuth(); 

  const [saldo, setSaldo] = useState(0);
  const [totalSaldo, setTotalSaldo] = useState(0)
  const [receita, setReceita] = useState(0);
  const [totalReceita, setTotalReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [totalDespesa, setTotalDespesa] = useState(0);

  useEffect(() => {

    AuthService.obterSaldoUsuario(user.id).then( response => {
        setSaldo({saldo: response.data})
        setTotalSaldo(`R$ ${saldo.saldo}`);
      }).catch( error => {
        console.log(error); 
      });

      AuthService.obterReceitaUsuario(user.id).then( response => {
        setReceita({receita: response.data})
        setTotalReceita(`R$ ${receita.receita}`);
      }).catch( error => {
        console.log(error); 
      });

      AuthService.obterDespesaUsuario(user.id).then( response => {
        setDespesa({despesa: response.data})
        setTotalDespesa(`R$ ${despesa.despesa}`);
      }).catch( error => {
        console.log(error); 
      });
  },[saldo, receita, despesa]);

    return (
        <C.Container>
        <ResumeItem
          title="Entradas"
          Icon={FaRegArrowAltCircleUp}
          value={totalReceita}
        />
        <ResumeItem
          title="Saídas"
          Icon={FaRegArrowAltCircleDown}
          value={totalDespesa}
        />
        <ResumeItem title="Total" Icon={FaDollarSign} 
        value={totalSaldo}
        />
      </C.Container>
    )
};
export default Resume;
