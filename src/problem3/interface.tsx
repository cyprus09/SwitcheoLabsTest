import React, { useEffect, useMemo, useState } from 'react';
import WalletRow from './WalletRow'; // Assuming this import
import { BoxProps } from '######'; // not so sure where BoxProps comes from

interface WalletBalance {
  currency: string;
  amount: number;
}

//formattedWalletBalance can inherit from above
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

//not so sure about BoxProps function
interface Props extends BoxProps {}

const Datasource = {
  async getPrices(url: string): Promise<{ [currency: string]: number }> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return {};
    }
  },
};

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances(); // Assuming this function exists

  // Defining type-safety for prices with a nullable initial value
  const [prices, setPrices] = useState<{ [currency: string]: number } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Datasource.getPrices("https://interview.switcheo.com/prices.json");
        setPrices(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        // Simplified condition to filter positive amounts
        return balancePriority > -99 && balance.amount > 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        // Simplified sorting by blockchain priority
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        return rightPriority - leftPriority;
      });
  }, [balances]);

  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdPrice = prices?.[balance.currency] || 0; // Handle missing price gracefully
    const usdValue = usdPrice * balance.amount;
    return (
      <WalletRow
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};

export default WalletPage;

//removed any type and made it string and combines 'zilliqa' and 'neo'
function getPriority(blockchain: string): number {
  switch (blockchain) {
    case 'Osmosis':
      return 100;
    case 'Ethereum':
      return 50;
    case 'Arbitrum':
      return 30;
    case 'Zilliqa':
    case 'Neo':
      return 20;
    default:
      return -99;
  }
}
