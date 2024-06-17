import React, { useState, } from 'react';
import axios, {} from 'axios';
import People from "./assets/people.png";
import { Container, Box, Image, Input, Button} from "./styles";




const App = () => {




/* Um Estado com React */
  const [cep, setCep] = useState('');

  const [address, setAddress] = useState({
    logradouro: '',
    bairro: '',
    cidade: ''
  });
  
 


  const handleCepChange = (event) => {



    const newCep = event.target.value.replace(/\D/g,""); 
    
    setCep(newCep);





    if (newCep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${newCep}/json/`)
        .then( response => {
          setAddress({
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade
         
          });
         


        })
        .catch(error => {
          console.error('Erro ao buscar CEP:', error);
          setAddress({
            logradouro: '',
            bairro: '',
            cidade: ''
          });

          
         

        });
    } else {
      setAddress({
        logradouro: '',
        bairro: '',
        cidade: ''
      });
    }
  };
  

  
  return (
    <Container>
      <Box>
        <Image alt="peo" src={People} />
        <Input
          placeholder='Digite aqui o Cep'value={cep} onChange={handleCepChange}
        />
        <Input placeholder='Rua' value={address.logradouro} />
        <Input type='Number' placeholder='Numero' value={address.numero} />
        <Input placeholder='Bairro' value={address.bairro} />
        <Input placeholder='Cidade' value={address.cidade} />
        <Button>Cadastrar</Button>
      </Box>
    </Container>
  );



}



export default App;
