import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [calculate, setCalulate] = useState(false);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState(0);
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);
  const onClick = () => {
    setCalulate((prev) => !prev);
  };
  const showValue = (e) => setSelectCoin(() => e.target.value);
  const onChange = (e) => setMoney(() => e.target.value);

  useEffect(() => {
    if (money > 0 && selectCoin > 0) {
      setResult(money / selectCoin);
    }
    // console.log("현금 : " + money);
    // console.log("코인 : " + selectCoin); //우리가 선택한 코인 금액
  }, [calculate]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=400")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! : {loading ? "" : coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <hr />
      <select name="money" size="5" onChange={showValue}>
        <option>원하는 코인을 선택하세요</option>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <div>
        <h2>현금 얼마 투자할래?(한국 돈 기준)</h2>
        <input type="number" onChange={onChange}></input>
        <input type="button" value="Exchange" onClick={onClick} />
        <h3>{result}</h3>
        <p>의 코인 환전이 가능합니다.</p>
      </div>
    </div>
  );
}

export default App;
