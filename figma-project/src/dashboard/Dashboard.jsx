import React from 'react'
import MaterialModal from '../modal/ReactModal/MaterialModal';
import { useContext } from 'react';
import { openContext } from '../modal/ReactModal/openProvider';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';





import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { LineChart } from '@mui/x-charts/LineChart';





function createData(currObj,avail ,amount,action) {
  return { currObj ,avail ,amount,action };
}

const rows = [
  createData({name:"BTC" ,des:"Bitcoin"}, 3," $4536", "Convert"),
  createData({name:"ETH" ,des:"Ethereum"} , 6, " $4536", "Convert"),
  createData({name:"USDT" ,des:"TetherUS"}, 1, " $4536", "Convert"),
  createData({name:"BTC" ,des:"Bitcoin"}, 12, " $4536", "Convert"),
  createData({name:"ETH" ,des:"Ethereum"}, 4, " $4536", "Convert"),
  createData({name:"USDT" ,des:"TetherUS"}, 2, " $4536", "Convert"),
];


const Dashboard = () => {
  const {open ,setOpen} = useContext(openContext);
 

  function openModal(e)
  {
   e.preventDefault();
   setOpen(true);
   console.log(open);
  }






  return (
    <>
    <div className='dashHeading'>Dashboard</div>
    <div className='dashboard '>
      
      <Card
      className="dashCard"
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        // to make the demo resizable
        overflow: 'auto',
        // resize: 'horizontal',x
        '--icon-size': '100px',
      }}
    >
      <CardOverflow>
        <AspectRatio
          variant="outlined"
        
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
           
            <img src="/src/dash.png" alt="dashPic" />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography className="profileName" level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
        John Doe
      </Typography>
      <CardContent className="profileMail" sx={{ maxWidth: '40ch' }}>
        youremail@gmail.com
      </CardContent>
      <CardActions
        orientation="vertical"
        className="btnContainer"
        >
        <button className='dashBtn btn-active'>
        <i className="fa-solid fa-wallet "></i> &nbsp; My Wallet
        </button>
        <button className='dashBtn'>
        <i className="fa-regular fa-address-card"></i>&nbsp;  My Membership Club
        </button>
        <button className='dashBtn '>
        <i className="fa-regular fa-user"></i> &nbsp;My Account
        </button>
        <button className='dashBtn'>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Log Out
        </button>
      </CardActions>
    </Card>
     
    <div className="majorCard">
      <div className="section1">
        <div className="currency">
          <div className="currName">My IVC Token Balance</div>
          <div className="currDetail"><img src="/src/Vector.png" alt="Currency" style={{backgroundColor:"black", borderRadius:"50%" , height:"30px" }} /> 10.23214</div>
          <p className='currDollar'>$ 6789</p>
        </div>
        <div className="currBtnContainer">
          <button className='currBtn'>Deposit</button>
          <button className='currBtn'>Withdraw</button>
        </div>
      </div>
      <div className="section2">
      <TableContainer className='tableContainer'>
      <Table className='tableText' sx={{ minWidth: 650 }}>
        <TableHead className='tHead'>
          <TableRow>
            <TableCell>My Coins <i className="fa-solid fa-up-down sortIcon"></i></TableCell>
            <TableCell align="right">Available <i className="fa-solid fa-up-down sortIcon"></i></TableCell>
            <TableCell align="right">Amount <i className="fa-solid fa-up-down sortIcon"></i></TableCell>
            <TableCell align="right">Action <i className="fa-solid fa-up-down sortIcon"></i></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.currObj.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='tableRow'
            >
              <TableCell component="th" scope="row">
             <img src="/src/BitCoint.png" height={ "25px" }  alt="" /> &nbsp;<b> {row.currObj.name}</b>       
             <span className="tableDes"> {row.currObj.des} </span>
              </TableCell>
              <TableCell align="right"><b> {row.avail} </b></TableCell>
              <TableCell align="right"> <b> {row.amount}</b></TableCell>
              <TableCell align="right"> <u>{row.action}</u></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <div className="section3">
      
 <div className="card graphCard">
  <div className="card-body">
  <div className="tokenBody">
  <img src="/src/Vector.png" style={{backgroundColor:"black", borderRadius:"50%" , height:"25px" , marginTop:"12px"}} alt="" />
    <div className="token">
    <h5 className="card-title">Ivest Club Token</h5>
    <p>IVC</p>
    </div>
    <div className="tokenIcon">
    <i className="fa-solid fa-caret-up"></i>
    </div>
    </div>
    <div className="tokenDetail">
      <div>
    <h5 className="card-subtitle mb-2 "><b> $ 43,353,343 </b></h5> 
    <p className="card-text">+0.25 %</p>
    </div>
    <div className='cardChart'>
    <LineChart
  xAxis={[{ data: [1, 2, 3] }]}
  series={[
    {
      data: [2, 5.5, 2],
    },
  ]}
  width={200}
  height={150}
/>
    </div>
    </div>
    
  </div>





 </div>
 <div className="currGraph card">
 
 <Stack className="lineGraph" direction="row" >
  
      <Box className="graphBox">
        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={150} />
      </Box>
      
    </Stack>
 </div>
      </div>
      <div className="section4">
      <div className="conHeading">Buy IVC</div>
      <div className="currConverter">
        <div className="converter1">
          You Pay
        <div className="input-group dash-input-group mb-3">
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   <img src="/src/BitCoint.png" height={"20px"}  alt="btc" /> BTC
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
  <li><a className="dropdown-item active" href="#">BTC</a></li>
    <li><a className="dropdown-item" href="#">USDT</a></li>
    <li><a className="dropdown-item" href="#">ETH</a></li>
  </ul>
      </div>
     <input type="text" className="form-control dash-form" aria-label="Text input with checkbox"/>
      </div>
        </div>
        <div className="converter2">
          You Get
        <div className="input-group dash-input-group mb-3">
        <div>
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="/src/Vector.png" alt="Currency" style={{backgroundColor:"black", borderRadius:"50%" , height:"20px" }} />  IVC
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#">BTC</a></li>
    <li><a className="dropdown-item" href="#">USDT</a></li>
    <li><a className="dropdown-item" href="#">ETH</a></li>
    
  </ul>
      </div>
     <input type="text" className="form-control dash-form" aria-label="Text input with checkbox"/>
      </div>
        </div>
        
      </div>
      <div className="convDes" align="center">
          The Price will be Recalculated in 4.5s
        </div>
      <div className="conBtn">
        Buy Now
      </div>
      </div>
      
    </div>
      </div>

    {<button onClick={openModal}>Click Here to Open Modal</button>}
      <MaterialModal >

<div className='ModalContainer'>
    <div className="row">
      <div className="col-12">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Now tell us about your current Financial knowedge!</h1>
      </div>
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Do you currently own any Cyrptocurrencies, Stocks, bonds, real estate or any other investments?</p>
      </div>
    </div>
    
    <div className="row container dash-form-check">
    <div class="form-check  col-3 dash-check" >
  <input class="form-check-input dash-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Yes
  </label>
</div>
<div class="form-check  col-3 dash-check">
  <input class="form-check-input dash-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
  No
  </label>
</div>
    
    
    
    
    </div>


    <div className="modalBtns row">
      <button type="button" class="btn-submit" data-bs-dismiss="modal">Submit</button>
      <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
    </div>
    </div>
</MaterialModal>
      </>
  
  )
}

export default Dashboard;
