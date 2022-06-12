import * as React from 'react';
import Box from '@mui/material/Box';
import {Button,IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled} from '@mui/material/styles';

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
// import  dotenv  from 'dotenv';
// console.log('dotenv',dotenv)
// dotenv.config();
const ConnectButton  = styled(Button)(({theme}) => ({
  background:theme.palette.secondary.main,
  color:theme.palette.text.primary,
}))

const ModalBox  = styled('div')(({theme}) => ({
  background:theme.palette.primary.main,
  position:'absolute',
  left:'50%',
  top:'50%',
  transform: 'translate(-50%, -50%)',
  width:'500px',
  border:'2px solid',
  borderRadius:'5px',
  boxShadow:'30px',
  borderColor:theme.palette.secondary.main,
  display:'flex',
  justifyContent:'space-between',
  alignContent:'baseline',
  alignItems:'center',
  color:theme.palette.text.primary,
  padding:'30px'
}))


const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
 });
 
 const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  supportedChainIds: [1, 3, 4, 5, 42]
 });
 
 const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
 });


export default function WalletModal() {
  const [open, setOpen] = React.useState(false);
  const {
    chainId,
    account,
    activate,
    deactivate,
  } = useWeb3React();
  const userAccount = account ? `${account.substring(0,2)}...${account.substring(account.length-4)}` : 'CONNECT';


  const handleOpen = () => {
    setOpen(true);
    // console.log('ChainId:',chainId);
  }
  console.log("account",account);
  console.log("chainId",chainId);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ConnectButton onClick={handleOpen}>{userAccount}</ConnectButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
            <IconButton onClick={() => { activate(CoinbaseWallet) }}>
              <img style={{width:'64px'}} src='./assets/walletIcon/coinbase.png'></img>
            </IconButton>
            <IconButton onClick={() => { activate(WalletConnect)}}>
              <img style={{width:'64px'}} src='./assets/walletIcon/walletConnect.png'></img>
            </IconButton>
            <IconButton onClick={() => { activate(Injected)}}>
              <img  src='./assets/walletIcon/MetaMask_Fox.svg.png'></img>
            </IconButton>
            <Button sx={{background:theme => theme.palette.secondary.main,color:theme => theme.palette.text.primary}} onClick={deactivate}>Disconnect</Button>
        </ModalBox>
      </Modal>
    </div>
  );
}
