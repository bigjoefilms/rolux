// import { AuthProvider } from '@arcana/auth';
// import { ethers } from 'ethers';

// const clientId = 'Your_Client_ID_From_Arcana_Dashboard';

// export const arcanaAuth = async () => {
//   const auth = new AuthProvider(`${clientId}`);
//   try {
//     await auth.init();
//     const arcanaProvider = await auth.connect();
//     const provider = new ethers.providers.Web3Provider(arcanaProvider);
//     const blockNumber = await provider.getBlockNumber();
//     return blockNumber; // or return whatever you need after successful connection
//   } catch (error) {
//     console.error('Auth connection error:', error);
//     throw error;
//   }
// };