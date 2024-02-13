import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const generatePayload = require('promptpay-qr');

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
  margin-bottom: 40px;
`;

const Container = styled.div`
  height: 100vh;
  padding: 4em;
  background: papayawhip;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const QRWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px;
  background-color: white;
  border: 2px solid palevioletred;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px;
`;

function App() {
  const [promptpay, setPromptPay] = useState("062-671-8672");
  const [amount, setAmount] = useState(5.00);
  const [qrCode, setQRCode] = useState("");

  useEffect(() => {
    handleQR();
  }, []);

  function handleQR() {
    setQRCode(generatePayload(promptpay, { amount }));
  }

  return (
    <Container>
      <Title>ชำระเงินที่นี้</Title>
      <FlexContainer>
        <QRWrapper>
          <QRCode value={qrCode} />
          <InputWrapper>
            <p>ชื่อบัญชี อาทิตยา ฆารเลิศ</p>
            <p>โปรดตรวจสอบจำนวนเงินให้ถูกต้องก่อนทำรายการ จำนวนเงิน {amount} บาท</p>
          </InputWrapper>
        </QRWrapper>
      </FlexContainer>
    </Container>
  );
}

export default App;
