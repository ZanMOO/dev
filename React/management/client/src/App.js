import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from '@mui/material';
import { withStyles} from '@mui/material/styles';


const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '서문환',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  
  { 'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '961231',
    'gender': '남자',
    'job': '프로그래머'
  },

  { 'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍길동',
  'birthday': '911231',
  'gender': '남자',
  'job': '도적 '
  }
  ,
  
  { 'id': 4,
    'image': 'https://placeimg.com/64/64/2',
    'name': '임상용',
    'birthday': '761211',
    'gender': '남자',
    'job': '륜꾼'
  },

  { 'id': 5,
  'image': 'https://placeimg.com/64/64/3',
  'name': '두진욱',
  'birthday': '860112',
  'gender': '남자',
  'job': '성호넷'
  }
]



class App extends Component {

    render() {
     
      return (
      
      //<TableContainer component={Paper} sx={{ maxWidth: '200px'}} >
      <TableContainer component={Paper} sx={{maxWidth: '1080px'}} >
        
            <Table aria-label='simple table' styceyHead>
                <TableHead>
                  <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별 </TableCell>
                    <TableCell>직업 </TableCell>
                  </TableRow>
                </TableHead>
                
                <TableBody>
                {customers.map(c => {
                  return(
                  <Customer
                    key={c.id}
                    id={c.id} 
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                /> );})}
                
                </TableBody>
              </Table>
          </TableContainer>
                );
  }
}

  
export default App;
