import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();
console.log("hi1");
export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x4ad98B13b90F7DFbBA0fF3b89b213c0dCaD31545"
    );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();
console.log("hi2");
  const publishCampaign = async (form) => {
    try {
      console.log("hi7");
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);
      console.log("hi6");
      console.log("Contract call success", data);
    } catch (error) {
      console.log("Contract call failure", error);
    }
  };
console.log("hi3");
  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');
    console.log("hi5");
    console.log(campaigns)
  }
console.log("hi4");
  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);