import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import {
  ConnectButtonStyle,
  HeaderStyle,
  LogoStyle,
} from "../../Styles/Header";
import { formatAddress } from "../../utils/helpers";

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <ConnectButton />
    </HeaderStyle>
  );
};

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="img">
        <img src="/scrollswap.svg" alt="uniswap logo" className="" />
      </div>
      /** There should be a path in the scrollswap header that links to the
      homepage like a link tag */
      <h3>ScrollSwap</h3>
    </LogoStyle>
  );
};

export const ConnectButton = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const handleButtonClick = () => {
    open();
  };
  return (
    <ConnectButtonStyle onClick={handleButtonClick}>
      {isConnected ? formatAddress(address ?? "") : "Connect Wallet"}
    </ConnectButtonStyle>
  );
};
